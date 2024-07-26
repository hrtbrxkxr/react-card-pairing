import { useEffect, useRef, useState } from "react";
import { CardType } from "@/types/CardTypes";
import shuffleCards from "@/utils/shuffleCards";
import {
  getGlobalHighScore,
  updateGlobalHighScore,
} from "@/services/GlobalScoreService";
import CardList from "@/app/game/components/CardList";

export const useGameLogic = () => {
  const [cards, setCards] = useState<CardType[]>(() =>
    shuffleCards([...CardList, ...CardList])
  );
  const [openCards, setOpenCards] = useState<number[]>([]); // Which cards are opened (max : 2)
  const [clearedCards, setClearedCards] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState<number | string>(0);
  const [globalBestScore, setGlobalBestScore] = useState(0);
  const [id, setId] = useState("");
  const timeout = useRef<number | null>(null);

  const [openModal, setOpenModal] = useState(false)

  const disable = () => setShouldDisableAllCards(true);
  const enable = () => setShouldDisableAllCards(false);

  const handleCloseModal = () => setOpenModal(false)
  const handleOpenModal = () => setOpenModal(true)

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === CardList.length) {
      const highScore =
        typeof bestScore === "string" ? moves : Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore.toString());
      if (highScore < globalBestScore) {
        updateGlobalHighScore({ id, global_best_score: highScore }).then(
          (response) => {
            setGlobalBestScore(response?.data.global_best_score);
          }
        );
      }
      handleOpenModal();
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].label === cards[second].label) {
      setClearedCards((prev) => ({ ...prev, [cards[first].label]: true }));
      setOpenCards([]);
    } else {
      timeout.current = window.setTimeout(() => {
        setOpenCards([]);
      }, 500);
    }
  };

  const handleFlipCard = (index: number) => {
    setMoves((moves) => moves + 1);
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      disable();
    } else {
      window.clearTimeout(timeout.current ?? undefined);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      const timeoutId = window.setTimeout(evaluate, 300);
      return () => window.clearTimeout(timeoutId);
    }
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  useEffect(() => {
    getGlobalHighScore().then((response) => {
      setGlobalBestScore(response?.data[0].global_best_score);
      setId(response?.data[0].id);
    });
    const savedBestScore = localStorage.getItem("bestScore");
    if (savedBestScore !== null) {
      setBestScore(JSON.parse(savedBestScore));
    } else {
      setBestScore("-"); // Set default value if no score is found
    }
  }, []);

  const checkIsFlipped = (index: number) => openCards.includes(index);
  const checkIsInactive = (card: CardType) => Boolean(clearedCards[card.label]);

  const clearBestScore = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("bestScore"); // Remove the item from localStorage
      setBestScore("-"); // Reset state to default value
    }
  };

  const handleNewGame = () => {
    setClearedCards({});
    setOpenCards([]);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards([...CardList, ...CardList]));
    if (openModal) {
      handleCloseModal();
    }
  };

  return {
    cards,
    moves,
    bestScore,
    globalBestScore,
    shouldDisableAllCards,
    checkIsFlipped,
    checkIsInactive,
    handleFlipCard,
    handleNewGame,
    clearBestScore,
    openModal,
    handleCloseModal,
    handleOpenModal,
  };
};

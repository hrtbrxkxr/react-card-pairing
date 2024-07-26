import React from "react";
import Container from "@/components/container/Container";
import Card from "./components/cards/Card";
import Button from "@/components/button/Button";
import { useGameLogic } from "@/hooks/useGameLogic";
import SuccessModal from "./components/modal/SuccessModal";

const GameBoard = () => {
  const {
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
  } = useGameLogic();

  return (
    <>
      <div className="flex gap-5 flex-col items-center w-full">
        <div className="flex items-center justify-between w-full tablet:max-w-[640px]">
          <p
            data-testid="moves"
            className="text-lg tablet:text-xl text-text-secondary w-full"
          >
            Moves: {moves}
          </p>
          <p
            data-testid="high-score"
            className="text-lg tablet:text-xl text-text-secondary w-full"
          >
            High Score: {bestScore}
          </p>
          <p
            data-testid="global-high-score"
            className="text-lg tablet:text-xl text-text-secondary w-full"
          >
            Global High Score: {globalBestScore}
          </p>
        </div>
        <Container maxWidth="tablet:max-w-[640px]">
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-4 gap-2 p-4 tablet:gap-4 w-full h-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full tablet:flex justify-center items-center"
                >
                  <Card
                    testId={"card"}
                    card={card}
                    index={index}
                    isDisabled={shouldDisableAllCards}
                    isInactive={checkIsInactive(card)}
                    isFlipped={checkIsFlipped(index)}
                    onClick={() => handleFlipCard(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="w-full items-center flex justify-evenly">
          <Button
            testId="new-game-button"
            title="New Game"
            handleClick={handleNewGame}
          />
          <Button
            testId="clear-high-score-button"
            title="Clear High Score"
            handleClick={clearBestScore}
          />
        </div>
      </div>
      <SuccessModal
        open={openModal}
        handleClose={handleCloseModal}
        moves={moves}
        handleNewGame={handleNewGame}
        testId="success-modal"
      />
    </>
  );
};

export default GameBoard;

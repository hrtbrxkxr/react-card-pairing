import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useGameLogic } from '@/hooks/useGameLogic';
import { getGlobalHighScore, updateGlobalHighScore } from '@/services/GlobalScoreService';
import shuffleCards from '@/utils/shuffleCards';
import CardList from '@/app/game/components/CardList';

jest.mock('@/services/GlobalScoreService');
jest.mock('@/utils/shuffleCards');

const TestComponent = () => {
  const {
    cards,
    moves,
    bestScore,
    globalBestScore,
    handleFlipCard,
    handleNewGame,
    clearBestScore,
    openModal,
    handleCloseModal,
    handleOpenModal,
  } = useGameLogic();

  return (
    <div>
      <div data-testid="moves">{`Moves: ${moves}`}</div>
      <div data-testid="bestScore">{`High Score: ${bestScore}`}</div>
      <div data-testid="globalBestScore">{`Global High Score: ${globalBestScore}`}</div>
      <div>
        {cards.map((card, index) => (
          <div key={index} data-testid="card" onClick={() => handleFlipCard(index)}>
            {`Card ${index}`}
          </div>
        ))}
      </div>
      <button data-testid="new-game-button" onClick={handleNewGame}>New Game</button>
      <button data-testid="clear-best-score-button" onClick={clearBestScore}>Clear Best Score</button>
      {openModal && <div data-testid="modal">Modal Content</div>}
      <button data-testid="open-modal-button" onClick={handleOpenModal}>Open Modal</button>
      <button data-testid="close-modal-button" onClick={handleCloseModal}>Close Modal</button>
    </div>
  );
};

describe('useGameLogic', () => {
  beforeEach(() => {
    (shuffleCards as jest.Mock).mockImplementation((cards) => cards);
    (getGlobalHighScore as jest.Mock).mockResolvedValue({
      data: [{ global_best_score: 30, id: '123' }],
    });
    (updateGlobalHighScore as jest.Mock).mockResolvedValue({
      data: { global_best_score: 10 },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('should initialize with default values', async () => {
    render(<TestComponent />);
    await waitFor(() => {
      expect(screen.getByTestId('moves')).toHaveTextContent('Moves: 0');
      expect(screen.getByTestId('bestScore')).toHaveTextContent('High Score: -');
      expect(screen.getByTestId('globalBestScore')).toHaveTextContent('Global High Score: 30');
      expect(screen.getAllByTestId('card')).toHaveLength(CardList.length * 2);
    });
  });

  test('should handle card flip correctly', async () => {
    render(<TestComponent />);
    await waitFor(() => fireEvent.click(screen.getAllByTestId('card')[0]));

    expect(screen.getByTestId('moves')).toHaveTextContent('Moves: 1');
  });

  test('should handle new game correctly', async () => {
    render(<TestComponent />);
    await waitFor(() => fireEvent.click(screen.getByTestId('new-game-button')));

    expect(screen.getByTestId('moves')).toHaveTextContent('Moves: 0');
    expect(screen.getAllByTestId('card')).toHaveLength(CardList.length * 2);
  });

  test('should handle clear best score correctly', async () => {
    render(<TestComponent />);
    localStorage.setItem('bestScore', '10');

    await waitFor(() => fireEvent.click(screen.getByTestId('clear-best-score-button')));

    expect(localStorage.getItem('bestScore')).toBeNull();
    expect(screen.getByTestId('bestScore')).toHaveTextContent('High Score: -');
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { useGameLogic } from '@/hooks/useGameLogic';
import GameBoard from '@/app/game/GameBoard';

jest.mock('@/hooks/useGameLogic');

const mockUseGameLogic = useGameLogic as jest.MockedFunction<typeof useGameLogic>;

describe('GameBoard', () => {
  beforeEach(() => {
    mockUseGameLogic.mockReturnValue({
      cards: Array(6).fill({ label: 1, id: 1 }), // Mocked cards data
      moves: 0,
      bestScore: '-', // Initial best score
      globalBestScore: 20,
      shouldDisableAllCards: false,
      checkIsFlipped: jest.fn().mockReturnValue(false),
      checkIsInactive: jest.fn().mockReturnValue(false),
      handleFlipCard: jest.fn(),
      handleNewGame: jest.fn(),
      clearBestScore: jest.fn(),
      openModal: false,
      handleCloseModal: jest.fn(),
      handleOpenModal : jest.fn()
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render initial state correctly', () => {
    render(<GameBoard />);

    expect(screen.getByTestId('moves').textContent).toBe('Moves: 0');
    expect(screen.getByTestId('high-score').textContent).toBe('High Score: -');
    expect(screen.getByTestId('global-high-score').textContent).toBe('Global High Score: 20');
    expect(screen.getAllByTestId('card')).toHaveLength(6);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  test('should handle new game button correctly', () => {
    render(<GameBoard />);

    fireEvent.click(screen.getByTestId('new-game-button'));

    expect(mockUseGameLogic().handleNewGame).toHaveBeenCalled();
  });

  test('should handle clear high score button correctly', () => {
    render(<GameBoard />);

    fireEvent.click(screen.getByTestId('clear-high-score-button'));

    expect(mockUseGameLogic().clearBestScore).toHaveBeenCalled();
  });

  test('should handle click card', () => {
    render(<GameBoard />);

    fireEvent.click(screen.getAllByTestId('card')[0]);

    expect(mockUseGameLogic().handleFlipCard).toHaveBeenCalledWith(0);
  });

  test('should show success modal when game is completed', async () => {
    mockUseGameLogic.mockReturnValueOnce({
      ...mockUseGameLogic(),
      openModal: true,
    });

    render(<GameBoard />);

    await waitFor(() => {
      expect(screen.getByTestId('success-modal')).toBeInTheDocument();
    });
  });
});


import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  return (
    <div className="min-h-screen px-4 py-6 text-slate-100">
      {gameState === 'start' ? (
        <StartScreen onStart={startGame} />
      ) : (
        <GameScreen
          board={board}
          winningSquareIds={winningSquareIds}
          hasBingo={gameState === 'bingo'}
          onSquareClick={handleSquareClick}
          onReset={resetGame}
        />
      )}
      {showBingoModal && <BingoModal onDismiss={dismissModal} />}
    </div>
  );
}

export default App;

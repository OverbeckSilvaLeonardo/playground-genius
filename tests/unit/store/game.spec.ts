import { setActivePinia, createPinia } from 'pinia';
import useGameStore from '@/store/game';
import { SequencesEnum } from '@/utils/sequences.enum';

describe('Main Game Store', () => {
  beforeEach(() => setActivePinia(createPinia()));

  it('should update game mode when game is not running', () => {
    const store = useGameStore();
    const newGameMode = 2;

    store.setGameIsRunning(false);
    store.setGameMode(newGameMode);

    expect(store.gameMode).toBe(newGameMode);
  });

  it('should not update game mode when game is running', () => {
    const store = useGameStore();
    const newGameMode = 2;

    store.setGameIsRunning(true);
    store.setGameMode(newGameMode);

    expect(store.gameMode).not.toBe(newGameMode);
  });

  it('should update difficulty when game is not running', () => {
    const store = useGameStore();
    const newDifficulty = 2;

    store.setGameIsRunning(false);
    store.setDifficulty(newDifficulty);

    expect(store.difficulty).toBe(newDifficulty);
  });

  it('should not update difficulty when game is running', () => {
    const store = useGameStore();
    const newDifficulty = 3;

    store.setGameIsRunning(true);
    store.setDifficulty(newDifficulty);
    
    expect(store.difficulty).not.toBe(newDifficulty);
  });

  it('should be able to set the game running status', () => {
    const store = useGameStore();
    const isRunning = true;

    store.setGameIsRunning(isRunning);
    expect(store.isRunning).toBeTruthy();

    const newIsRunning = false;

    store.setGameIsRunning(newIsRunning);
    expect(store.isRunning).toBeFalsy();
  });

  it('should be able to update current player turn', () => {
    const store = useGameStore();
    const playerTurn = SequencesEnum.PLAYER;

    store.setPlayerTurn(playerTurn);

    expect(store.playerTurn).toBe(SequencesEnum.PLAYER);
  });

  it('should not be able to pass values other than SequencesEnum to player turn', () => {
    const store = useGameStore();
    const playerTurn = 3;

    expect(() => store.setPlayerTurn(playerTurn)).toThrow(Error)

    console.log(store.playerTurn);
    
  })
});

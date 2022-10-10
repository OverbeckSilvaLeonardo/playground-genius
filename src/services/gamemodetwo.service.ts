import IGameMode from '@/services/gamemode.interface';

export default class GameModeTwoService implements IGameMode{
  sequenceLength = 0;
  sequence = [];

  start(): void {
    return;
  }

  stop(): void {
    return
  }
}
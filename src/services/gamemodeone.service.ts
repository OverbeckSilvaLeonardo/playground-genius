import IGameMode from '@/services/gamemode.interface'
import {getRandomInt} from '@/utils/index';

export default class GameModeOneService implements IGameMode {
  sequenceLength = 0;
  sequence: number[] = [];

  start(): void {
    this.addToSequence(getRandomInt());
  }

  stop(): void {
    this.sequence = [];
  }

  addToSequence(number: number) {
    this.sequence.push(number);
  }
}
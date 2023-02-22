import IGameMode from '@/services/gamemode.interface';
import useGameStore from '@/store/game';
import useSequenceStore from '@/store/sequence';
import { delay, getRandomInt } from '@/utils';
import { SequencesEnum } from '@/utils/sequences.enum';

export default class GamemodeBaseService implements IGameMode {
  private gameStore = useGameStore();
  private sequenceStore = useSequenceStore();
  public async start() {
    this.gameStore.setGameIsRunning(true);

    await delay(1000);

    this.sequenceStore.addToSequence(getRandomInt(), SequencesEnum.GAME);
    await this.replaySequence();
    this.gameStore.setPlayerTurn(SequencesEnum.PLAYER);
  }

  public async nextStep() {
    await delay(1000);
    this.sequenceStore.clearPlayerSequence();
    this.gameStore.setPlayerTurn(SequencesEnum.GAME);
    this.sequenceStore.addToSequence(getRandomInt(), SequencesEnum.GAME);
    await this.replaySequence();
    this.gameStore.setPlayerTurn(SequencesEnum.PLAYER);
  }

  public stop() {
    this.sequenceStore.clearSequences();
    this.gameStore.setPlayerTurn(SequencesEnum.GAME);
    this.gameStore.setGameIsRunning(false);
  }

  public async replaySequence() {
    const sequence = this.sequenceStore.sequence;

    for (const number of sequence) {
      this.sequenceStore.setCurrent(number);
      await delay(750);

      this.sequenceStore.setCurrent(null);
      await delay(25);
    }
  }

  public validateSequence() {
    let correct = true;

    this.sequenceStore.sequence.map((value, index) => {
      if (this.sequenceStore.playerSequence[index] && this.sequenceStore.playerSequence[index] !== value) {
        correct = false;
      }
    });

    this.sequenceStore.setPSequenceIsValid(correct);

    if (!correct) {
      return this.stop();
    }

    if (this.sequenceStore.playerSequenceLength === this.sequenceStore.sequenceLength) {
      return this.nextStep();
    }
  }
}
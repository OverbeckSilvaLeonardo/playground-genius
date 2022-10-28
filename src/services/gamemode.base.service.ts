import IGameMode from "@/services/gamemode.interface";
import {store} from "@/store";
import {delay, getRandomInt} from "@/utils";
import {SequencesEnum} from "@/utils/sequences.enum";

export default class GamemodeBaseService implements IGameMode {
  public async start() {
    await store.dispatch('setGameRunning', true);

    await delay(1000);

    await this.addToSequence(getRandomInt());
    await this.replaySequence();
    await this.setPlayerTurn(1);
  }

  public async nextStep() {
    await delay(1000);
    await this.setPlayerTurn(null);
    await store.dispatch('clearPlayerSequence');
    await this.addToSequence(getRandomInt());
    await this.replaySequence();
    await this.setPlayerTurn(1);
  }

  public async stop() {
    await store.dispatch('clearSequences');
    await store.dispatch('setPlayerTurn', null);

    return store.dispatch('setGameRunning', false);
  }

  public addToSequence(number: number, sequenceType: SequencesEnum = SequencesEnum.GAME) {
    return store.dispatch('addToSequence', {number, sequenceType});
  }

  public async replaySequence() {
    const sequence = store.state.sequence;

    for (const number of sequence) {
      await store.dispatch('setCurrentNumber', number)
      await delay(750)

      await store.dispatch('setCurrentNumber', null)
      await delay(25)
    }
  }

  public validateSequence() {
    let correct = true;

    store.state.sequence.map((value, index) => {
      if (store.state.playerSequence[index] && store.state.playerSequence[index] !== value) {
        correct = false;
      }
    })

    store.dispatch('setSequenceIsValid', correct);

    if (!correct) {
      return this.stop();
    }

    if (store.getters.playerSequenceLength === store.getters.sequenceLength) {
      return this.nextStep();
    }
  }

  protected setPlayerTurn(player: number | null) {
    return store.dispatch('setPlayerTurn', player);
  }
}
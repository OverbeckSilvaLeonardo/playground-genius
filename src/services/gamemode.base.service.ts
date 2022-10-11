import IGameMode from "@/services/gamemode.interface";
import {store} from "@/store";
import {delay, getRandomInt} from "@/utils";

export default class GamemodeBaseService implements IGameMode {
  public async start() {
    await store.dispatch('setGameRunning', true);

    await this.addToSequence(getRandomInt());
    await this.replaySequence();
    await this.setPlayerTurn(1)
  }

  public async stop() {
    await store.dispatch('clearSequence');
    await store.dispatch('setPlayerTurn', null);

    return store.dispatch('setGameRunning', false);
  }

  public addToSequence(number: number) {
    return store.dispatch('addToSequence', number);
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

  protected setPlayerTurn(player: number) {
    return store.dispatch('setPlayerTurn', player);
  }
}
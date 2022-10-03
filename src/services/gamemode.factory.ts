import GameModeOneService from '@/services/gamemodeone.service';
import IGameMode from '@/services/gamemode.interface';
import GameModeTwoService from '@/services/gamemodetwo.service';
import GameModeThreeService from '@/services/gamemodethree.service';

export default class GameModeFactory {
  static build(gamemode: number): IGameMode {
    if (gamemode === 1) {
      return new GameModeOneService();
    }

    if (gamemode === 2) {
      return new GameModeTwoService();
    }

    return new GameModeThreeService();
  }
}
import { Scene } from "phaser";
import UIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin";


export class Game extends Scene {
  rexUI: UIPlugin;

  constructor(key = "Game") {
    super(key);
  }

  create() {

  }
}

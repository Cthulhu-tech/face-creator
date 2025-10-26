import { Json, Tiles } from "../../constant/gameImage";
import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.setPath("assets");
    this.load.json(Json.face_atlas, Json.face_atlas);
    this.load.spritesheet(Tiles['face_atlas'], Tiles['face_atlas'], {
      frameWidth: 166,
      frameHeight: 258,
    });
  }

  create() {
    this.scene.start("Game");
  }
}

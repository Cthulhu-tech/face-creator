import { Scene } from "phaser";
import UIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin";
import { Tiles } from "../../constant/gameImage";
import ImageBox from "phaser3-rex-plugins/plugins/imagebox";
import GridSizer from "phaser3-rex-plugins/templates/ui/gridsizer/GridSizer";

class ButtonImageChange {
  btn: GridSizer;
  leftBtn: GridSizer;
  rightBtn: GridSizer;
  constructor(scene: Game, name: string, image: ImageBox) {
    this.btn = scene.rexUI.add.gridSizer({
      x: 0,
      y: 0,
      row: 1,
      column: 3,
      columnProportions: [1, 1, 1],
      rowProportions: [1],
      width: 200,
      height: 30,
    });

    this.leftBtn = scene.rexUI.add.gridSizer({
      x: 0,
      y: 0,
      row: 1,
      column: 1,
      columnProportions: [1],
      rowProportions: [1],
    });
    
    this.rightBtn = scene.rexUI.add.gridSizer({
      x: 0,
      y: 0,
      row: 1,
      column: 1,
      columnProportions: [1],
      rowProportions: [1],
    });

    const leftBg = scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xffffff);
    const rightBg = scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xffffff);

    this.leftBtn.add(leftBg, {
      column: 0,
      row: 0,
      align: 'center',
      expand: true,
    });

    this.rightBtn.add(rightBg, {
      column: 0,
      row: 0,
      align: 'center',
      expand: true,
    });

    this.btn.add(leftBg, {
      column: 0,
      row: 0,
      align: 'center',
      expand: true,
    }).add(rightBg, {
      column: 2,
      row: 0,
      align: 'center',
      expand: true,
    })
      .setOrigin(0, 0)
      .layout();
  }
}

export class Game extends Scene {
  rexUI: UIPlugin;

  constructor(key = "Game") {
    super(key);
  }

  create() {
    const face = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '0');
    const eyes = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '72');
    const nose = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '48');
    const lips = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '24');
    const hair = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '96');
    
    const btnFace = new ButtonImageChange(this, 'face', face);
    
  }
}

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

    const leftBg  = scene.add.rectangle(0, 0, 1, 1, 0xffffff);
    const rightBg = scene.add.rectangle(0, 0, 1, 1, 0xffffff);

    this.leftBtn.add(leftBg,  { column: 0, row: 0, align: 'center', expand: true });
    this.rightBtn.add(rightBg, { column: 0, row: 0, align: 'center', expand: true });
    leftBg.setInteractive({ useHandCursor: true })
      .on('pointerup', () => {
        console.log(image.frame.name)
        image.setTexture(Tiles.face_atlas, (image.frame.name - 1).toString());
        console.log('left clicked', name);
      });

    rightBg.setInteractive({ useHandCursor: true })
      .on('pointerup', () => {
        image.setTexture(Tiles.face_atlas, (image.frame.name + 1).toString());
        console.log('right clicked', name);
      });

    this.btn.add(this.leftBtn,  { column: 0, row: 0, align: 'center', expand: true });
    this.btn.add(this.rightBtn, { column: 2, row: 0, align: 'center', expand: true });

    this.btn.layout();
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
    const lips = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '24');
    const nose = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '48');
    const hair = this.rexUI.add.imageBox(this.scale.width / 2, this.scale.height / 2, Tiles.face_atlas, '96');
    
    const btnFace = new ButtonImageChange(this, 'face', face);
    const btnEyes = new ButtonImageChange(this, 'eyes', eyes);
    const btnNose = new ButtonImageChange(this, 'nose', nose);
    const btnLips = new ButtonImageChange(this, 'lips', lips);
    const btnHair = new ButtonImageChange(this, 'hair', hair);

    this.rexUI.add.gridSizer({
      width: 200,
      column: 1,
      row: 5,
      columnProportions: [1],
      rowProportions: [1, 1, 1, 1, 1],
      x: 0,
      y: 0,
    })
      .setOrigin(0, 0)
      .add(btnFace.btn, {
        expand: true,
        column: 0,
        row: 0,
        padding: {
          top: 10
        }
      })
      .add(btnEyes.btn, {
        expand: true,
        column: 0,
        row: 1,
        padding: {
          top: 10
        }
      })
      .add(btnNose.btn, {
        expand: true,
        column: 0,
        row: 2,
        padding: {
          top: 10
        }
      })
      .add(btnLips.btn, {
        expand: true,
        column: 0,
        row: 3,
        padding: {
          top: 10
        }
      })
      .add(btnHair.btn, {
        expand: true,
        column: 0,
        row: 4,
        padding: {
          top: 10
        }
      }).layout();
  }
}

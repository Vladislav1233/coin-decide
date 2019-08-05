class Sprite {
  constructor(options) {
    this.ctx = options.ctx;

    this.image = options.image;
    this.countLoop = 0;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;

    this.width = options.width;
    this.height = options.height;

    this.start();
  }

  update() {
    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames - 1) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
        this.countLoop++;
        this.ticksPerFrame++;
      }
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);
    this.ctx.drawImage(
      this.image,
      this.frameIndex * this.width / this.numberOfFrames,
      0,
      this.width / this.numberOfFrames,
      this.height,
      0,
      0,
      this.width / this.numberOfFrames,
      this.height
    )
  }

  start() {
    let loop = () => {
      this.update();
      this.render();

      if (this.countLoop <= 20) {
        window.requestAnimationFrame(loop);
      } else {
        if(this.callStop) {
          console.log(this.countLoop);
          this.callStop() // Функция колбэк после того как остановился flip
        }
      }
    }

    window.requestAnimationFrame(loop);
  }
}

export default Sprite;
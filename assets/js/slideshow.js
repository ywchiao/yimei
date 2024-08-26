/**
 * slideshow.js
 *
 * @license MIT
 */

export class SlideShow {
  #idx = 0;
  #slides;
  #timerID;

  constructor() {
    this.#slides = document.querySelectorAll('.slideshow figure');

    let el = document.querySelector('.slideshow');

    el.onmouseenter = () => {
      this.stop();
    }

    el.onmouseleave = () => {
      this.start();
    }

    let anchors = document.querySelectorAll('.slideshow a');

    anchors.forEach(a => {
      let idx = parseInt(a.href.slice(-4).replace(/\D/g, ''));
      a.onclick = this.nextSlide.bind(this, idx);
    });
  }

  nextSlide(nxt) {
    let idx = this.#idx;
    let slide = this.#slides[idx];

    if (!slide.classList.replace('fade-in', 'fade-out')) {
      slide.classList.add('fade-out');
    };

    idx = nxt || (idx === this.#slides.length - 1 ? 0 : idx + 1);

    slide = this.#slides[idx];

    if (!slide.classList.replace('fade-out', 'fade-in')) {
      slide.classList.add('fade-in');
    }

    this.#idx = idx;
  }

  start() {
    console.log(`slides: #${this.#slides.length}`);

    if (this.#slides.length > 0) {
      this.#timerID = setInterval(this.nextSlide.bind(this), 5000);
    }
  }

  stop() {
    if (this.#timerID) {
      clearInterval(this.#timerID);
    }
  }
}

// slideshow.js

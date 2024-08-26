/**
 * carousel.js
 *
 * @license MIT
 */

const gap = 20;
const width = 160;

export class Carousel {
  #idx = 0;
  #slides;
  #timerID;
  #el;

  constructor() {
    this.#slides = document.querySelectorAll('.carousel figure');
    this.#el = document.querySelector('.carousel');
  }

  nextSlide(nxt) {
    let idx = this.#idx;

    idx = nxt || (idx === this.#slides.length - 1 ? 0 : idx + 1);

    this.#el.scrollTo((width + gap) * idx, 0);

    this.#idx = idx;
  }

  start() {
    console.log(`carousel.slides: #${this.#slides.length}`);

    if (this.#slides.length > 0) {
      this.#timerID = setInterval(this.nextSlide.bind(this), 5000);
    }
  }
}

// carousel.js

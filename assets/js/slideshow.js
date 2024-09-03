/**
 * slideshow.js
 *
 * @license MIT
 */

export class SlideShow {
  #idx = 0;
  #anchors;
  #slides;
  #timerID;

  constructor() {
    this.#slides = document.querySelectorAll('slide-show slide');
    console.log(`header_slides: ${this.#slides.length}`);

    let el = document.querySelector('slide-show');

    el.onmouseenter = () => {
      this.stop();
    }

    el.onmouseleave = () => {
      this.start();
    }

    this.#anchors = document.querySelectorAll('dot-nav a');

    this.#anchors.forEach(a => {
      let idx = parseInt(a.href.slice(-4).replace(/\D/g, ''));

      a.onclick = this.nextSlide.bind(this, idx);
    });
  }

  nextSlide(nxt) {
    console.log(`Click: ${nxt}`);
    let idx = this.#idx;
    let slide = this.#slides[idx];

    if (!slide.classList.replace('fade-in', 'fade-out')) {
      slide.classList.add('fade-out');
    };

    this.#anchors[idx].style.backgroundColor = '#d2ecf9';

    idx = nxt || (idx === this.#slides.length - 1 ? 0 : idx + 1);

    slide = this.#slides[idx];

    if (!slide.classList.replace('fade-out', 'fade-in')) {
      slide.classList.add('fade-in');
    }

    this.#anchors[idx].style.backgroundColor = '#c9c9cf';

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

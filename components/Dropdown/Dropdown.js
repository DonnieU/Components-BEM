class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".Dropdown__button");

    this.button.addEventListener('click', () => { this.toggleContent(); });

    this.button.addEventListener('mouseover', () => { this.mouseOver(); });
  }

  toggleContent() {
    this.element.classList.toggle('Dropdown--active');
  }

  mouseOver() {
    this.element.style.cursor = "pointer";
  }
}

let dropdowns = document.querySelectorAll('.Dropdown');
dropdowns = Array.from(dropdowns).map(item => {
  return new Dropdown(item);
});
// console.log(dropdowns);
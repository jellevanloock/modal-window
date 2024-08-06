`use strict`;

const modal = document.querySelector(`.modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener(`click`, function () {
    modal.classList.remove(`hidden`);
  });
}

btnCloseModal.addEventListener(`click`, function () {
  modal.classList.add(`hidden`);
});

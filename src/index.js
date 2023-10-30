import './style.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
// import IMask from 'imask';

// const phoneInput = document.querySelector('.phone');
// const phoneMask = new IMask(phoneInput, {
//   mask: '+{375}(00)000-00-00',
// });

// variables
const EMAIL_REGEXP = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const submitBtn = document.querySelector('.form__btn');
const closeBtns = document.querySelectorAll('.close');
const modalEl = document.querySelector('.modal');

const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');
const phoneInput = document.querySelector('#phone');
const commentInput = document.querySelector('#comment');

const nameError = document.querySelector('.error-message.name');
const mailError = document.querySelector('.error-message.mail');
const phoneError = document.querySelector('.error-message.phone');
const commentError = document.querySelector('.error-message.comment');

// modal

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modalEl.classList.remove('hide');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    modalEl.classList.add('hide');
    document.body.style.position = '';
    document.body.style.top = '';
  });
});

modalEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modalEl.classList.add('hide');
    document.body.style.position = '';
    document.body.style.top = '';
  }
});

// form validation

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

nameInput.addEventListener('change', (e) => {
  if (e.target.value.length <= 2 && e.target.value.length > 0) {
    nameError.textContent = 'Имя слишком короткое';
    e.target.style.borderColor = 'red';
  } else {
    nameError.textContent = '';
    e.target.style.borderColor = 'green';
  }
});
nameInput.addEventListener('blur', (e) => {
  if (e.target.value.length === 0) {
    nameError.textContent = 'Необходимо ввести имя';
    e.target.style.borderColor = 'red';
  } else {
    e.target.style.borderColor = 'green';
  }
});

mailInput.addEventListener('change', (e) => {
  if (isEmailValid(e.target.value)) {
    mailError.textContent = '';
    e.target.style.borderColor = 'green';
  } else {
    e.target.style.borderColor = 'red';
    mailError.textContent = 'Некорректный адрес';
  }
});
mailInput.addEventListener('blur', (e) => {
  if (e.target.value.length === 0) {
    mailError.textContent = 'Необходимо ввести адрес почты';
    e.target.style.borderColor = 'red';
  } else {
    e.target.style.borderColor = 'green';
  }
});

phoneInput.addEventListener('change', () => {
// Считываем поле ввода
// let phoneInput = document.querySelector(".phone");
// // Считываем кнопку
// let btn = document.querySelector(".btn");

  // // Создаем маску в инпуте
  // const phoneMask = new IMask(phoneInput, {
  //   mask: "+{7}(000)000-00-00",
  // });

  // // Обработчик события для инпута
  // phoneInput.addEventListener("input", phoneInputHandler);
  // // Обработчик события для кнопки
  // btn.addEventListener("click", btnHandler);

  // // Если ввели правлильно - кнопка активна
  // function phoneInputHandler() {
  //   if (phoneMask.masked.isComplete) {
  //     btn.classList.add("btn--active");
  //   } else {
  //     btn.classList.remove("btn--active");
  //   }
  // }

// // Отправляем номер телефона
// async function btnHandler(e) {
//   e.preventDefault();
//   return await fetch("send_msg.php", {
//     method: "POST",
//     body: phoneMask.unmaskedValue,
//   });
// }
});

commentInput.addEventListener('change', (e) => {

});

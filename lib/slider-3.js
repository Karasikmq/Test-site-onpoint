const slides = document.querySelector('.slides-main');
const slideCount = document.querySelectorAll('.slide-main').length;
let currentIndex = 0; // Начинаем с первого слайда

// Переход к предыдущему слайду
document.querySelector('.click-zone.left').addEventListener('click', function () {
  if (currentIndex > 0) {
    // Проверка: если не первый слайд
    currentIndex = currentIndex - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

// Переход к следующему слайду
document.querySelector('.click-zone.right').addEventListener('click', function () {
  if (currentIndex < slideCount - 1) {
    // Проверка: если не последний слайд
    currentIndex = currentIndex + 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
function goToNextSlide() {
  if (currentIndex < slideCount - 1) {
    // Проверка: если не последний слайд
    currentIndex++;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}
function goToFirstSlide() {
  // Устанавливаем индекс на 0, чтобы перейти на первый слайд
  currentIndex = 0;
  // Обновляем стили слайдов, чтобы переместиться к первому слайду
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Логика открытия и закрытия слайдера
let currentSlide = 'slide1'; // Переменная для хранения текущего слайда

function openSlider() {
  document.getElementById('slider').classList.add('active');
  document.getElementById('overlay').style.display = 'block';
  // Устанавливаем текущий слайд
  document.getElementById(currentSlide).checked = true;
}
function closeSlider() {
  document.getElementById('slider').classList.remove('active');
  document.getElementById('overlay').style.display = 'none';

  // Сохраняем текущий выбранный слайд перед закрытием
  if (document.getElementById('slide1').checked) {
    currentSlide = 'slide1';
  } else if (document.getElementById('slide2').checked) {
    currentSlide = 'slide2';
  }
}
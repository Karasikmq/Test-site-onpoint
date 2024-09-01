function openSlider() {
  document.getElementById('slider').classList.add('active');
  document.getElementById('overlay').style.display = 'block'; // Показывает затемнение
}

function closeSlider() {
  document.getElementById('slider').classList.remove('active');
  document.getElementById('overlay').style.display = 'none'; // Скрывает затемнение
}

function openSlider() {
  document.getElementById('slider').classList.add('active');
  document.getElementById('overlay').style.display = 'block'; // Показывает затемнение

  // Добавляем класс для анимации к текстовым элементам после открытия слайдера
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(element => {
    element.classList.add('fade-in');
  });
}

function closeSlider() {
  document.getElementById('slider').classList.remove('active');
  document.getElementById('overlay').style.display = 'none'; // Скрывает затемнение
}

function openSlider() {
  document.getElementById('slider').classList.add('active');
  document.getElementById('overlay').style.display = 'block'; // Показывает затемнение
}
function closeSlider() {
  document.getElementById('slider').classList.remove('active');
  document.getElementById('overlay').style.display = 'none'; // Скрывает затемнение
}
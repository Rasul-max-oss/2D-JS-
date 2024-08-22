// Получаем ссылку на элемент canvas и его контекст рисования
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Настраиваем изображение персонажа
const characterImage = new Image();
characterImage.src = 'img/ben-a.svg';

// Начальные координаты персонажа
let charX = canvas.width / 2;
let charY = canvas.height / 2;


// Скорость движения персонажа
const speed = 5;

// Флаги для отслеживания состояния клавиш
let keys = {
  left: false,
  right: false,
  up: false,
  down: false
};

// Обработчики событий для нажатия и отпускания клавиш
document.addEventListener('keydown', (event) => {
  switch(event.code) {
    case 'ArrowLeft':
      keys.left = true;
      break;
    case 'ArrowRight':
      keys.right = true;
      break;
    case 'ArrowUp':
      keys.up = true;
      break;
    case 'ArrowDown':
      keys.down = true;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch(event.code) {
    case 'ArrowLeft':
      keys.left = false;
      break;
    case 'ArrowRight':
      keys.right = false;
      break;
    case 'ArrowUp':
      keys.up = false;
      break;
    case 'ArrowDown':
      keys.down = false;
      break;
  }
});
// Функция обновления положения персонажа
function updateCharacterPosition() {
  if (keys.left && charX > 0) charX -= speed;
  if (keys.right && charX < canvas.width) charX += speed;
  if (keys.up && charY > 0) charY -= speed;
  if (keys.down && charY < canvas.height) charY += speed;
}




// Функция для отрисовки персонажа на холсте
function drawCharacter() {
  // Очищаем холст
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Отрисовываем изображение
  ctx.drawImage(characterImage, charX - characterImage.width / 2, charY - characterImage.height / 2);
}


// Основной игровой цикл
function gameLoop() {
  updateCharacterPosition();
  drawCharacter();
  requestAnimationFrame(gameLoop);
}
// Когда изображение загружено, отрисовываем его на холсте
characterImage.onload = function() {
  gameLoop();
};
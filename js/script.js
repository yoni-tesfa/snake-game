// creat canvas
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// divide our canvas into 10 by 10 smalll square

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// creating random snake

let snake = [];
snake[0] = {
  x: Math.floor(Math.random() * columns) * scale, // to generate random x axis
  y: Math.floor(Math.random() * rows) * scale,
};
//  creating snake food object
let food = {
  x: Math.floor(Math.random() * columns) * scale, // to generate random snake food
  y: Math.floor(Math.random() * rows) * scale,
};

let d = "right"; // default snake direction
// changing direction using key

document.onkeydown = direction;
function direction(event) {
  let key = event.keyCode;
  if (key == 37 && d != "right") {
    d = "left";
  }
  if (key == 38 && d != "down") {
    d = "up";
  }
  if (key == 39 && d != "left") {
    d = "right";
  }
  if (key == 40 && d != "up") {
    d = "down";
  }
}

// call draw function every 100 ms to draw the snake

let playgame = setInterval(draw, 100);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // removing every snake on canvas before creating new

  for (i = 0; i < snake.length; i++) {
    ctx.fillStyle = "white"; // snake color
    ctx.strokeStyle = "red"; // red border for snake
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale); // row ,column,20-width of rectangle,20-h of rectangle
    ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
  }

  //   draw food

  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "green";
  ctx.fillRect(food.x, food.y, scale, scale);
  ctx.strokeRect(food.x, food.y, scale, scale);

  //   old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  console.log(snakeX);

  //   its moving  direction
  if (d == "left") snakeX -= scale;
  if (d == "up") snakeY -= scale;
  if (d == "right") snakeX += scale;
  if (d == "down") snakeY += scale;

  // restrict snake inside the canvas

  if (snakeX > canvas.width) {
    snakeX = 0;
  }
  if (snakeY > canvas.height) {
    snakeY = 0;
  }
  if (snakeX < 0) {
    snakeX = canvas.width;
  }
  if (snakeY < 0) {
    snakeY = canvas.height;
  }

  //   when snake eats the food it grow

  if (snakeX == food.x && snakeY == food.y) {
    food = {
      x: Math.floor(Math.random() * columns) * scale, // to generate random snake food
      y: Math.floor(Math.random() * rows) * scale,
    };
  } else {
    snake.pop(); // before adding new remove the previous snake
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead); // adding to snake array newhead object
}

// creat canvas
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// divide our canvas into 10 by 10 smalll square

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// creating snake

let snake = [];
snake[0] = {
  x: Math.floor(Math.random() * columns) * scale, // to generate random x axis
  y: Math.floor(Math.random() * rows) * scale,
};

// default snake direction
let d = "right";

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

  //   old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  console.log(snakeX);

  //   its moving  direction
  if (d == "left") snakeX -= scale;
  if (d == "up") snakeY -= scale;
  if (d == "right") snakeY += scale;
  if (d == "down") snakeY += scale;

  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  snake.pop();
  snake.unshift(newHead);
}

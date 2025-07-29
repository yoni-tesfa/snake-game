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
ctx.fillStyle = "white"; // snake color
ctx.strokeStyle = "pink"; // pink border for snake
ctx.fillRect(snake[0].x, snake[0].y, scale, scale); // row ,column,20-width of rectangle,20-h of rectangle
ctx.strokeRect(snake[0].x, snake[0].y, scale, scale);

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
ctx.fillStyle = "white";
ctx.fillRect(10, 10, scale, scale); // row ,column,20-width of rectangle,20-h of rectangle

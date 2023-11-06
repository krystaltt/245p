console.log("Hello World");
const books = [
  { title: 1984, author: "George Orwell" },
  { title: "In Search of Lost Time", author: "Marcel Proust" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Moby Dick", author: "Herman Melville" },
];

function filteredBook(book) {
  return book.author !== "George Orwell";
}
const filteredBooks = books.filter(filteredBook);
console.log(filteredBooks);

function filteredBook2(book) {
  return book.author !== "George Orwell" && book.author !== "Herman Melville";
}
const filteredBooks2 = books.filter(filteredBook2);
console.log(filteredBooks2);

// onclick to change color
document.getElementById("content").onclick = function () {
  changeToBlue();
};
function changeToBlue() {
  document.getElementById("content").style.color = "blue";
}

//onclick to update content; second onclick will replace the first one for execution

function updateContent() {
  document.getElementById("content").innerHTML = "Bye Bye World";
}

//for particles
let p1, p2, p3;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Triangle(300, 300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
}

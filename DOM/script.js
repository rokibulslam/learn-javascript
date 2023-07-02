// Contoh program sederhana menekan tombol button berganti warna
const colorsChangeButton = document.getElementById("colorsChangeButton");

colorsChangeButton.onclick = function () {
  document.body.classList.toggle("orange");
};

// Contoh program sederhana membuat element baru menggunakan javascript tanpa menggunakan HTML
const colorsRandomButton = document.createElement("button");

const textButton = document.createTextNode("Random Button");

colorsRandomButton.appendChild(textButton);

colorsRandomButton.setAttribute("type", "button");

colorsChangeButton.after(colorsRandomButton);

// Contoh program sederhana menekan tombol yang telah dibuat akan berganti warna secara acak
colorsRandomButton.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);

  const g = Math.round(Math.random() * 255 + 1);

  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

// Contoh program sederhana menekan tombol slider akan berubah warna rgb dari 0 - 255
const sliderRed = document.querySelector("input[name=sliderRed]");
const sliderGreen = document.querySelector("input[name=sliderGreen]");
const sliderBlue = document.querySelector("input[name=sliderBlue]");

sliderRed.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;

  document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

sliderGreen.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;

  document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

sliderBlue.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;

  document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

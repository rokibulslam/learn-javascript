for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Lewati iterasi dan lanjutkan dengan iterasi berikutnya
  }

  console.log(i);

  if (i === 8) {
    break; // Menghentikan perulangan sepenuhnya
  }
}

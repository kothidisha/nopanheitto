document.getElementById('rollButton').addEventListener('click', function() {
  const tulos = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceResult').textContent = `Tulos: ${tulos}`;
});

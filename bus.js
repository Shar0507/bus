// opdracht 1. Start: 10 mensen in de bus en // opdracht 3. 5de naam weghalen
let passagiers = ["ali", "bo", "carmen", "david", "farid", "gina", "hugo", "iris", "joris"];

// 2. Nieuwe passagier stapt in
passagiers.push("khalid");

// 3. Functie om alle passagiers te tonen in een <ul> met id="passagierslijst"
function toonPassagiers(lijst) {
  const lijstElement = document.getElementById("passagierslijst");
  lijstElement.innerHTML = ""; // eerst legen
  for (let i = 0; i < lijst.length; i++) {
    const li = document.createElement("li");
    li.textContent = lijst[i];
    lijstElement.appendChild(li);
  }
}

// 4. Shuffle-functie (Fisher–Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Schud de lijst door elkaar
shuffleArray(passagiers);

// Laat de nieuwe, gehusselde lijst zien
toonPassagiers(passagiers);

// 5. While-loop: passagiers stappen één voor één uit
const output = document.getElementById("passagierslijst");
output.innerHTML += "<h3>Eindhalte: passagiers stappen uit</h3><ul>";

while (passagiers.length > 0) {
  const uitgestapt = passagiers.shift();
  const resterend = passagiers.length;
  output.innerHTML += `<li>${uitgestapt} is uitgestapt – nog ${resterend} in de bus</li>`;
}

output.innerHTML += "</ul><p>De bus is leeg 🚌✨</p>";

// opdracht 1. 
let passagiers = [
  { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch" },
  { id: 163822, naam: "Sofie Janssen", saldo: 22, woonplaats: "Utrecht" }
];
// opdracht 2. passagier lijst allerlei gegevens ook geconnect met Html
function lijst() {
  const ul = document.getElementById("passagierslijst");
  if (passagiers.length === 0) {
    ul.innerHTML = "<li>Geen passagiers beschikbaar</li>";
    return;
  }
  ul.innerHTML = passagiers.map(p =>
    `<li>${p.naam} (${p.id}) – €${p.saldo.toFixed(2)} – ${p.woonplaats}</li>`
  ).join('');
}
// opdracht 3. twee geluiden voor check in en uit vanaf Html connecten
function speelGeluid() {
  const beep = document.getElementById("beepgeluid");
  if (beep) {
    beep.currentTime = 0;
    beep.play();
  }
}

function speelGeluid2() {
  const beep = document.getElementById("beepgeluid2");
  if (beep) {
    beep.currentTime = 0;
    beep.play();
  }
}
// opdracht 4. persoon gegevens van naam, woonplaats en saldo
function checkIn() {
  const naam = prompt("Naam:");
  const woonplaats = prompt("Woonplaats:");
  const saldo = +prompt("Startsaldo:");
  if (!naam || !woonplaats || isNaN(saldo)) {
    alert("Ongeldige invoer.");
    return;
  }
  const nieuwePassagier = {
    id: Date.now(),
    naam,
    saldo,
    woonplaats
  };
  passagiers.push(nieuwePassagier);
  lijst();
  speelGeluid(); // geluid afspelen
}

// opdracht 5. wanner iemand check uit dat die zijn naam invoer waardoor de gegevens weg gaat
function checkUit() {
  const naam = prompt("Naam passagier die wil uitstappen:");
  const index = passagiers.findIndex(p => p.naam.toLowerCase() === naam?.toLowerCase());
  if (index !== -1) {
    passagiers.splice(index, 1);
    lijst();
    speelGeluid2(); // geluid afspelen
  } else {
    alert("Geen passagier gevonden met die naam.");
  }
}

// Knoppen koppelen
document.getElementById("checkin").addEventListener("click", checkIn);
document.getElementById("checkuit").addEventListener("click", checkUit);

// Toon lijst bij het starten
lijst();

let title = document.querySelector(".title");

title.textContent = "Aparecida Nutricionista";

let patients = document.querySelectorAll(".paciente");

for (let i = 0; i < patients.length; i++) {
  let patient = patients[i];

  let tdWeight = patient.querySelector(".info-peso")
  let tdHeight = patient.querySelector(".info-altura");
  let tdImc = patient.querySelector(".info-imc");

  let weight = tdWeight.textContent;
  let height = tdHeight.textContent;

  let weightIsValid = true;
  let heightIsValid = true;

  if (weight <= 0 || weight >= 1000) {
    console.log("Invalid Weight");
    tdWeight.textContent = "Invalid Weight!";
    tdImc.textContent = "Invalid Weight!";
    weightIsValid = false;
    patient.classList.add("paciente-invalido");
  }

  if (height <= 0 || height >= 3.00) {
    console.log("Invalid Height");
    tdHeight.textContent = "Invalid Height!";
    tdImc.textContent = "Invalid Height!";
    heightIsValid = false;
    patient.classList.add("paciente-invalido");
  }

  if (heightIsValid && weightIsValid) {
    let imc = weight / (height * height);
    tdImc.textContent = imc.toFixed(2);
  }
}
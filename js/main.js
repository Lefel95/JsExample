var title = document.querySelector(".title");

title.textContent = "Aparecida Nutricionista";

var patient = document.querySelector("#first-patient");

var weight = patient.querySelector(".info-peso").textContent;
var height = patient.querySelector(".info-altura").textContent;

var imc = weight / (height * height);

patient.querySelector(".info-imc").textContent = imc;
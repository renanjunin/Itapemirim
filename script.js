const ida = document.getElementById("ida");
const volta = document.getElementById("volta");

const realIda = document.getElementById("realIda");
const realVolta = document.getElementById("realVolta");


ida.addEventListener("click", () => realIda.showPicker());
volta.addEventListener("click", () => realVolta.showPicker());


realIda.addEventListener("change", () => ida.value = realIda.value);
realVolta.addEventListener("change", () => volta.value = realVolta.value);

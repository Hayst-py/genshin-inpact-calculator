const bannerSelect = document.getElementById("banner");
const acquaintFatesField = document.getElementById("acquaintFatesField");
const intertwinedFatesField = document.getElementById("intertwinedFatesField");

bannerSelect.addEventListener("change", () => {
    acquaintFatesField.hidden = bannerSelect.value !== "standard";
    intertwinedFatesField.hidden = bannerSelect.value !== "limited";
});

function Calculate_pulls() {
    const tekstEl = document.getElementById("calculation_output");
    tekstEl.textContent= 2 + " pulls";
}

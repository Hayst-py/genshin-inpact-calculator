const bannerSelect = document.getElementById("banner");
const acquaintFatesField = document.getElementById("acquaintFatesField");
const intertwinedFatesField = document.getElementById("intertwinedFatesField");

bannerSelect.addEventListener("change", () => {
    acquaintFatesField.hidden = bannerSelect.value !== "standard";
    intertwinedFatesField.hidden = bannerSelect.value !== "limited";
});

function Calculate_pulls() {
    const tekstEl = document.getElementById("calculation_output");
    if (!bannerSelect.value) {
        tekstEl.textContent = "Velg et banner først.";
        return;
    }

    const primogems = Number(document.getElementById("Primogems").value) || 0;
    const characters =
        Number(document.getElementById("number_of_characters").value) || 0;
    const currentPity = Number(document.getElementById("Pity_counter").value) || 0;

    if (!Number.isInteger(currentPity) || currentPity < 0 || currentPity > 89) {
        tekstEl.textContent = "Pity må være et helt tall mellom 0 og 89.";
        return;
    }

    const fateId = bannerSelect.value === "standard"
        ? "Acquaint_Fates"
        : "Intertwined_Fates";

    const fates = Number(document.getElementById(fateId).value) || 0;

    const availablePulls = primogems / 160 + fates;
    const requiredPulls = Math.max(0, characters * 75 - currentPity);
    const pullsToFarm = Math.max(0, Math.ceil(requiredPulls - availablePulls));

    tekstEl.textContent = `${pullsToFarm} pulls å samle`;
}

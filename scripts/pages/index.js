async function getPhotographers() {
    const response = await fetch("../../data/photographers.json");
    if (response.ok) {
        const data = await response.json();
        return ({
            photographers: data.photographers
        })
    } else {
        throw new Error("Données des photographes inaccessibles.");
    }

}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

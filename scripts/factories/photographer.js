// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        // Lien cliquable avec image et titre
        const a = document.createElement('a');
        a.href = `photographer.html?name=${id}`;
        a.ariaLabel = name;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(a);
        // Texte descriptif
        const section = document.createElement("section");
        section.ariaLabel = `Informations sur ${name}`;
        section.innerHTML = `<h3>${city}, ${country}</h3>
          <p>${tagline}</p>
          <p class="price">${price}€/jour</p>`;
        article.appendChild(section);
        // Retourner la carte
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

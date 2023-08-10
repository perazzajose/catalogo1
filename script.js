document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    // Cargar datos en las tarjetas desde el archivo JSON
    fetch("cocktail-data.json")
        .then(response => response.json())
        .then(data => {
            data.cocktails.forEach(cocktail => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.dataset.recipeId = cocktail.id;

                const image = document.createElement("img");
                image.src = cocktail.image;
                image.alt = cocktail.name;
                card.appendChild(image);

                const name = document.createElement("h3");
                name.textContent = cocktail.name;
                card.appendChild(name);

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });

    // Agregar evento de clic a cada tarjeta de receta
    container.addEventListener("click", function (event) {
        const card = event.target.closest(".card");
        if (card) {
            const recipeId = card.dataset.recipeId;
            window.location.href = `detail.html?id=${recipeId}`;
        }
    });
});





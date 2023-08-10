document.addEventListener("DOMContentLoaded", async function () {
    const detailContainer = document.querySelector(".recipe-details");
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get("id");

    if (recipeId) {
        try {
            const response = await fetch("cocktail-data.json");
            const data = await response.json();
            const recipe = data.cocktails.find(cocktail => cocktail.id.toString() === recipeId);

            if (recipe) {
                const recipeImage = document.createElement("img");
                recipeImage.src = recipe.image;
                recipeImage.alt = recipe.name;
                recipeImage.classList.add("recipe-image");
                detailContainer.appendChild(recipeImage);

                const recipeName = document.createElement("h2");
                recipeName.textContent = recipe.name;
                detailContainer.appendChild(recipeName);

                const ingredientsList = document.createElement("ul");
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement("li");
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
                detailContainer.appendChild(ingredientsList);

                const instructions = document.createElement("p");
                instructions.textContent = recipe.instructions;
                detailContainer.appendChild(instructions);
            } else {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = "Receta no encontrada.";
                detailContainer.appendChild(errorMessage);
            }
        } catch (error) {
            console.error("Error al cargar los detalles de la receta:", error);
        }
    } else {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "ID de receta no especificado.";
        detailContainer.appendChild(errorMessage);
    }
});

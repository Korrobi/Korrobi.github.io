document.addEventListener("DOMContentLoaded", function () {

    fetch("https://raw.githubusercontent.com/android/sunflower/main/app/src/main/assets/plants.json")
        .then((response) => response.json())
        .then((data) => {
            const novenyekContainer = document.getElementById("novenyek-container");

            data.forEach((noveny) => {
                const div = document.createElement("div");
                div.classList.add("col-sm-4", "noveny");
                div.innerHTML = `
                    <h2>${noveny.name}</h2>
                    <br>
                    <img src="${noveny.imageUrl}" alt="${noveny.name}" class="noveny-kep">
                `;

                div.querySelector(".noveny-kep").addEventListener("click", function () {
                    const megnagyitottKep = document.createElement("div");
                    megnagyitottKep.classList.add("megnagyitott-kep");
                    megnagyitottKep.innerHTML = `
                        <img src="${noveny.imageUrl}" alt="${noveny.name}" class="megnagyitott">
                    `;

                    megnagyitottKep.addEventListener("click", function () {
                        megnagyitottKep.remove();
                    });

                    document.body.appendChild(megnagyitottKep);
                });

                novenyekContainer.appendChild(div);
            });
        })
        
});

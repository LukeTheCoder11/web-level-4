fetch('pokemon.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayPokemonCards(data)
    });

function displayPokemonCards(pokemonData) {
    let pokemonDiv = document.getElementById("pokemonContainer");
    let rows = pokemonData.length / 6;
    let bgType = " ";
    for (let eachRow = 0; eachRow < rows; eachRow++) {
        let rowId = "row" + eachRow;
        pokemonDiv.innerHTML += "<div class='row' id='" + rowId + "'></div>";

        for (let i = 0; i < 6; i++) {
            let currentIndex = eachRow * 6 + i;
            if (pokemonData[currentIndex].type[0] == 'Water') {
                bgType = "water";
            } else if (pokemonData[currentIndex].type[0] == 'Fire') {
                bgType = "fire";
            } else if (pokemonData[currentIndex].type[0] == 'Grass') {
                bgType = "grass";
            } else if (pokemonData[currentIndex].type[0] == 'Electric') {
                bgType = "electric";
            } else if (pokemonData[currentIndex].type[0] == 'Bug') {
                bgType = "bug";
            } else if (pokemonData[currentIndex].type[0] == 'Ghost') {
                bgType = "ghost";
            } else if (pokemonData[currentIndex].type[0] == 'Normal') {
                bgType = "normal";
            } else if (pokemonData[currentIndex].type[0] == 'Psychic') {
                bgType = "psychic";
            } else if (pokemonData[currentIndex].type[0] == 'Dragon') {
                bgType = "dragon";
            } else if (pokemonData[currentIndex].type[0] == 'Ice') {
                bgType = "ice";
            } else if (pokemonData[currentIndex].type[0] == 'Poison') {
                bgType = "poisen";
            } else if (pokemonData[currentIndex].type[0] == 'Ground') {
                bgType = "ground";
            } else if (pokemonData[currentIndex].type[0] == 'Rock') {
                bgType = "rock";
            } else if (pokemonData[currentIndex].type[0] == 'Fighting') {
                bgType = "fighting";
            } else{
                console.log(pokemonData[currentItem].type[0] + " Does not have a color!")
            }
            if (pokemonData[currentIndex] != null || pokemonData[currentIndex] != undefined) {
                document.getElementById(rowId).innerHTML +=
                    "<div class='col-2'>" +
                    "<div class='card h-100 " + bgType + " '>" +
                    "<img src='" + pokemonData[currentIndex].img + "' onclick='pokemonSayHello(" + JSON.stringify(pokemonData[currentIndex]) + ")' class='card-img-top'>" +
                    "<div class='card-body'>" +
                  "</div>" +
                    "<div class='card-footer card-text'>" + pokemonData[currentIndex].name + "</div>" +
                    "</div></div>";
            }
        }
    }
}




function pokemonSayHello(pokemon) {

    const myModal = new bootstrap.Modal('#exampleModal', {
        keyboard: false
      });
      let pokemonTitle = document.getElementById("exampleModalLabel");
      pokemonTitle.innerHTML ="";
      pokemonTitle.innerHTML +="Pokedex Entrey " + pokemon.num + ": " + pokemon.name;
      let pokemonMode = document.getElementById("pokemonModel");
      pokemonMode.innerHTML ="";
      pokemonMode.innerHTML += "<div class='card h-100'>" +
      "<img src='" + pokemon.img +"' class='card-img-top modal-img'>" +
      "<div class='card-body modal-text'>"+ pokemon.name + " is a "+ pokemon.type +" type Pokemon. "+ pokemon.name +" is weak to "+ pokemon.weaknesses +" type Pokemons. "+ pokemon.name+"s usualy weigh around to "+ pokemon.weight+"s, and comes in with an average height of "+ pokemon.height +"'s</div>" +
      "</div>";

      myModal.show(); 
}

$(document).ready(function() {
    $("#hide-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        
        if (selectedType == "Water") {
        
            $(".water").fadeOut(500);

        } else if (selectedType == "Fire") {
            $(".fire").fadeOut(500);
        } else if (selectedType == "Grass") {
            $(".grass").fadeOut(500);
        } else if (selectedType == "Electric") {
            $(".electric").fadeOut(500);
        } else if (selectedType == "Bug") {
            $(".bug").fadeOut(500);
        } else if (selectedType == "Normal") {
            $(".normal").fadeOut(500);
        } else if (selectedType == "Poison") {
            $(".poisen").fadeOut(500);
        } else if (selectedType == "Ground") {
            $(".ground").fadeOut(500);
        } else if (selectedType == "Fighting") {
            $(".fighting").fadeOut(500);
        } else if (selectedType == "Psychic") {
            $(".psychic").fadeOut(500);
        } else if (selectedType == "Ice") {
            $(".ice").fadeOut(500);
        } else if (selectedType == "Dragon") {
            $(".dragon").fadeOut(500);
        }
         else {
            // do something
        }

    });

    $("#show-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water").fadeIn(500);
        } else if (selectedType == "Fire") {
            $(".fire").fadeIn(500);
        } else if (selectedType == "Grass") {
            $(".grass").fadeIn(500);
        } else if (selectedType == "Electric") {
            $(".electric").fadeIn(500);
        }else if (selectedType == "Bug") {
            $(".bug").fadeIn(500);
        } else if (selectedType == "Normal") {
            $(".normal").fadeIn(500);
        } else if (selectedType == "Poison") {
            $(".poisen").fadeIn(500);
        }   else if (selectedType == "Ground") {
            $(".ground").fadeIn(500);
        } else if (selectedType == "Fighting") {
            $(".fighting").fadeIn(500);
        } else if (selectedType == "Psychic") {
            $(".psychic").fadeIn(500);
        } else if (selectedType == "Ice") {
            $(".ice").fadeIn(500);
        } else if (selectedType == "Dragon") {
            $(".dragon").fadeIn(500);
        }
         else {
            // do something
        }

    });

});
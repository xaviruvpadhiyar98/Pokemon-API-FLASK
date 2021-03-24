function myFunction(pokemon){
    fetch('/save_recent_pokemon',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemon),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    document.getElementById("image_url").src = pokemon.image_url
    document.getElementById("name").innerHTML = 'NAME ' + pokemon.name;
    document.getElementById("speed").innerHTML = 'SPEED ' + pokemon.speed;
    document.getElementById("defense").innerHTML = 'DEFENSE ' + pokemon.defense +'/ SPECIAL ' + pokemon.special_defense ;
    document.getElementById("attack").innerHTML = 'ATTACK ' + pokemon.attack +'/ SPECIAL ' + pokemon.special_attack ;
    document.getElementById("hp").innerHTML = 'HP ' + pokemon.hp;
    document.getElementById("weight").innerHTML = 'WEIGHT ' + pokemon.weight;

};

function randomPokemon(){
    fetch("/random_pokemon")
    .then(function (response) {
        return response.json();
    })
    .then(function (pokemon) {
        console.log(pokemon.name);
        document.getElementById("image_url").src = pokemon.image_url
        document.getElementById("name").innerHTML = 'NAME ' + pokemon.name;
        document.getElementById("speed").innerHTML = 'SPEED ' + pokemon.speed;
        document.getElementById("defense").innerHTML = 'DEFENSE ' + pokemon.defense +'/ SPECIAL ' + pokemon.special_defense ;
        document.getElementById("attack").innerHTML = 'ATTACK ' + pokemon.attack +'/ SPECIAL ' + pokemon.special_attack ;
        document.getElementById("hp").innerHTML = 'HP ' + pokemon.hp;
        document.getElementById("weight").innerHTML = 'WEIGHT ' + pokemon.weight;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });


};


/*

        <script>
            function myFunction(pokemon){
                fetch('/save_recent_pokemon',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pokemon),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
                document.getElementById("image_url").src = pokemon.image_url
                document.getElementById("name").innerHTML = 'NAME ' + pokemon.name;
                document.getElementById("speed").innerHTML = 'SPEED ' + pokemon.speed;
                document.getElementById("defense").innerHTML = 'DEFENSE ' + pokemon.defense +'/ SPECIAL ' + pokemon.special_defense ;
                document.getElementById("attack").innerHTML = 'ATTACK ' + pokemon.attack +'/ SPECIAL ' + pokemon.special_attack ;
                document.getElementById("hp").innerHTML = 'HP ' + pokemon.hp;
                document.getElementById("weight").innerHTML = 'WEIGHT ' + pokemon.weight;

            };
        </script>

        <script>
            function randomPokemon(){
                fetch("/random_pokemon")
                .then(function (response) {
                    return response.json();
                })
                .then(function (pokemon) {
                    console.log(pokemon.name);
                    document.getElementById("image_url").src = pokemon.image_url
                    document.getElementById("name").innerHTML = 'NAME ' + pokemon.name;
                    document.getElementById("speed").innerHTML = 'SPEED ' + pokemon.speed;
                    document.getElementById("defense").innerHTML = 'DEFENSE ' + pokemon.defense +'/ SPECIAL ' + pokemon.special_defense ;
                    document.getElementById("attack").innerHTML = 'ATTACK ' + pokemon.attack +'/ SPECIAL ' + pokemon.special_attack ;
                    document.getElementById("hp").innerHTML = 'HP ' + pokemon.hp;
                    document.getElementById("weight").innerHTML = 'WEIGHT ' + pokemon.weight;
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                });


            };
        </script>


*/











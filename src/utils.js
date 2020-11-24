import pokemonData from './pokemon';

export default function getEvolutions(number) {
    var firstEvolution;
    var secondEvolution;
    var thirdEvolution;
    if (
        pokemonData.pokemon[number].next_evolution &&
        !pokemonData.pokemon[number].prev_evolution
    ) {
        if (pokemonData.pokemon[number].next_evolution.length > 1) {
            firstEvolution = pokemonData.pokemon[number];
            secondEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].next_evolution[0].num) -
                        1
                ];
            thirdEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].next_evolution[1].num) -
                        1
                ];
        } else {
            firstEvolution = pokemonData.pokemon[number];
            secondEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].next_evolution[0].num) -
                        1
                ];
            thirdEvolution = null;
        }
    } else if (
        pokemonData.pokemon[number].next_evolution &&
        pokemonData.pokemon[number].prev_evolution
    ) {
        firstEvolution =
            pokemonData.pokemon[
                Number(pokemonData.pokemon[number].prev_evolution[0].num) - 1
            ];
        secondEvolution = pokemonData.pokemon[number];

        thirdEvolution =
            pokemonData.pokemon[
                Number(pokemonData.pokemon[number].next_evolution[0].num) - 1
            ];
    } else if (pokemonData.pokemon[number].prev_evolution) {
        if (pokemonData.pokemon[number].prev_evolution.length > 1) {
            firstEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].prev_evolution[0].num) -
                        1
                ];
            secondEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].prev_evolution[1].num) -
                        1
                ];

            thirdEvolution = pokemonData.pokemon[number];
        } else {
            firstEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].prev_evolution[0].num) -
                        1
                ];
            secondEvolution = pokemonData.pokemon[number];

            thirdEvolution = null;
        }
    } else if (
        !pokemonData.pokemon[number].next_evolution &&
        !pokemonData.pokemon[number].prev_evolution
    ) {
        firstEvolution = pokemonData.pokemon[number];
        secondEvolution = null;
        thirdEvolution = null;
    }

    return [firstEvolution, secondEvolution, thirdEvolution];
}

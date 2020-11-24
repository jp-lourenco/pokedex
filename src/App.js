import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import * as Components from './styles';
import pokemonData from './pokemon';

function App() {
    const [number, setNumber] = useState(
        Math.floor(Math.random() * pokemonData.pokemon.length * 0),
    );

    function plusNumber() {
        if (number < 150) {
            setNumber(number + 1);
        }
    }

    function minusNumber() {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    const type = pokemonData.pokemon[number].type[0];

    if (
        pokemonData.pokemon[number].next_evolution &&
        !pokemonData.pokemon[number].prev_evolution
    ) {
        if (pokemonData.pokemon[number].next_evolution.length > 1) {
            var firstEvolution = pokemonData.pokemon[number];
            var secondEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].next_evolution[0].num) -
                        1
                ];
            var thirdEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].next_evolution[1].num) -
                        1
                ];
        } else {
            var firstEvolution = pokemonData.pokemon[number];
            var secondEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].next_evolution[0].num) -
                        1
                ];
            var thirdEvolution = null;
        }
    } else if (
        pokemonData.pokemon[number].next_evolution &&
        pokemonData.pokemon[number].prev_evolution
    ) {
        var firstEvolution =
            pokemonData.pokemon[
                Number(pokemonData.pokemon[number].prev_evolution[0].num) - 1
            ];
        var secondEvolution = pokemonData.pokemon[number];

        var thirdEvolution =
            pokemonData.pokemon[
                Number(pokemonData.pokemon[number].next_evolution[0].num) - 1
            ];
    } else if (pokemonData.pokemon[number].prev_evolution) {
        if (pokemonData.pokemon[number].prev_evolution.length > 1) {
            var firstEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].prev_evolution[0].num) -
                        1
                ];
            var secondEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].prev_evolution[1].num) -
                        1
                ];

            var thirdEvolution = pokemonData.pokemon[number];
        } else {
            var firstEvolution =
                pokemonData.pokemon[
                    Number(pokemonData.pokemon[number].prev_evolution[0].num) -
                        1
                ];
            var secondEvolution = pokemonData.pokemon[number];

            var thirdEvolution = null;
        }
    } else if (
        !pokemonData.pokemon[number].next_evolution &&
        !pokemonData.pokemon[number].prev_evolution
    ) {
        var firstEvolution = pokemonData.pokemon[number];
        var secondEvolution = null;
        var thirdEvolution = null;
    }

    return (
        <ThemeProvider theme={Theme[type]}>
            <Components.PageContainer>
                <Components.Container>
                    <Components.PokemonContainer>
                        <Components.Minus onClick={() => minusNumber()}>
                            <i className="fa fa-minus" />
                        </Components.Minus>
                        <Components.Circle>
                            <Components.CircleInside />
                            <Components.Line />
                            <Components.OtherLine />
                            <Components.Image
                                src={pokemonData.pokemon[number].img}
                            />
                        </Components.Circle>
                        <Components.Plus onClick={() => plusNumber()}>
                            <i className="fa fa-plus" />
                        </Components.Plus>
                    </Components.PokemonContainer>
                    <Components.StatsContainer>
                        <Components.NameContainer>
                            <Components.Name>
                                {pokemonData.pokemon[number].name}
                            </Components.Name>
                            <Components.Type>
                                Type:
                                {pokemonData.pokemon[
                                    number
                                ].type.map((item, index) =>
                                    index === 0 ? ` ${item}` : ` - ${item}`,
                                )}
                            </Components.Type>
                            <Components.Num>
                                Number: {pokemonData.pokemon[number].num}
                            </Components.Num>
                        </Components.NameContainer>
                    </Components.StatsContainer>
                </Components.Container>
                <Components.Evolutions>
                    <Components.FirstEvolution
                        onClick={() =>
                            setNumber(Number(firstEvolution.num) - 1)
                        }
                    >
                        <Components.NumberEvolution>
                            I
                        </Components.NumberEvolution>
                        <Components.ImageContainer>
                            <Components.EvolutionImage
                                src={firstEvolution.img}
                            />
                        </Components.ImageContainer>
                        <Components.NameEvolutionContainer>
                            {firstEvolution.name}
                        </Components.NameEvolutionContainer>
                    </Components.FirstEvolution>
                    <Components.SecondEvolution
                        onClick={() =>
                            secondEvolution &&
                            setNumber(Number(secondEvolution.num) - 1)
                        }
                    >
                        <Components.NumberEvolution>
                            II
                        </Components.NumberEvolution>
                        <Components.ImageContainer>
                            <Components.EvolutionImage
                                src={
                                    secondEvolution
                                        ? secondEvolution.img
                                        : '/pokebola.png'
                                }
                            />
                        </Components.ImageContainer>
                        <Components.NameEvolutionContainer>
                            {secondEvolution ? secondEvolution.name : 'No Data'}
                        </Components.NameEvolutionContainer>
                    </Components.SecondEvolution>
                    <Components.ThirdEvolution
                        onClick={() =>
                            thirdEvolution &&
                            setNumber(Number(thirdEvolution.num) - 1)
                        }
                    >
                        <Components.NumberEvolution>
                            III
                        </Components.NumberEvolution>
                        <Components.ImageContainer>
                            <Components.EvolutionImage
                                src={
                                    thirdEvolution
                                        ? thirdEvolution.img
                                        : '/pokebola.png'
                                }
                            />
                        </Components.ImageContainer>
                        <Components.NameEvolutionContainer>
                            {thirdEvolution ? thirdEvolution.name : 'No Data'}
                        </Components.NameEvolutionContainer>
                    </Components.ThirdEvolution>
                </Components.Evolutions>
            </Components.PageContainer>
        </ThemeProvider>
    );
}

export default App;

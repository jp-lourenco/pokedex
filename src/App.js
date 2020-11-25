import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import * as Components from './styles';
import pokemonData from './pokemon';
import getEvolutions from './utils.js';

function App() {
    const [number, setNumber] = useState(
        Math.floor(Math.random() * pokemonData.pokemon.length),
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

    const Evolutions = getEvolutions(number);

    const height = window.innerHeight;

    return (
        <ThemeProvider theme={Theme[type]}>
            <Components.PageContainer>
                <Components.ListContainer height={height}>
                    <Components.PokeList>
                        {pokemonData.pokemon.map((item) => (
                            <Components.PokeItem
                                onClick={() => setNumber(item.num - 1)}
                                key={item.num}
                            >
                                <Components.PokeImage src={item.img} />
                            </Components.PokeItem>
                        ))}
                    </Components.PokeList>
                </Components.ListContainer>
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
                        onClick={() => setNumber(Number(Evolutions[0].num) - 1)}
                    >
                        <Components.NumberEvolution>
                            I
                        </Components.NumberEvolution>
                        <Components.ImageContainer>
                            <Components.EvolutionImage
                                src={Evolutions[0].img}
                            />
                        </Components.ImageContainer>
                        <Components.NameEvolutionContainer>
                            {Evolutions[0].name}
                        </Components.NameEvolutionContainer>
                    </Components.FirstEvolution>
                    <Components.SecondEvolution
                        onClick={() =>
                            Evolutions[1] &&
                            setNumber(Number(Evolutions[1].num) - 1)
                        }
                    >
                        <Components.NumberEvolution>
                            II
                        </Components.NumberEvolution>
                        <Components.ImageContainer>
                            <Components.EvolutionImage
                                src={
                                    Evolutions[1]
                                        ? Evolutions[1].img
                                        : '/pokebola.png'
                                }
                            />
                        </Components.ImageContainer>
                        <Components.NameEvolutionContainer>
                            {Evolutions[1] ? Evolutions[1].name : 'No Data'}
                        </Components.NameEvolutionContainer>
                    </Components.SecondEvolution>
                    <Components.ThirdEvolution
                        onClick={() =>
                            Evolutions[2] &&
                            setNumber(Number(Evolutions[2].num) - 1)
                        }
                    >
                        <Components.NumberEvolution>
                            III
                        </Components.NumberEvolution>
                        <Components.ImageContainer>
                            <Components.EvolutionImage
                                src={
                                    Evolutions[2]
                                        ? Evolutions[2].img
                                        : '/pokebola.png'
                                }
                            />
                        </Components.ImageContainer>
                        <Components.NameEvolutionContainer>
                            {Evolutions[2] ? Evolutions[2].name : 'No Data'}
                        </Components.NameEvolutionContainer>
                    </Components.ThirdEvolution>
                </Components.Evolutions>
            </Components.PageContainer>
        </ThemeProvider>
    );
}

export default App;

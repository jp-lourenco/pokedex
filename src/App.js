import React, { useState } from 'react';
import Theme from './Theme';
import {
    Container,
    PokemonContainer,
    Circle,
    CircleInside,
    Line,
    OtherLine,
    Image,
    Plus,
    Minus,
    StatsContainer,
    NameContainer,
    Name,
    Type,
    Num,
} from './styles';
import pokemonData from './pokemon';

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

    return (
        <Theme>
            <Container>
                <StatsContainer>
                    <NameContainer>
                        <Name>{pokemonData.pokemon[number].name}</Name>
                        <Type>
                            Type:
                            {pokemonData.pokemon[
                                number
                            ].type.map((item, index) =>
                                index === 0 ? ` ${item}` : ` - ${item}`,
                            )}
                        </Type>
                        <Num>Number: {pokemonData.pokemon[number].num}</Num>
                    </NameContainer>
                </StatsContainer>
                <PokemonContainer>
                    <Minus onClick={() => minusNumber()}>
                        <i className="fa fa-minus" />
                    </Minus>
                    <Circle>
                        <CircleInside />
                        <Line />
                        <OtherLine />
                        <Image src={pokemonData.pokemon[number].img} />
                    </Circle>
                    <Plus onClick={() => plusNumber()}>
                        <i className="fa fa-plus" />
                    </Plus>
                </PokemonContainer>
            </Container>
        </Theme>
    );
}

export default App;

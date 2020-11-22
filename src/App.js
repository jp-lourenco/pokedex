import Theme from './Theme';
import {
    Container,
    PokemonContainer,
    Circle,
    CircleInside,
    Line,
    OtherLine,
    Image,
} from './styles';

function App() {
    return (
        <Theme>
            <Container>
                <PokemonContainer>
                    <Circle>
                        <CircleInside />
                        <Line />
                        <OtherLine />
                        <Image src="https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png" />
                    </Circle>
                </PokemonContainer>
            </Container>
        </Theme>
    );
}

export default App;

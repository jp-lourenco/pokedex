import Theme from './Theme';
import { Container, Circle, CircleInside, Line, OtherLine } from './styles';

function App() {
    return (
        <Theme>
            <Container>
                <Circle>
                    <CircleInside />
                    <Line />
                    <OtherLine />
                </Circle>
            </Container>
        </Theme>
    );
}

export default App;

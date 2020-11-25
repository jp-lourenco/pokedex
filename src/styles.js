import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 858px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
`;

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Circle = styled.div`
    width: 350px;
    height: 350px;
    border: 5px solid ${(props) => props.theme.colors.secundary};
    border-radius: 50%;
    margin: 0 auto;
`;

export const CircleInside = styled(Circle)`
    top: 6%;
    width: 300px;
    height: 300px;
    position: relative;
    border: 5px solid ${(props) => props.theme.colors.primary};
`;

export const Line = styled.div`
    width: 420px;
    height: 5px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    transform: rotate(-45deg);
    position: relative;
    top: -50%;
    right: 10%;
`;

export const OtherLine = styled(Line)`
    top: -30%;
`;

export const Image = styled.img`
    top: -77%;
    left: 15%;
    width: 70%;
    height: 70%;
    position: relative;
`;

export const Plus = styled.button`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.primary};
    font-size: 50px;
    text-align: center;
    outline: none;
    margin-left: 20px;

    &:hover {
        color: ${(props) => props.theme.colors.secundary};
        cursor: pointer;
    }
`;

export const Minus = styled(Plus)`
    margin-left: 0;
    margin-right: 20px;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const NameContainer = styled.div`
    width: 280px;
    height: 100px;
    background-color: rgba(180, 180, 180, 0.05);
    padding: 10px 15px;

    &:before {
        display: block;
        content: '';
        width: 50px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.primary};
        margin-top: -13px;
        margin-bottom: 13px;
    }
`;

export const Name = styled.h1`
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`;

export const Type = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    padding: 0;
    margin: 18px 0 0 0;
`;

export const Num = styled(Type)`
    margin: 2px 0;
`;

export const Evolutions = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 95px;
    margin-right: 30px;
    margin-bottom: 180px;
`;

export const FirstEvolution = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SecondEvolution = styled(FirstEvolution)`
    margin-left: 15px;
    margin-right: 15px;
`;

export const ThirdEvolution = styled(FirstEvolution)``;

export const NumberEvolution = styled.p`
    font-size: 18px;
    margin: 0;
    padding: 0;
    color: rgb(165, 205, 83);
`;

export const NameEvolutionContainer = styled.div`
    background: linear-gradient(
        14deg,
        rgb(165, 205, 83) 60%,
        rgb(193, 217, 144) 65%
    );
    display: flex;
    width: 150px;
    height: 25px;
    padding: 3px;
    justify-content: flex-end;
    border: inset #879a65 3px;
    font-weight: bold;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(13deg, #afafaf 50%, #ffffff 80%, #afafaf 90%);
    width: 156px;
    height: 150px;
    border: inset #879a65 3px;
    cursor: pointer;
`;

export const EvolutionImage = styled.img`
    width: 70%;
    height: 70%;
`;

export const ListContainer = styled.div`
    width: 100px;
    height: ${({ height }) => height}px;
    padding: 0 20px;
    overflow-y: scroll;
`;
export const PokeList = styled.ul`
    list-style: none;
    padding: 0px;
`;

export const PokeItem = styled.li`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
`;

export const PokeImage = styled.img`
    width: 70%;
    height: 70%;
`;

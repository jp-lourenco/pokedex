import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: radial-gradient(#333 1%, transparent 6%);
    background-color: #141414;
    background-position: 0 0;
    background-size: 50px 50px;
`;

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 150px 0;
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
    margin-left: 30px;

    &:hover {
        color: ${(props) => props.theme.colors.secundary};
        cursor: pointer;
    }
`;

export const Minus = styled(Plus)`
    margin-left: 0;
    margin-right: 30px;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 150px 0;
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

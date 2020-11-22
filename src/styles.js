import styled from 'styled-components';

export const Container = styled.div`
    background-image: radial-gradient(#444 2%, transparent 6%);
    background-color: #141414;
    background-position: 0 0;
    background-size: 50px 50px;
`;

export const Circle = styled.div`
    width: 450px;
    height: 450px;
    border: 5px solid rgba(0, 255, 0, 0.3);
    border-radius: 50%;
    margin: 0 auto;
`;

export const CircleInside = styled(Circle)`
    top: 10%;
    width: 350px;
    height: 350px;
    position: relative;
    border: 5px solid ${(props) => props.theme.colors.grass};
`;

export const Line = styled.div`
    width: 450px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.grass};
    transform: rotate(-45deg);
    position: relative;
    top: -20%;
`;

export const OtherLine = styled(Line)`
    top: -40%;
`;

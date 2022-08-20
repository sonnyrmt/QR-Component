import styled from "styled-components";
import Image from "../images/image-qr-code.png"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: hsl(0, 0%, 100%);
    height: auto;
    width: 450px;
    border-radius: 20px;
    padding: 20px;

    @media (max-width: 500px) {
        flex-direction: column;
        width: 250px;
    }
`;

const QR = styled.div`
    height: 65%;
    width:100%;
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;

`;

const Title = styled.h3`
    color:  black;
    text-align: center;
    margin: 10px;
`;

const Info = styled.p`
    text-align: center;
    padding: 5px;
    color: hsl(220, 15%, 55%);
    aling-self:
`;

const CodeQR = () => {
    return (
        <Container>
            <QR>
                <Img src={Image} />
            </QR>
            <Title>Improve your front-end skills by building projects</Title>
            <Info>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Info>
        </Container>
    );
}

export default CodeQR
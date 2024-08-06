import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90vw;

  max-width: 1350px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  color: #0d8112;

  @media (max-width: 1400px) {
    height: 450px;
    max-width: 800px;
    flex-direction: column;
  }
`;

export const CardHero = styled.div`
  display: flex;
  flex-direction: column;
  img {
    border-radius: 8px;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const CardImage = styled.div`
  display: none;
  @media (max-width: 1400px) {
    width: 100px;
    height: 100px;
    top: -90px;
    position: relative;
    display: flex;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const Ribbon = styled.span`
  width: 100px;
  height: 25px;
  font-size: 1em;
  padding: 4px;
  position: absolute;
  font-weight: 700;
  transform: rotate(13deg);
  right: -25px;
  top: -12px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #e7aada;
  background-color: #ffb8ef;
  color: #773e75;

  @media (max-width: 1400px) {
    transform: rotate(-6deg);
    right: 44%;
    top: auto;
    bottom: -23px;
    width: 125px;
    height: 30px;
    font-size: 1.2em;
  }
`;

export const FreeGiftBanner = styled.div`
  display: none;
  @media (max-width: 1400px) {
    width: 100px;
    height: 100px;
    top: -90px;
    position: relative;
    display: flex;
  }
`;

export const CardContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 1400px) {
    text-align: center;
    margin-top: -80px;
  }

  h1 {
    font-size: 2em;
    font-weight: 700;
    margin: 0;
  }

  h2 {
    font-size: 1.4em;
    font-weight: 300;
    color: #464646;
  }

  p {
    font-size: 1.4em;
    font-weight: 700;
    margin-top: 8px;
    color: #464646;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: 2px solid green;
  padding: 0.6em 1.2em;
  font-size: 1.5em;
  width: 20rem;
  max-height: 100px;
  font-weight: 600;
  font-family: inherit;
  transition: background-color 0.25s;
  cursor: pointer;
`;

export const ButtonFilled = styled(Button)`
  background-color: #0d8112;
  color: white;

  &:hover {
    background-color: #1ea631;
  }
`;

export const ButtonWhite = styled(Button)`
  background-color: white;
  color: #0d8112;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 16px;
`;

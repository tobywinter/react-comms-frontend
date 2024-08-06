import catPhoto from "./assets/catStockPhoto-612x612.jpg";
import {
  CardContainer,
  CardContent,
  CardImage,
  ButtonFilled,
  ButtonWhite,
  ButtonContainer,
  Container,
  CardHero,
  Ribbon,
} from "./app.styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type CommsResponse = {
  freeGift: boolean;
  message: string;
  title: string;
  totalPrice: number;
};

function Welcome() {
  const [data, setData] = useState<CommsResponse | null>(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/comms/your-next-delivery/${userId}`)
      .then((response) => response.json())
      .then((json: CommsResponse) => setData(json))
      .catch((error) => console.error(error));
  }, [userId]);

  if (data) {
    return (
      <>
        <Container>
          <CardContainer>
            <CardHero>
              <img src={catPhoto} alt="Cat" />
            </CardHero>
            <CardImage>
              <img src={catPhoto} alt="Cat" />
            </CardImage>
            <CardContent>
              {data.freeGift && <Ribbon>FREE GIFT</Ribbon>}
              <h1>{data.title}</h1>
              <h2>{data.message}</h2>
              <p>
                Total price:{" "}
                {Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(data.totalPrice)}
              </p>
              <ButtonContainer>
                <ButtonFilled>SEE DETAILS</ButtonFilled>
                <ButtonWhite>EDIT DELIVERY</ButtonWhite>
              </ButtonContainer>
            </CardContent>
          </CardContainer>
        </Container>
      </>
    );
  }
}

export default Welcome;

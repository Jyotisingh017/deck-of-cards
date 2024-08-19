import { useContext } from "react";
import { Box } from "@mui/material";
import Card from "./Card";
import { CardsDrawnContext } from "../context/CardsDrawnContext";
import { cardColour } from "../utility/shared";

const CardDeck = () => {
  const { cardDeck, drawnCards, drawCardHandler } =
    useContext(CardsDrawnContext);
  return (
    <Box className="deck-layout" sx={{ marginTop: "4vw" }}>
      {cardDeck.map((card) => (
        <Card
          id={`${card.id}-${card.name}`}
          name={card.name}
          unicode={card.unicode}
          onClick={() => drawCardHandler([...drawnCards, card])}
          className={`text-xl ${
            cardColour(card.name) === "red" ? "text-red" : "text-gray"
          }`}
        />
      ))}
    </Box>
  );
};

export default CardDeck;

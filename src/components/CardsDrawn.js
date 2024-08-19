import { useContext } from "react";
import { Box } from "@mui/material";
import Card from "./Card";
import { CardsDrawnContext } from "../context/CardsDrawnContext";
import { cardColour } from "../utility/shared";

const CardsDrawn = () => {
  const { drawnCards } = useContext(CardsDrawnContext);

  return (
    <Box className="deck-layout">
      {drawnCards.map((card) => (
        <Card
          id={`${card.id}-${card.name}`}
          name={card.name}
          unicode={card.unicode}
          className={`text-xl ${
            cardColour(card.name) === "red" ? "text-red" : "text-black"
          }`}
        />
      ))}
    </Box>
  );
};

export default CardsDrawn;

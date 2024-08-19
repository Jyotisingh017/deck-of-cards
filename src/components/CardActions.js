import { useContext } from "react";
import { Box, Button } from "@mui/material";
import { CardsDrawnContext } from "../context/CardsDrawnContext";

const CardActions = () => {
  const { cardDeck, drawnCards, filteredDeckHandler, drawCardHandler } =
    useContext(CardsDrawnContext);

  const shuffleCards = () => {
    filteredDeckHandler([...cardDeck].sort(() => Math.random() - 0.5));
  };

  const sortCards = () => {
    filteredDeckHandler([...cardDeck].sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  const sortDrawnCards = () => {
    drawCardHandler([...drawnCards].sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  return (
    <Box sx={{ display: "inline-flex", justifyContent: "center", gap: "2vw" }}>
      <Button
        role="shuffle"
        variant="outlined"
        onClick={shuffleCards}
        disabled={cardDeck.length <= 1}
      >
        Shuffle
      </Button>
      <Button
        role="sort"
        variant="outlined"
        onClick={sortCards}
        disabled={cardDeck.length <= 1}
      >
        Sort
      </Button>
      <Button
        role="sort-drawn"
        variant="outlined"
        onClick={sortDrawnCards}
        disabled={drawnCards.length <= 1}
      >
        Sort drawn cards
      </Button>
    </Box>
  );
};

export default CardActions;

import { createContext } from "react";

export const CardsDrawnContext = createContext({
  cardDeck: [],
  drawnCards: [],
  filteredDeckHandler: () => {},
  drawCardHandler: () => {},
});

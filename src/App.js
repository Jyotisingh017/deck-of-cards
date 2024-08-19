import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import CardsDrawn from "./components/CardsDrawn";
import CardDeck from "./components/CardDeck";
import CardActions from "./components/CardActions";
import { CardsDrawnContext } from "./context/CardsDrawnContext";
import cardDeckJson from "./data/cardDeck.json";

import "./App.css";

function App() {
  const [originalCardDeck, setCardDeck] = useState(cardDeckJson);
  const [drawnCardList, setDrawnCards] = useState([]);

  const contextValue = {
    cardDeck: originalCardDeck,
    drawnCards: drawnCardList,
    filteredDeckHandler: (deckList) => setCardDeck([...deckList]),
    drawCardHandler: (cardList) => setDrawnCards([...cardList]),
  };

  useEffect(() => {
    const filteredCardDeck = originalCardDeck.filter(
      (item) => !drawnCardList.map((d) => d.id).includes(item.id),
    );
    setCardDeck([...filteredCardDeck]);
  }, [drawnCardList]);

  return (
    <div className="App">
      <CardsDrawnContext.Provider value={contextValue}>
        <Layout>
          <CardsDrawn />
          <CardDeck />
          <CardActions />
        </Layout>
      </CardsDrawnContext.Provider>
    </div>
  );
}

export default App;

/*
  - remove card from original deck
  - add button events
  - disable sort on drawn deck if list empty
*/

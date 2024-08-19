export const cardColour = (cardName) => {
  if (
    (cardName && cardName.includes("Hearts")) ||
    cardName.includes("Diamonds")
  ) {
    return "red";
  } else {
    return "black";
  }
};

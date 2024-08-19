const Card = ({ id, className, unicode, onClick }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {unicode}
    </button>
  );
};

export default Card;

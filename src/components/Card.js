const Card = ({role,className, unicode, onClick }) => {
  return (
    <button role={role} className={className} onClick={onClick}>
      {unicode}
    </button>
  );
};

export default Card;

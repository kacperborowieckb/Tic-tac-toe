import './square.css';

const Square = ({ value, onClick }) => {
  return <div onClick={onClick}>{value}</div>;
};

export default Square;

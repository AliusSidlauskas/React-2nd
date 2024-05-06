
import styles from "./ShoeCard.module.css";

const ShoeCard = ({ imageUrl, title, producedDate, remainingUnits }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <h5>{producedDate}</h5>
      <h5>{remainingUnits}</h5>
    </div>
  );
};
export default ShoeCard;

import styles from "./Card.module.css";

const Card = ({ imgUrl, title, date, units }) => {
  return (
    <div className={styles.main}>
      <img src={imgUrl} alt={title} />
      <h4>{title}</h4>
      <p>{date}</p>
      <h6>{units}</h6>
    </div>
  );
};

export default Card;





// 1. Prie savo produktų masyvo pridėti property unitsLeft (number);
// 2. Jeigu produkto unitsLeft yra 1 ar. daugiau turi būt atvaizduojama produkto kortelė, jeigu produkto unitsLeft yra 0 kotelės viduje turi vietoj nuotraukos atsirast užrašas "Šiuo metu prekės neturim"; (naudot tennary operator);
// 3. Sudėti savo produktus į mockAPI, juos parsifetchint, įdėt į useState kintamajį; 
// 4. Vietoj fetch panaudoti axios biblioteką;
// 5. Pasidaryt vieną iš neatliktų praeitų paskaitų dizainą;
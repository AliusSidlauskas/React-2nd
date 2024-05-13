import styles from "./Main.module.css";
// import CardsWrapper from "../CardsWrapper/CardsWrapper";
import ShoesWrapper from "../ShoesWrapper/ShoesWrapper";

const Main = ({shoes}) => {
  return (
    <main className={styles.main}>
      {/* <CardsWrapper /> */}
      <ShoesWrapper shoes={shoes}/>
    </main>
  );
};

export default Main;
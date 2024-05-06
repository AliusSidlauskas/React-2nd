import styles from "./Main.module.css";
import ShoesWrapper from "../ShoesWrapper/ShoesWrapper";

const Main = ({shoes}) => {
  return (
    <main className={styles.main}>
      <ShoesWrapper shoes={shoes}/>
    </main>
  );
};

export default Main;
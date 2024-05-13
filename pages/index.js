import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import Footer from "../components/Footer/Footer";
import axios from "axios";
import Count from "../components/Count/Count"

const MainPage = () => {
  const [shoes, setShoes] = useState(null);

  const fetchShoes = async () => {
    const response = await axios.get(
      "https://6634cb059bb0df2359a2c244.mockapi.io/shoes"
    );
  
    setShoes(response.data);
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  // console.log(shoes);

  return (
    <div className={styles.container}>
      {/* <Header /> */}
      {/* <Main shoes={shoes}/> */}
      <Count/>
      {/* <Footer /> */}
    </div>
  );
};

export default MainPage;

// Susikurti komponentą kuris savyje turi inputą bei atvaizduojamą tekstą;(tektas turi būt išsaugomas useState); 
// 2. Komponentas taip pat turi turėt button kuris switchina isShowText state; (komponentas turi turėt 2 kintamuosius kurie naudotu useState ( inputText ir  isShowText))
// 3. Išsibandyt viusus 3 funkcinio komponento Lifecycle gyvavimo etapus:
// 3.1 console.log'as turi atspauzdint tektą "First" iškart kai komponentas yra užmountintas;
// 3.2 console.log'as turi atspauzdint tekstą "Second" kiekvieną kart kai komponento inputText reikšmė pasikeičia;
// 3.3 console.log'as turi atspauzdint tekstą "Third" kiekvieną kart kai komponento kai inputText arba isShowText state pasikeičia;
// 3.4 console.log'as turi atspauzdint tekstą "END" kai komponentas yra uždaromas;
// 4.1. Parašyt formos komponentą su 2 inputais bei button'u;
// 4.2. Komponentui duot minimalia validacija: jei bent vienas inputas yra tuščias - formos apačioje turi atsirast tekstas "Please fill both inputs";
// 4.4 Naudojantis useEffect turit consolėj spauzdint tekstą kiekvieną kart rašant į bet kurį inputą. Jei visi inputai turi teksto - validacija sekminga, kitu atveju - validacija nesekminga
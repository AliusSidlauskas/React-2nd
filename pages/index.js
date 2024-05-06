import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import Footer from "../components/Footer/Footer";
import axios from "axios";

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

  console.log(shoes);

  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Main shoes={shoes}/>
      {/* <Footer /> */}
    </div>
  );
};

export default MainPage;
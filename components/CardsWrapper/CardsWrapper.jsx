// import { useState } from "react";
// import styles from "./CardsWrapper.module.css";
// import Card from "../Card/Card";

// const CardsWrapper = () => {
//   const [cards, setCards] = useState([
//     {
//       id:"1",
//       imgUrl: "https://www.amberjack.shop/cdn/shop/files/OGChestnutLeft.webp?v=1692643617",
//       title: "First",
//       date: "2012",
//       unitsLeft:"Units left:3"
//     },
//     {
//       id:"2",
//       imgUrl: "https://contents.mediadecathlon.com/p2393841/97ec4616ea32d8eaa67ee3c30d2eafd2/p2393841.jpg?format=auto&quality=70&f=650x0",
//       title: "Second",
//       date: "2013",
//       unitsLeft:"Units left:5"
//     },
//     {
//       id:"3",
//       imgUrl: "https://hips.hearstapps.com/hmg-prod/images/index-shoes-1661358805.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
//       title: "Third",
//       date: "2014",
//       unitsLeft:"Units left:8"
//     },
//   ]);

//   return (
//     <div className={styles.main}>
//       {cards.map((card) => (
//         <Card
//           key={card.id}
//           imgUrl={card.imgUrl}
//           title={card.title}
//           date={card.date}
//           units={card.unitsLeft}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardsWrapper;

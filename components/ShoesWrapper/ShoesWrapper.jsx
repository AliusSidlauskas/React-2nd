import ShoeCard from "../ShoeCard/ShoeCard";
import styles from "./ShoesWrapper.module.css";

const ShoesWrapper = ({ shoes }) => {
  
  return (
    <div>
      {shoes &&
        shoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            imgUrl={shoe.img_url}
            title={shoe.title}
            producedDate={shoe.produced_date}
            remainingUnits={shoe.remaining_units}
          />
        ))}
    </div>
  );
};

export default ShoesWrapper;

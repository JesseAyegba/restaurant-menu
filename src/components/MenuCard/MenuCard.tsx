import React from "react";
import styles from "./MenuCard.module.css";
import BoxIcon from "../BoxIcon/BoxIcon";

type Props = {
  title: string;
  ingredients: string[];
  price: number;
};

const MenuCard: React.FC<Props> = ({ title, ingredients, price }) => {
  return (
    <div className={styles.container}>
      <div className="flex gap-[0.375rem] items-center">
        <BoxIcon />
        <h3 className={styles.container__header}>{title}</h3>
      </div>
      <ul className="flex items-center gap-[0.375rem]">
        {ingredients.map((item, index) => {
          return (
            <li key={index} className="text-[0.75rem] flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-gray-600 inline-block"></span>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between">
        <span className="font-bold text-[0.875rem]">
          ₦ {price.toLocaleString()}
        </span>
        <button className="bg-orange-400 text-white h-[2rem] rounded-[0.375rem] text-[0.75rem] font-bold px-[1rem]">
          View Item
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

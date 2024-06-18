import MenuCard from "@/components/MenuCard/MenuCard";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  const meals = [
    {
      id: 1,
      title: "Crunchy Butterscotch",
      ingredients: ["Butterscotch & Cashews"],
      price: 1500,
    },
    {
      id: 2,
      title: "Pounded Yam",
      ingredients: ["Egusi", "Stock fish", "Spinach"],
      price: 1500,
    },
    {
      id: 3,
      title: "Pounded Yam",
      ingredients: ["Egusi", "Stock fish", "Spinach"],
      price: 1500,
    },
    {
      id: 4,
      title: "Pounded Yam",
      ingredients: ["Egusi", "Stock fish", "Spinach"],
      price: 1500,
    },
    {
      id: 5,
      title: "Pounded Yam",
      ingredients: ["Egusi", "Stock fish", "Spinach"],
      price: 1500,
    },
  ];
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <section className={styles.cards}>
        <div className={styles.cards__wrapper}>
          {meals.map((item) => {
            return (
              <MenuCard
                key={item.id}
                title={item.title}
                ingredients={item.ingredients}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;

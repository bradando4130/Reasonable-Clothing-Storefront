import StoreItem from "./StoreItem/StoreItem";

import classes from "./StoreFront.module.scss";

const DUMMY_DATA = [
  {
    id: "c1",
    name: "Preston Slim Dress Shirt",
    img: require("../../assets/placeholderShirt.jpg"),
    description: "Collared white business shirt, suitable for all occasions",
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 19.99,
  },
  {
    id: "c2",
    name: "Yarra Slim Chino Pant",
    img: require("../../assets/placeholderShirt.jpg"),
    description: "Smarter than jeans, not as formal as dress pants",
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 39.99,
  },
  {
    id: "c3",
    name: "Windsor Tie",
    img: require("../../assets/placeholderShirt.jpg"),
    description: "Smart and sophisticated Tie to complement any look",
    sizes: ["R"],
    price: 17.99,
  },
  {
    id: "c4",
    name: "Prahran T Shirt",
    img: require("../../assets/placeholderShirt.jpg"),
    description: "Casual shirt for casual affairs",
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 15.99,
  },
];

const StoreFront = (props) => {
  const availableClothing = DUMMY_DATA.map((item) => (
    <StoreItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.img}
      sizes={item.sizes}
    />
  ));

  return (
    <section className={classes.storeContainer}>{availableClothing}</section>
  );
};

export default StoreFront;

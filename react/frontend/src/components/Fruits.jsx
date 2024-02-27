import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { name: "apple", price: 10 },
    { name: "banana", price: 20 },
    { name: "mango", price: 30 },
  ];

  return (
    <div>
      <ul>
        
        {/*
        fruits.map((fruit) => (
          <li key={fruit.name}>{fruit.name} </li>
        ))*/
        fruits.map((fruit) => (
        <Fruit fruit_name={fruit.name} price={fruit.price}/>
        ))
        }
      </ul>
      
    </div>
  );
}

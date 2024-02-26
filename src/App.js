import { useState } from 'react';

const receiptsData = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito', protein: 'Organic Tofu', rice: 'Purple Rice', sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata', cost: 22
    }, paid: false
  },
  {
    person: 'Mark',
    order: { main: 'Rice Bowl', protein: 'Ginger Soy Chix', rice: 'Sticky Rice', sauce: 'Korilla', toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'], drink: 'Korchata', cost: 19 }, paid: false
  },
  {
    person: 'Matt',
    order: { main: 'Salad Bowl', protein: 'Organic Tofu', rice: 'none', sauce: "K'lla", toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'], drink: 'Sparkling Blood Orange Soda', cost: 20 },
    paid: true
  },
  {
    person: 'Dianna Trials',
    order: { main: 'Salad', protein: 'Organic Mushrooms', rice: 'brown', sauce: "Mushroom Avocado", toppings: ['Diced Potato', 'Pico De Gallo', 'Spicy Kimchi'], drink: 'Cold Pressed Ginger Juice', cost: 43.95 },
    paid: true
  }
]

// let [receipts, setReceipts] = useState(receiptsData)



let orders = receiptsData.map((items) => {

  console.log(items.paid + "paid!")
  return (<div className="receiptContainer">
    <h1>{items.person}</h1>
    <hr className="spaceBelow" />
    <h3>Main: {items.order.main}</h3>
    <h3>Protein: {items.order.protein}</h3>
    <h3>Rice: {items.order.rice}</h3>
    <h3>Sauce: {items.order.sauce}</h3>
    <h3>Toppings: {items.order.toppings}</h3>
    <h3>Drink: {items.order.drink}</h3>
    <h3>Total: $ {items.order.cost}</h3>
    <br />
    {/* <h3>Paid: $ {items.paid.value()}</h3> */}

  </div>
  );
});


function App() {
  return (
    <div>
      <div className="receiptsHeading">
        <h1>KORILLA RECEIPTS</h1>
      </div>
      <div className="App">
        {orders}
      </div>
    </div>
  );
}

export default App;

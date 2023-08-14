const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 300,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 200,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 900,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 750,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 200,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 400,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Pizza({ pizaObj }) {
  console.log(pizaObj);
  // if (pizaObj.soldOut) {
  //   return null;
  // }
  return (
    <li className={`pizza ${pizaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizaObj.photoName} alt="" />
      <div>
        <h3>{pizaObj.name}</h3>
        <p>{pizaObj.ingredients}</p>
        {pizaObj.soldOut ? (
          <span>Sold out</span>
        ) : (
          <span>₹{pizaObj.price}</span>
        )}
        {/* <span>₹ {pizaObj.soldOut ? "Sold out" : pizaObj.price}</span> */}
      </div>
    </li>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "60px",
  //   textTransform: "uppercase",
  //   textAlign: "center",
  // };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast Pizza.co</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* conditional render type 1 */}
      {/* {numpizzas > 0 && (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        )} */}
      {/* conditional render type 2 */}
      {numpizzas > 0 ? (
        <>
          <p>
            Enjoy Fast pizz 's delicious new pizzas at up to ₹. 300* OFF using
            code HUT300 | Order now and get 2 personal pizzas at ₹. 299* | For
            more such amazing
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on our menu.Please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={15}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("shop is open now");
  // else alert("we are closed");
  // if (!isOpen) {
  //   return <h1>Shop closed</h1>;
  // }
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We're currently open */}
      {/* conditional type 1 */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour} :00.Come visit us order online</p>
          <button className="btn">Order Now</button>
        </div>
      )} */}
      {/* conditional type 2 */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} :00 to until {closeHour} :00.Come visit us
        order online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
export default App;

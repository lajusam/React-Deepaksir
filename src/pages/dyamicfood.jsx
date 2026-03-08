import {  useState } from "react";
import "./dynamic.css";
const DynamicFoodMenu = () => {
  //preparing state using use state
        const[name,setname]=useState("");
        const[price,setprice]=useState(0);
        const[discription,setdiscription]=useState("");
        const[imgurl,seturl]=useState("");
  const [foodMenuList, setFoodMenuList] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 1000,
      description: "A delicious cheesy pizza with your choice of toppings.",
      image:
        "https://img.freepik.com/premium-photo/closeup-cheese-pepperoni-pizza-slice-being-lifted_1223942-16181.jpg?w=1060",
    },
    // {
    //   id: 2,
    //   name: "Burger",
    //   price: 800,
    //   description: "A juicy beef burger with lettuce, tomato, and cheese.",
    //   image:
    //     "https://recipes.net/wp-content/uploads/2023/07/veggie-indian-burger_c600955990467b492e73154a8d821fc7.jpeg",
    // },
  ]);

  const handleAddFoodMenu = (e) => {
        e.preventDefault();
    const newFoodMenu = {
      id: foodMenuList.length + 1,
      name: name,
      price: price,
      description: discription,
      image: imgurl,
    };
    setFoodMenuList([...foodMenuList, newFoodMenu]);
    setname("");
    setprice(0);
setdiscription("");
seturl("")
    
  };
  return (
    <div>
      <h1> Dynamic Food Menu</h1>
      <div style={{ display:"flex"}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 per row
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {foodMenuList.map((el) => {
            return (
              <div
                key={`${el.id}-${el.name}`}
                style={{
                  backgroundColor: "orange",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src={el.image}
                  alt={el.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <p>
                    <strong>{el.name}</strong>
                  </p>
                  <p>{el.price}</p>
                  <p>{el.description}</p>
                  <button className=" button Delete">Delete</button>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <button className=" button edit">Edit</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-container">
          <form onSubmit={handleAddFoodMenu}>
            <h3>Food Menu</h3>
            <label>
              Food name
              <br />
              <input value={name} type="text" placeholder="Enter the food name" onChange={(e)=>setname(e.target.value)} />
            </label>
            <br />
            <label>
              Price
              <br />
              <input  value={price}type="number" placeholder="Enter the price"  onChange={(e)=>setprice(e.target.value)}/>
            </label>
            <br />
            <label>
              Description
              <br />
              <input value={discription}  type="text" placeholder="Enter the discription" onChange={(e)=>setdiscription(e.target.value)}/>
            </label><br/>
            <label>Image<br/>
                <input value={imgurl}type="text" placeholder="Enter the url" onChange={(e)=>seturl(e.target.value)}/>

            </label><br/>
            <button className="button">Add food menu</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DynamicFoodMenu;

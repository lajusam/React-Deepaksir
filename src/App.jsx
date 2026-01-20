
// Always start with capital letter to create a component
// functional component

const App=()=>{
    let count1=89000;


  //retrun always retrun olnly one jsx element\
  // to return multiple jsx element use fragememnt(<></>)ordiv
  return(
    <>
    <div>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum corrupti tempore totam cum eaque recusandae, est ratione veniam quasi officiis atque magnam, nostrum ex amet iusto perferendis voluptas et!</p>
      {/*never use capital letter for jsx elemnt like for bold tag <B></B> */}
      <b>This is bolde text</b>
      {/* use className insted of class atrribute */}
      {/* use html for instead of for attribute  */}
      {/* use{} to display variable value or for expression*/}
      <i>Total:{45+56}</i>
      <h4>count:{count1}</h4>
      {/* <h6>even or odd:{79 % 2 ==0?"even":"odd"}</h6> */}
    </div>
    </>
  )
}
export default App;
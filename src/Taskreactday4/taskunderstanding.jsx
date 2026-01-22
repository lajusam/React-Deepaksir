// JSX stands for:

// JavaScript XML

// JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.

// 1)Write jsx for a <header> with a logo image and navigation links.
// 2)Create a JSX list of 5 fruits using <ul> and <li>
// 3)Write JSX with a conditional message using ternary operator.
// 4)Embed a JavaScript array length in JSX: "You have {items.length} items".
// 5)Create JSX with inline styles using an object.

// 6)Write JSX for a self-closing <input /> with placeholder and type.

// 7)Use fragments (<>...</>) to return multiple elements without a wrapper.

// 8)Write JSX comments inside the return statement.

// 9)Create a JSX table with 3 rows and 2 columns.
// 10)Write JSX that displays current date using {new Date().toLocaleDateString()}.
import img1 from '../assets/img1.jpeg'
const Header=()=>{

    let x=2;
    const arry1=["Table","mouse","keyboard"]

    const style1={
        color:"Red",
        fontSize:"40px",
        backgroundColor:"blue",
        borderRadius:"10px",

    }
    return(
        <>
        <h1>1.image with navigation links</h1>
        <header>
            <img src={img1}
            alt="logo"
            style={{width:"200px", height:"200px"}}
            />
    
        <nav>
           <a href="/">Home</a>
           <a href="/about">about</a>
           <a href="/contact">Contact</a>
        </nav>
            </header>
            <div>
                <h1>2.list of 5 fruits</h1>
                <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Watermelon</li>
                    <li>Orange</li>
                    <li>Tomato</li>
                </ul>
                <h1>3. is ternary operator</h1>
                {x % 2 ==0? "2 is even":"2 id odd"}

                <h1>4.This is array length</h1>
                <p>The length of the array1 is {arry1.length}</p>

                <h1>5.Inline style using and object</h1>
                <p style={style1}>Notice the change with others</p>
                
                <h1>6.self-closing input with placeholder and type</h1>
                <input type="text" placeholder='enter the text'/>
                <h1>7.using fragments</h1>
                <>
                <h1>This is inside fragment with out div</h1>
                <h2>This is also inside fragment </h2>
                </>
                <h1>8. comments</h1>
                {/* This is comment */}
                <h1>9.This is table</h1>
              <table border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
        <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
        </tr>
      </tbody>
    </table>
        <h1>10.current date</h1>
        <p>This is the current date {new Date().toLocaleDateString()}</p>
            </div>
            </>
        
    )

}
export default Header;




import Usingprops from './props1';

// Parent Component

let App=()=>{
    const Greet=()=>{
        return (<h2>Hello</h2>)
    }

    return(
        <div>
            <Usingprops 
            name="Lajusam Magar"
            course="BSC.csit"
            section="A"
            id={172}
            />
          
        </div>
            
    )
}
export default App;

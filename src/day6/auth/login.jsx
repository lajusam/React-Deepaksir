
let rules=[
    {name:"email", type:"email",placeholder:"Enter your email",rule:"required|email"},
    {name:"password",type:"passsword", rule:"required|min:8"}
]

const Login=()=>{
        
    return(
        <>
            {
                rules.map((e,i)=>{
                    return (
                        <div>
                        <ol>
                        <li key={i}>Names:{e.name}: {e.rule}</li>
                       
                        </ol>
                        </div>
                      
                       
                    )
                })
            }

        <div>
            <h1>This is login page</h1>
            <p>Plese enter the following details to login:</p>
            <div>
                <input type="email" placeholder="Enter your email"/>
            </div><br/>
            <input type="password" placeholder="Enter you password"/><br/>
            <button>Login</button>

        </div>
        </>
    )
}
export default Login;
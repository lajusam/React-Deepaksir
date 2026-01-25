
    let names=["Bibek","Swastik","Rajan","Dikshant"]
const Dashboard=()=>{
    return(
        <>
        <div>
            <h3>Dashboard</h3>
            <p>Welcome to Dashbaord</p>
            <i>You are good to go</i>
            <ul>
                {names.map((e,i)=>{
                return(
                    <li key={i}>{e}</li>
                )
            })}
            </ul>
       
        </div>
        </>
    )
}
export default Dashboard;
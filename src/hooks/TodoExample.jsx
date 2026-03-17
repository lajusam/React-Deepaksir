import useFetch from "./mycustomHook";

const TodoExample =()=>{
    const [todos,settodo]=useFetch("https://jsonplaceholder.typicode.com/todos")
    const [photos,setphoto]=useFetch("https://jsonplaceholder.typicode.com/photos")
    return(
        <div>
{/* 
            {
                todos.map(

                    (todo)=>{
                        return(
                           <p key={todo.id}>{todo.title}</p>
                    )
                    }
                )
            } */}
             {
                photos.map((photo)=>{
                            return(
                                // <p key={photo.id}>{photo.title}</p>
                                <p key={photo.id}>{photo.url}</p>
                            )
                }
            )
             }
        </div>
    )
}
export default TodoExample;
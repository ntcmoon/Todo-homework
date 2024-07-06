import useFetch from "./useFetch";
import './Todo-homework.css';



export default function ToDoList() {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
        {data &&
            data.map((item) => {
                return <div>
                    <li className="task" key = {item.id} > {item.title}</li>
                
                    </div>
               
            })}
        </>
    );
};


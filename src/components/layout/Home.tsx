import NotesAppMini from "./notes-app-mini/NotesAppMini";
import TodoListMini from "./todo-list-mini/TodoListMini";
import WeatherAppMini from "./weather-app-mini/WeatherAppMini";


export default function Home(){
    return(
        <div className="p-7 grid grid-cols-4 gap-5 grid-rows-2">
            <NotesAppMini />
            <WeatherAppMini />
            <TodoListMini />
        </div>
    )
}
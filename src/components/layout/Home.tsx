import NotesAppMini from "./notes-app-mini/NotesAppMini";
import TodoList from "./todo-list/TodoList";
import WeatherAppMini from "./weather-app-mini/WeatherAppMini";


export default function Home(){
    return(
        <div className="container py-10 grid grid-cols-3 gap-5 grid-rows-2">
            <NotesAppMini />
            <WeatherAppMini />
            <TodoList />
        </div>
    )
}
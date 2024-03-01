import NotesApp from "./notes-app/NotesApp";
import TodoList from "./todo-list/TodoList";
import WeatherAppMini from "./weather-app-mini/WeatherAppMini";


export default function Home(){
    return(
        <div className="container pt-10 grid grid-cols-3 gap-5 grid-rows-2">
            <NotesApp />
            <WeatherAppMini />
            <TodoList />
        </div>
    )
}
import TodoList from "./todo-list/TodoList"
import WeatherApp from "./weather-app/WeatherApp"

export default function MainContent(){
    return(
        <div className="container pt-10 columns-2">
            <TodoList />
            <WeatherApp />
        </div>
    )
}
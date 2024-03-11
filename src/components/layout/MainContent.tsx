import TodoList from "./todo-list/TodoList"
import WeatherApp from "./weather-app/WeatherApp"
import NotesApp from "./notes-app/NotesApp"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function MainContent(){
    return(
        <div className="bg-neutral-900 h-100vh">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/weather" element={<WeatherApp />}></Route>
                <Route path="/todo" element={<TodoList />}></Route>
                <Route path="/notes" element={<NotesApp />}></Route>
            </Routes>
        </div>
    )
}
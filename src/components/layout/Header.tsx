import logo from "@/assets/cetus-whale.png";
import { Link } from "react-router-dom";


export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-2">
        <img src={logo} alt={"cetuspro whale"} className={"h-6 block"} />
        <h1 className={"font-bold"}>Cetus Dashboard</h1>
        <div className="ml-20">
          <ul className="flex gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/todo">To-do App</Link>
            </li>
            <li>
              <Link to="/notes">Notez</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

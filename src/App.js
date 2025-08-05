import { Outlet } from "react-router";
import Header from "./pages/templates/Header";

function App() {

  return (
    <div>
      <Header />
      
      <Outlet />
    </div>
  );
}

export default App;
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header></Header>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </main>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: ":explore",
        element: <ExplorePage></ExplorePage>,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage></DetailsPage>,
      },
      // {
      //   path: ":explore",
      //   element: <ExplorePage></ExplorePage>,
      // },
      {
        path: "search",
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);
export default routes;

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: ,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

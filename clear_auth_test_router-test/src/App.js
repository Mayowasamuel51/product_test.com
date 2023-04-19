import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader, loaderHome } from './pages/Home'
import Products from './pages/Products'
import Navbar from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />, 
    children: [
      {
        index: true,
        id: 'product-id',
        loader: loader,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },

    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

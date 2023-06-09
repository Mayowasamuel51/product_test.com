import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader, loaderHome } from './pages/Home'
import Products from './pages/Products'
import Navbar from "./components/Navbar";
import Item, {itemloader} from "./components/Item";
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
      {
        path: ":items",
        element: <Item />,
        loader:itemloader
      }

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

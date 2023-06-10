import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './Site/routes/route';

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

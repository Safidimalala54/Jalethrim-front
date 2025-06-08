import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="accueil" replace />} />
        <Route element={<Accueil />} path="/accueil" />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import AccueilPerso from "./pages/Accueil/AccueilPerso";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="accueil" replace />} />
        <Route element={<Accueil />} path="/accueil" />
        <Route element={<AccueilPerso />} path="accueilperso" />
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

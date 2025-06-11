import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import TestPage from "./pages/TestPage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="result" element={<ResultPage />} />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default App;

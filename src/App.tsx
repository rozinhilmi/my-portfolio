import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { Dashboard, NotFoundPage } from "./pages";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Middleware />}> */}
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Dashboard />} />
        {/* </Route> */}
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="error" element={<h1>error</h1>} /> */}
      </>,
    ),
  );
  return <RouterProvider router={router} />;
};

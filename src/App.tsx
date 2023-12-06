import { Provider } from "react-redux";
import GlobalStyles, { Container } from "./styles";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewContact />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;

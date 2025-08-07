import { createBrowserRouter } from "react-router";
import TodoList from "./components/todo/TodoList";
import Example from "./components/Examples/Example";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/todo',
                element: <TodoList />
            },
            {
                path: '/about',
                element: <Example />
            }
        ]
    },

]);

export default router;
import { createBrowserRouter } from "react-router";
import TodoList from "./components/todo/TodoList";
import Example from "./components/Examples/Example";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
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
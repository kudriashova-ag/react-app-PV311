import { createBrowserRouter } from "react-router";
import TodoList from "./components/todo/TodoList";
import Example from "./components/Examples/Example";
import App from "./App";
import Home from "./pages/Home";
import Users from "./pages/Users";
import  {getUser, getUsers}  from "./loaders/UsersLoaders";
import User from "./pages/User";
import Registration from "./pages/Registration";

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
            },
            {
                path: '/users',
                loader: getUsers,
                element: <Users />,
                children: [
                    {
                        path: ":id",
                        loader: getUser,
                        element: <User />
                    }
                ]
            },
            {
                path: "/register",
                element: <Registration />
            },

            {
                path: '*',
                element: <h1>404. Page Not Found</h1>
            }

            /*
            Окрема сторінка
            {
                path: "/users/:id",
                loader: getUser,
                element: <User />
            }*/
        ]
    },

]);

export default router;
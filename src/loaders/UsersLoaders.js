import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}


export const getUser = async ({ params }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id);
    return response.data;
}


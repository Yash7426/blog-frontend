import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL ="https://strapi-backend-2qkp.onrender.com";

export const socket = io(URL);
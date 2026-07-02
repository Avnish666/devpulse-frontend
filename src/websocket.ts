import SockJS from "sockjs-client";
import Stomp from "stompjs";

const socket = new SockJS(
  `${import.meta.env.VITE_API_URL}/ws`
);

export const stompClient =
  Stomp.over(socket);
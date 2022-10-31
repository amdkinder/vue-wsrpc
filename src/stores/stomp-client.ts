import {defineStore} from "pinia";
import SockJS from 'sockjs-client/dist/sockjs';

import {Stomp} from "@stomp/stompjs";
import {useAuthStore} from "@/stores/auth.store";

export const useStompStore = defineStore('stomp', () => {
    var global = window;
    let stompClient: any = null;
    const baseUri = "http://localhost:8080/ws"
    const sendDestination = "/app/topic/handler"
    const userDestination = "/user/topic/rpc"
    const init = () => {
        const sockjs = new SockJS(baseUri)
        stompClient = Stomp.over(sockjs)
        const headers = {'Authorization': localStorage.getItem('token')}
        stompClient.connect(headers, () => {
            console.log("connected")
            subscribe()
            send(request)
        })
    }

    const subscribe = () => {
        stompClient.subscribe(userDestination, (res: any) => {
            console.log(res)
        })
    }

    const request = {
        service: "FFFFMS",
        data: {
            id: new Date().toISOString(),
            method: "getFFFF",
            params: {criteria: "ff"}
        }
    }

    const send = (data: any) => {
        console.log("data: ", data)
        stompClient.send(sendDestination, {}, JSON.stringify(data))
    }


    return {init}
})
import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(null)

    const config = {
        "username": '998950016632',
        "password": '123',
        "client_id": 'mobile',
        "client_secret": '123',
        "grant_type": "password",
        // "scope": "openid",
        "platform": 'IPHONE',
        "device": '12345',
        "name": 'Iphone 11',
        "code": '646067',
    }
    const url = 'https://auth.hamyon.uz/auth/realms/hamyon-business/protocol/openid-connect/token'
    const registerUri = 'https://auth.hamyon.uz/auth/realms/hamyon-business/sms/register-user'

    const registerConfig = {
        "firstName": "Axrorbek",
        "lastName": "Kuchkarov",
        "username": "998950013363",
        "platform": "IPHONE",
        "deviceId": "AAAAAdevice",
        "name": "Iphone 11",
        "password": "1237654.Hp"
    }

    const login = (payload: any) => {
        payload = {...config, ...payload}
        const query = new URLSearchParams();
        Object.keys(payload).forEach(key => {
            query.append(key, payload[key])
        })
        axios.post(url, query).then(res => {
            console.log(res)
            token.value = res.data['access_token']
        })
    }

    const loginUrl = 'http://localhost:8080/api/auth/token'

    const loginFromHelper = (payload: any) => {
        payload = {
            "username": '998950016632',
            "password": '123',
            ...payload
        }
        axios.post(loginUrl, payload).then(res => {
            console.log(res.data)
        })
    }

    const register = () => {
        axios.post<any>(registerUri, registerConfig)
            .then(res => console.log(res.data))
    }


    return {login, token, loginFromHelper, register}
})

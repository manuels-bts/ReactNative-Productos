import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = "https://cafe-rn-tutorial-f6874a0273f2.herokuapp.com/api"

const cafeAPI = axios.create({ baseURL });

// Si existe el token, anexalo en los headers de cualquier peticion 
cafeAPI.interceptors.request.use(
    async (config) => {
        const token = AsyncStorage.getItem('token')

        if (token) {
            config.headers['x-token'] = token
        }

        return config
    }
)

export default cafeAPI;
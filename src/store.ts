import { createStore } from "vuex";

export const store = createStore({
    state: {
        token: "",
        bearer: ""
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            state.bearer = token.access_token
        }
    },
    getters: {
        getToken(state) {
            return state.token
        },
        getBearer(state) {
            return state.bearer
        }
    }
})
import { createStore } from "vuex";

export const store = createStore({
    state: {
        token: undefined
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
})
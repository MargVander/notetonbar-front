import { createStore } from "vuex";

export const store = createStore({
    state: {
        token: undefined,
        test: "test store"
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    getters: {
        getToken(state) {
            return state.token
        },

        getTest(state) {
            return state.test
        }
    }
})
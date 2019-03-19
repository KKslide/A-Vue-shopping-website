import Vue from 'vue'

export default {
    state: {
        shopcartData: JSON.parse(localStorage.getItem('shopcartData'))||{}
    },
    getters: {
        getShopcartData(state) {
            return state.shopcartData
        },
        getShopcartTotal(state) {
            return Object.values(state.shopcartData).reduce((p, c) => p + c, 0)
        },
        getShopcartIDs(state) {
            return Object.keys(state.shopcartData).join(",")
        }
    },
    mutations: {
        upShopcartData(state, params) {
            Vue.set(state.shopcartData, params.id, params.val)
            localStorage.setItem('shopcartData', JSON.stringify(state.shopcartData));
        },
        addShopcartData(state, params) {
            if (state.shopcartData[params.id]) {
                state.shopcartData[params.id] += params.val
            } else {
                Vue.set(state.shopcartData, params.id, params.val)
            }
            localStorage.setItem('shopcartData', JSON.stringify(state.shopcartData));
        },
        delShopcartData(state, params) {
            Vue.delete(state.shopcartData, params.id)
            localStorage.setItem('shopcartData', JSON.stringify(state.shopcartData));
        }
    }
}
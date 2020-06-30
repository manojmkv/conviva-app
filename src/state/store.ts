import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedObject: null
    },

    getters: {
        // Here we will create a getter
    },

    mutations: {
        setSelectedEmployee(state, selectedObject) {
            state.selectedObject = selectedObject;
        }
    },

    actions: {
        setSelectedEmployee(context, employee) {
            context.commit("setEmployee", employee)
        }
    }
})
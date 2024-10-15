import { createStore} from "vuex";

const userStore = createStore({

    state(){
        return {

            user:null
        };
    },

    mutations:{

        updateUser(state,newState){

            state.user = newState
        }
    },

    actions:{

        updateUser({commit}){

            commit("updateUser")
        }
    },

    getters:{

        isLogged(state){

            return state.user !== null
        }
    }
})

export default userStore;
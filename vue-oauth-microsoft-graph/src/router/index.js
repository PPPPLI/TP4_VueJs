import HomePageComponent from "../components/HomePageComponent.vue";
import ConversationIndexPage from "../components/conversationIndexPage.vue";
import { createRouter,createWebHistory } from "vue-router";
import store from "../store/index.js"

const routes = [

    {
        path:"/",
        name:"Home",
        component: HomePageComponent
    },

    {

        path:"/conversation",
        name:"Conversation",
        component: ConversationIndexPage,
        beforeEnter: (to, from, next) =>{

            const isLogged = store.getters.isLogged()

            if(!isLogged){

                next({name:'Home'});
            }else{

                next();
            }
        }
    }
]

const router = createRouter({

    history: createWebHistory(),
    routes
})

export default router
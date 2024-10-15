import HomePageComponent from "../components/HomePageComponent.vue";
import ConversationIndexPage from "../components/conversationIndexPage.vue";
import { createRouter,createWebHistory } from "vue-router";

const routes = [

    {
        path:"/",
        name:"Home",
        component: HomePageComponent
    },

    {

        path:"/conversation",
        name:"Conversation",
        component: ConversationIndexPage
    }
]

const router = createRouter({

    history: createWebHistory(),
    routes
})

export default router
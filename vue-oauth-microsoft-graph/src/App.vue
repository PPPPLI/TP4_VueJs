<template>

        <header-component @userShare="getUserInfo"></header-component>
    
        <div id="title">{{ user }}</div>

        <div><HomePageComponent color="primary" :disabled=isPending @click.stop.prevent=handlerClick>
            Disable and animated for {{counter+1}} seconds if clicked
        </HomePageComponent></div>

        <div><HomePageComponent color="primary">
            BaseButton with custom margin
        </HomePageComponent></div>
        
        <div><HomePageComponent  color="primary" disabled>
            BaseButton disabled
        </HomePageComponent>    </div>

        <div><HomePageComponent  color="warn">
            BaseButton with color propos
        </HomePageComponent></div>

        <div><HomePageComponent  color="danger">
            BaseButton with color propos
        </HomePageComponent></div>
</template>

<script>
import headerComponent from './components/headerComponent.vue';
import HomePageComponent from './components/HomePageComponent.vue';


export default {
  name: 'App',
  components: {
    HomePageComponent,
    headerComponent
  },

  data(){

    return {

        isPending:false,
        counter : 1,
        user:"Please login"
    }
  },

  methods:{

    handlerClick(){

        this.isPending = true

        const asyncPromise = new Promise((resolve)=>{

            setTimeout(() => {

                resolve();
                
            }, 2000 * this.counter++);
        })

        asyncPromise.finally(()=> this.isPending = false)
    },

    getUserInfo(data){

        this.user = data.name;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#title{

    font-weight: 600;
    font-size: large;
}

base-header{

    background-color: rgb(93, 199, 142);
    min-width: 100%;
    min-height: 10%;
}


</style>

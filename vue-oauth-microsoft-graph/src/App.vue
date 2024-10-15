<template>

        <header-component></header-component>
    
        <div id="title">{{user}}</div>

        <router-view color="primary" :isDisabled=isPending @click.stop.prevent=handlerClick :counter="counter"
        
        ></router-view>

</template>

<script>
import headerComponent from './components/headerComponent.vue';
import { mapMutations, mapState } from 'vuex';


export default {
  name: 'App',
  components: {
    headerComponent
  },

  data(){

    return {

        isPending:false,
        counter : 1,
        //user:"Please login"
    }
  },

  computed:{

    ...mapState(['user'])
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

    ...mapMutations(["updateUser"]),

    /*getUserInfo(data){

        this.updateUser(data)
    }*/
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

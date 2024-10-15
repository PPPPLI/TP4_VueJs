<template>

    <div id="btnDiv">
        <button class="greenBtn" :disabled="isDisabled">
            Disable and animated for {{ counter }} seconds if clicked
        </button>
        <button class="orangeBtn">
            Danger
        </button>
        <button class="greenBtn" :disabled="isDisabled">
            Disable and animated for {{ counter }} seconds if clicked
        </button>
    </div>  
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  props: {

    color: {
        type: String,
        Required: true,
    },
    counter: {

        type: Number,
        Required: true
    },
    isDisabled:{
        type: Boolean,
        Required: true
    }
  },

  computed:{

    buttonColor(){

        return {

            "greenBtn":this.color == "primary",
            "orangeBtn": this.color == "warn",
            "redBtn": this.color == "danger"
        }
    }
  }
}
</script>

<style>

.greenBtn{

    background-color: rgb(93, 199, 142);
}

.orangeBtn{

    background-color: orange;
}

.redBtn{

    background-color: red;
}

button{

    margin: 10px 10px 0 0;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    padding: 5px;
    transition: 0.5s all;
    min-width: 50vh;
}

button:hover{

    background-color: white
}

button:disabled{

    cursor: no-drop;
}

#btnDiv{

    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>

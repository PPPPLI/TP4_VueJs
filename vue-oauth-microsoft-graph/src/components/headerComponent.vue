<template>
    <header>

        <button id="homeBtn"><img src="../assets/home-icon-vector.png" height="30px" alt="homeIcon"><span id="homeSpan">Home</span></button>
        <button @click="signIn" :disabled="isActivated">
            <span>Sign in with MicroSoft</span>
        </button>
        
    </header>

</template>

<script>
import {signInAndGetUser} from '@/lib/microsoftGraph';

export default{

    data(){

        return {
            user:null,
            isActivated:false
        };
    },

    methods: {

        async signIn() {

            try {
                this.isActivated = !this.isActivated
                const account = await signInAndGetUser();
                this.user = account;
                
                this.$emit("userShare",this.user)
            } catch (error) {
                console.error('Sign-in failed:', error);
            }

            this.isActivated = !this.isActivated;
        },
    }
}

</script>

<style scoped>

    header{
        min-width: calc(100%-50px);
        min-height: 100px;
        background-color: rgb(93, 199, 142);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 30px ;
    }

    button{

        min-width: 50px;
        min-height: 30px;
        background-color: rgb(110, 199, 153);
        border-radius: 5px;
        cursor: pointer;
        font-size: large;
        color: rgb(255, 255, 255);
        border: rgb(221, 221, 221) 1px solid;
        font-weight: 600;
        transition: 0.5s all;
        align-content: center;
        padding: 10px;
    }

    button:hover{

        background-color: rgb(94, 172, 132);
    }


    #homeBtn{

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #homeSpan{

        padding-top: 3px;
    }
</style>

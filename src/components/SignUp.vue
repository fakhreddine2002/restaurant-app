<template>
    <div class="container">
        <img class="logo" src="../assets/the-red-cafe.jpg" alt="">
        <h1>Sign Upggg</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="signUp">Sign Up</button>
           
        </div>
        <p><router-link id="login" to="/Login" >login</router-link></p>
    </div>

</template>


<script>
import axios from 'axios';
export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/user",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.warn(result)
            if(result.status==201){
                alert("sign-up done :)")
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            } 
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>

</style>





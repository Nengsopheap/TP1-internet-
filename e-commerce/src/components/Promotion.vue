
<template>
    <div class="promotion" :style="{ backgroundColor: bgColor }" >      
        <div class="box3">
            <p >{{ title }}</p>
            <Button text="Shop now" :color="bgB" bgColor="#fff" />      
        </div>
        <div class="box4">
            <img :src="image" />
        </div>
        
    </div>
</template>
<script>
import Button from './Button.vue';
    export default{
        name: "Promotion",
        props: ["title","bgColor","image", "bgB"],
        components:{
            Button,
        }
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
    .box3{
        width: 300px;
        color: #253D4E;
        font-family: Quicksand; 
        font-size: 30px; 
        position: absolute; 
        top: 60px;
        left: 48px ;
    }
    .promotion{
        position: relative;
        border-radius: 10px;
        height: 300px;
        width: 550px;
        border-radius: 10px;    
    }
    .box4{
       display: flex;
       justify-content: end;
       margin-left: 410px;
       margin-top: 50px;
    }
</style>
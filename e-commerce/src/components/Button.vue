<template>
    <!-- <button class="Button">Shop now <i class="uil uil-arrow-right "></i> </button> -->
    <button :style="{ backgroundColor: color, color: bgColor }" class="button">
    {{ text }}
    <i class="uil uil-arrow-right"></i>
  </button>
</template>
<script>
    export default{
        name: "Button",
        props: ["text","bgColor","color","icon"],
    }

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
.button{
 
 
    width: 130px;
    height: 40px;
    border-radius: 3px;
    font-family: "Quicksand", sans-serif;
}
.i{
    font-size: 30px;
}
</style>
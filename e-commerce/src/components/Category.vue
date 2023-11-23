

<template>
        <div class="color" :style="{ backgroundColor: bgColor }" >
        <img :src="image" />
        <p class="name">{{ name }}</p>
        <p class="item">{{ item }} items</p>
        </div>
</template>
<script>
export default {
  name: "Category",
  props: ["image", "bgColor", "name", "item", "group"],
};
</script>
<style scoped>

    .name{   

        color: #253D4E;
        font-family: Quicksand;
    }
    .item{
        color: #B6B6B6; 
    }
    .color{
        height: 177px;
        width: 150px;
        margin-top: 200px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
    }

</style>
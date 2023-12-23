
<template>
  
  <div>
    <RouterView/>
  </div>
</template>
<script>
import {RouterView} from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
 
},
  // setup() {
  //   const store = useStore();
  //   return { store };
  // },
};
</script>


<template>
  <div class="Box">
    <div class="Popular1">
    <div class="Popular">Feature Category</div>
    <div class="All">
    <div class="Popular">All</div>
    <div class="Popular">Milke & Dairies</div>
    <div class="Popular">Coffees & Teas</div>
    <div class="Popular">Meats</div>
    <div class="Popular">Vegetable</div>
    <div class="Popular">Fruite</div>
    </div>
    </div>
    <div class="box1">      
      <Category v-for="category in store.categories" :key="category.id" :image="category.image" :bgColor="category.color"
        :name="category.name" :group="category.group" :item="category.item" />
    </div>
    <div class="box2">
      <Promotion v-for="promotion in store.promotions" :key="promotion.id" :image="promotion.image"
        :bgColor="promotion.color" :title="promotion.title" :bgB="promotion.bg"/>
    </div>
    <div class="Popular1">
    <div class="Popular">Popular products</div>
    <div class="All">
    <div class="Popular">All</div>
    <div class="Popular">Milke & Dairies</div>
    <div class="Popular">Coffees & Teas</div>
    <div class="Popular">Meats</div>
    <div class="Popular">Vegetable</div>
    <div class="Popular">Fruite</div>
    </div>
    </div>
    <div class="product1">
      <Product v-for="product in store.products" 
      :key="product.id"
      :image="product.image" 
      :bgcolor="product.color" 
      :title="product.title" 
      :number="product.number"
      :title1="product.title1"
      :image1="product.image1"
      :total="product.total"
      :total1="product.total1"
      :order:="product.order"
      :bgB="product.bg"/>
    </div>
    
    <div class="product2">
      <Product1 v-for="product1 in store.products1" 
      :key="product1.id"
      :image="product1.image"
      :bgcolor="product1.color" 
      :title="product1.title" 
      :number="product1.number"
      :title1="product1.title1"
      :image1="product1.image1"
      :total="product1.total"
      :total1="product1.total1"
      :order:="product1.order"
      :image2="product1.imagebutton"/>
    </div>
  </div>
</template>
<script>
import Product1 from './components/Product1.vue';
import Product from './components/Product.vue';
import Button from './components/Button.vue';
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import { useStore } from "./stores/store";
export default {
  name: "App",
  components: {
    Button,
    Category,
    Promotion,
    Product,
    Product1,
 
},
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
<style>
.All{
  
  width: 800px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-left: 700px;
  justify-content: space-between;
}

.Popular1{
  display: flex;
  flex-direction: row;

  width: 1730px;
  height: 40px;
  margin-left: 35px;
  background-color: rgb(255, 255, 255);
}
.Popular{
  font-size: 180%;
  color: #253D4E;
  font-family: Quicksand ;
 
  
}
.boxtext{
  width: 30px;
  height: 30px;
  background-color: rgb(255, 253, 253);
}
.Box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1812px;
  margin-top: -200px;

}

.box1 {
  display: flex;
  gap: 26px;
  margin-top: -170px;
  margin-left: 33px;
  border: 1px;

}

.box2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: px;
  margin-left: 33px;
  border: 1px;
  margin-top: 20px;

}
.product1{
  display: flex;
  gap: 60px;
  margin-top: 30px;
  margin-left: 33px;
  border: 1px;
  
}
.product2{
  display: flex;
  gap: 60px;
  margin-top: 30px;
  margin-left: 33px;
  border: 1px;
}
body{
  background-color: white;
}
</style>
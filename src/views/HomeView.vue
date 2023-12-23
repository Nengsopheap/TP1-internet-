
<template>
    <div class="img">
      <img src="../assets/images/icon.png">
      <div class="Melon">
      <h1 class="Mel">Melon</h1>
      <div class="Mart">Mart & Crocery</div>
    </div>
      <div class="Searchbox">
      <div class="Mat"> All Category</div>
      <img src="../assets/images/smallicon.png" class="smallicon">
      <div class="item"> | Search for Item</div>
      <img src="../assets/images/iconsearch.png" class="iconsearch">
    </div>
    <img src="../assets/images/icons.png" class="icons">
  </div>
  <!-- hello -->
  <div class="line"></div>
  <div class="Container">
      <div class="Browse">
          <div>
            Brows All Category
            <img src="../assets/images/smallicon.png" class="iconA">
          </div>
      </div>
      <div class="Containerbox">
        <div>
          <img src="../assets/images/flame.png" class="IconC">
          
          <router-link to="/menu">Hot Deals</router-link>
          
        </div>
        <div>Home</div>
        <div>
          Food
          <img src="../assets/images/smallicon.png" class="x">
        </div>
        <div>Vegetable</div>
        <div>Drink
          <img src="../assets/images/smallicon.png" class="x">
        </div>
        <div>Cookies</div>
        <div>Meat & Seafood
          <img src="../assets/images/smallicon.png" class="x">
        </div>
        <div>Bakgery</div>
      </div>
      <div>
        <img src="../assets/images/Hotline.png" class="IconB">
      </div>
  </div>
  <div class="line"></div>
  <!-- Hello -->

    <div class="Box">
      <div class="container">
      <div class="box_in_pic">
          Your eamil address
      </div>
      <div class="Button_pic">
        Subcribe
      </div>
    </div>
      <h1 class="Textdeal">
      Don't miss amazing grocery deals
      </h1>
      <div class="Sign">
        Sign up for the daily newsletter
      </div>
  <div>
    <img src="../assets/images/figure.png" class="figure" >

  </div>
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
  import Product1 from '../components/Product1.vue';
  import Product from '../components/Product.vue';
  import Button from '../components/Button.vue';
  import Category from '../components/Category.vue';
  import menu from '../components/menu.vue';
  import Promotion from '../components/Promotion.vue';
  import { useStore } from "../stores/store";
  export default {
    name: "HomeView",
    components: {
      Button,
      Category,
      Promotion,
      Product,
      Product1,
      menu,
   
  },
    setup() {
      const store = useStore();
      return { store };
    },
    // computed: {
    //   ...mapState(["menu"]),
    // },
  };
  </script>
  <style>

  .IconC{
   
    height: 15px;
    width: 15px;
    
    
  }
 
  .IconB{
    margin-left: 170%;
  }
  .Containerbox{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    height: 40px;
    /* background-color: #3BB77E; */
    margin-left: 120px;
    color: black;
    font-family: Quicksand;
    font-size: 16px;
  }
  .Browse{
    width: 200px;
    height: 30px;
    color: white;
    background-color: #3BB77E;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    
  }
  .Container{
    width: 1730px;
    height: 50px;

    display: flex;
    align-items: center;
    margin-top: 2px;
  }
  .smallicon{
    margin-left: 10px;
    margin-top: 5px;
  }
  .iconsearch{
    margin-left: 400px;
  }
  .icons{
    width: 400px;
    height: 27px;
    margin-top: 15px;
    margin-left: 330px;
  }
  .Melon{
    margin-top: -20px;
    margin-left: 10px;
  }
  .Mat{
    color: black;
    margin-left: 10px;
  }
  .Button_pic{
    margin-left: -20px;
    width: 100px;
    background-color: #3BB77E;
    border-radius: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_in_pic{
    width: 200px;
    height: 35px;
    color: black;
    font-size: x-small;
    border: 2px solid white;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container{
    /* width: 400px;
    height: 50px;
    background-color: black; */
    display: flex;
    flex-direction: row;
    position: absolute;
    margin-top: 20%;
    margin-left: 200px;

  }
  .figure{
    width: 1730px;
    height: 400px;
    margin-top: 20px;

  }
  .Sign{
    width: 500px;
    height: 100px;
    color: black;
    position: absolute;
    margin-top: 16%;
    margin-left: 200px;
    font-size: 120%;
    
   
  }
  .Textdeal{
    width: 500px;
    height: 100px;
    color: black;
    position: absolute;
    margin-top: 90px;
    margin-left: 200px;
    font-size: 300%;
    font-family: Quicksand;
    
   
  }
  .item{
    margin-left: 30px;
    color: #b2b4b6;
  }
  .Searchbox{
    display: flex;
    flex-direction: row;
    
    align-items: center;
    margin-left: 100px;
    margin-top: 10px;
    height: 40px;
    width: 700px;
    border-radius: 5px;
    border: 2px solid rgb(19, 170, 19);
  }
  .Mart{
    margin-top: -10px;
    color:black
 
  }
  .img{
    height: auto;
    width: 1730px;
    display: flex;
    /* justify-content: space-between; */
    flex-direction: row;
    margin-top: 20px;
    
   
    
  }
  .Mel{
    font-size: 50px;
    margin-top: 5px;
    color: rgb(25, 223, 7);
    font-family: Quicksand;
    
  }
  .All{
    
    width: 800px;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-left: 670px;
    justify-content: space-between;
  }
  
  .Popular1{
    display: flex;
    flex-direction: row;
    width: 1730px;
    height: 40px;
    margin-left: 5px;
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
    width: auto;
    height: auto;
    /* margin-top: -200px; */
  
  }
  
  .box1 {
    display: flex;
    gap: 23px;
    margin-top: -170px;
    /* margin-left: 30px; */
    border: 1px;
  
  }
  
  .box2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: px;
    /* margin-left: 33px; */
    border: 1px;
    margin-top: 20px;
  
  }
  .product1{
    display: flex;
    gap: 53px;
    margin-top: 30px;
    /* margin-left: 33px; */
    border: 1px;
    
  }
  .product2{
    display: flex;
    gap: 53px;
    margin-top: 30px;
    /* margin-left: 33px; */
    border: 1px;
  }
  body{
    background-color: white;
    margin-left: -50px;
    
  }
  </style>
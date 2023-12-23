<template>
<div class="Menu">
    <div class="img1">
      <img src="../assets/images/icon.png">
    <div class="Melon">
            <h1 class="Mel">Melon</h1>
        <div class="Mart">Mart & Crocery</div>
    </div>
      <div class="Searchbox1">
            <div class="Mat1"> All Category</div>
            <img src="../assets/images/smallicon.png" class="smallicon">
            <div class="item"> | Search for Item</div>
            <img src="../assets/images/iconsearch.png" class="iconsearch">
            </div>
            <img src="../assets/images/icons.png" class="icons1">
        </div>
    </div>

    <div class="line"></div>
    <div class="Container1">
      <div class="Browse">
          <div>
            Brows All Category
            <img src="../assets/images/smallicon.png" class="iconA">
          </div>
      </div>
      <div class="Containerbox">
        <div>
          <img src="../assets/images/flame.png" class="IconC">
          Hot Deal
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
        <img src="../assets/images/Hotline.png" class="IconB1">
      </div>
  </div>
  <div class="line"></div>
  <div>
    <div class="namelogo">
    <!-- <img src="../assets/images/pic.png" class="background"> -->
        <h3 class="Coke">
            Coke & Milk
        </h3>
        <img src="../assets/images/Text.png" alt="">
    </div>
    <img src="../assets/images/pic.png" class="background">
  </div>
</template>
<style>
.Coke{
    font-family: Quicksand;
    line-height: 56px;
    font-size: 48px;
}
.namelogo{
    width: 300px;
    height: 50px;
    /* background-color: aqua; */
    position: absolute;
    margin-top: 100px;
    color: black;
    margin-left: 100px;
}
.background{
    margin-left: -5%;
    margin-top: 20px;
    border-radius: 5px;
    width: 100%;
}
.line{
    width: auto;
    border: 1px solid rgb(186, 182, 182);
    margin-left: -10%;
    margin-top: 10px;
}
 .IconB1{
    margin-left: 50%;
  }
  .Container1{
    width: 1330px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 2px;
    /* background-color: blue; */
    margin-left: -90px;
  }
.icons1{
    width: 400px;
    height: 27px;
    margin-top: 15px;
    margin-left: 30px;
  }
 .Mat1{
    color: rgb(0, 0, 0);
    margin-left: 10px;
  }
.Searchbox1{
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
.img1{
    height: auto;
    width: 1500px;
    display: flex;
    flex-direction: row;
    /* background-color: aqua; */
    margin-left: -100px;
    margin-top: -20%;
}
.Menu{
    
    color: black;
}
</style>
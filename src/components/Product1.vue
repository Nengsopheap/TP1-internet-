<template>
    <div class="product3" :style="{ backgroundColor: bgColor }" >
        <div class="number">
            <p>{{ number }}%</p>
        </div>
        <div class="mango">
            <router-link to="/productdetail"><img :src="image"/></router-link>
            <!-- <img :src="image"/> -->
        </div>             
            <p class="Hodo">{{ title }}</p>                      
            <p class="Seeds">{{ title1 }}</p>           
        <div class="star">
            <img :src="image1"/>
            </div>   
            <div class="gram">500gram</div>

            <div class="totale">               
            <p class="cost">{{ total }}.51$</p>                              
            <p class="cost1">{{ total1 }}.00$</p>               
            <p class="order">{{ order }}
                <div class="buy">Add +</div>
            </p>
                          
        </div>  
</div>
</template>
<script>
export default{
    name: "Product1",
    props: ["image","image1","color","bgcolor","title","number","title1","total","total1","order","imagebutton"],
};
</script>
<style scoped>
   .buy{
        color: #3BB77E;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -3px;  
        
    }
.order{
    color: black;
    width: 67px ;
    height: 29px;
    border: 0.5px solid #3BB77E;
    margin-left: 120px;
    border-radius: 4px;
    background-color:#DEF9EC;
    
}
.cost{
    color: #3BB77E;
    font-family: Quicksand; 
    font-size: 20px; 
    
}
.cost1{
    margin-top: 11px;
    margin-left: 10px;
    color: #7E7E7E;
    font-size: 10px;
}
.totale{
    
    width: 260px;
    height: 32px;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    
}
.gram{
    font-family: Lato;
    margin-left: 19px;
    color: #7E7E7E;
}
.star{
    margin-left: 20px;
}
.Seeds{
    margin-left: 19px;
    line-height: 18px;
    font-family:Quicksand ;
    color:#253D4E;
    size: 12px;
    /* font-weight: 700; */
}
.Hodo{
    margin-left: 19px;
    font-family: Lato;
    size: 12px;
    line-height: 18px;
    color: #7E7E7E;
    margin-top: 35px;

}
.number{
    
    border-radius: 0px 30px 30px 0px;
    display: flex;
    justify-content: center;
    width: 58px;
    height: 32px;
    margin-top: 20px;
    background-color:#3BB77E;
    color: #ffff; 
    
    

}
.product3{ 
   
    border-radius: 10px;
    height: 402px;
    width: 298px;
    border: 1px solid #BCE3C9;
}
.mango{
    height: 144.93px;
    width: 201.89px;
    display: flex;
    justify-content: end;
    margin-top: 10px;
    margin-left: 35px;

}
</style>

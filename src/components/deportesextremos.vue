<template>
  

    <div class="container">
        <div class="left">
            <img src="https://phantom-elmundo.unidadeditorial.es/19bc5355e99d2d0758c97c24405dac33/resize/1200/f/jpg/assets/multimedia/imagenes/2022/03/11/16469896172304.jpg"
                alt="Suite Room">
        </div>
        <div class="right">
            <div class="title">Suite Room</div>
            <div class="icons">
                <span class="icon"><i class="fas fa-snowflake"></i></span>
                <span class="icon"><i class="fas fa-wifi"></i></span>
                <span class="icon"><i class="fas fa-shower"></i></span>
                <span class="icon"><i class="fas fa-phone"></i></span>
                <span class="icon"><i class="fas fa-bath"></i></span>
                <span class="icon"><i class="fas fa-tshirt"></i></span>
                <span class="icon"><i class="fas fa-ellipsis-h"></i></span>
            </div>
            <div class="price">Desde 424.000 $COP</div>
            <button class="button">Más infos</button>
        </div>
    </div>
</template>

<style>


.container {
    display: flex;
    background-color: transparent;
    width: 80%;
    height: 60%;
    align-items: center;
    justify-content: center;
  position: absolute;
  left: 10%;
  border: 5px solid #333; 
}

.left {
    width: 70%;
    position: relative;
}

.right {
    width: 30%;
 
    color: white;
    text-align: center;
    padding: 20px;
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
}

.icon {
    display: flex;
    
    margin: 0 10px;
}

.price {
    font-size: 20px;
    margin-bottom: 10px;
}

.button {
    background-color: #f4f4f4;
    color: #008000;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

img {
    width: 80%;
    height: auto;
    /* margin-left: 10%; */
}
</style>
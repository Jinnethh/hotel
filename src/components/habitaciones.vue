<template>
    <div class="mural">
        <div class="image">
            <img src="https://static.wixstatic.com/media/ffe277_488792a629e04eddbfe4feece3d7f13c~mv2.jpeg/v1/fill/w_1200,h_406,al_c,q_85,enc_auto/ffe277_488792a629e04eddbfe4feece3d7f13c~mv2.jpeg" alt="Imagen de ejemplo">
           <h2>NUESTRAS HABITACIONES</h2>
        </div>
       
    </div>

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

*{
    margin: 0;
    padding: 0%;
}
@font-face {
    font-family: "Yasashii W01 Bold";
    src: url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.eot");
    src: url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.svg#Yasashii W01 Bold")format("svg");
}


/* .cards{
position: absolute;
top: 80%;
display: flex;
flex-direction: column;
height: 150%;
left: 25%;
}

.cuadro{
    display: flex;
    width: 250%;
    height: 40%;

    border: 5px solid #333; 
    align-items: center;
} */
.mural {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    z-index: -1;
    align-items: center;
 /* position: absolute; */
    /* Colocamos el z-index en -1 para asegurar que esté detrás del contenido */
}

/* Estilo para la imagen de fondo */
.image img{
    width: 100%;
    height: auto;
    object-fit: cover;
    /* Ajusta la imagen para que cubra todo el contenedor */
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(40%);
}

.mural h2 {
    z-index: 5;
    position: absolute;
    font-family: "Yasashii W01 Bold";
    text-align: center;
    /* font-size: 25px; */
    font-size: 120px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
    color: white;

}
.container {
    display: flex;
    background-color: transparent;
    width: 80%;
    height: 60%;
    align-items: center;
    justify-content: center;
  position: absolute;
  left: 10%;
  top: 80%;
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
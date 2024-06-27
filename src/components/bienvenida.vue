<template>
   <div class="con">
    <div class="image-section">
        <img src="https://images.ecestaticos.com/-znn8nLSacjksMxwSsIk9moXomA=/0x0:1639x827/1338x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F21a%2F98f%2Ffe7%2F21a98ffe722e93e62773b10cc1df4688.jpg">
    </div>
    <div class="text-section">
        <h1>Bienvenido al Hotel  Crystal House</h1>
        <p> la comodidad y la elegancia se unen para brindarte una experiencia inolvidable. Descubre nuestras amplias habitaciones, exquisita gastronomía y servicios de primera clase. ¡Tu escapada perfecta comienza aquí!"</p>
    </div>
</div>

<div class="destacados">
    <h2>Destacados</h2>
    <div class="highlight-item">
      <img src="./piscina.png" alt="">
        <h4>Piscinas</h4>
       <hr>
    </div>

    <div class="highlight-item">
      <img src="./bandeja.png" alt="">
        <h4>Restaurantes</h4>
        <hr>
    </div>

    <div class="highlight-item">
      <img src="./spa.png" alt="">
        <h4>Spas</h4>
        <hr>
    </div>

    <div class="highlight-item">
      <img src="./relajacion.png" alt="">
        <h4>Zona de Relajación</h4>
        <hr>
      </div>    
</div>

<div class="collage">
  <div class="piscina">
    <img src="https://greenarea.es/wp-content/uploads/2017/11/restaurante-jardin-vertical-hotel-llaut-palace-greenarea-decoracion.jpg" alt="Piscina 1">
  </div>
  <div class="piscina">
    <img src="https://coolpool.es/wp-content/uploads/2022/09/restaurantes-con-piscinas-purobeach.jpg" alt="Piscina 2">
  </div>
  <div class="piscina">
    <img src="https://images.fresha.com/lead-images/placeholders/spa-63.jpg?class=width-small" alt="Piscina 3">
  </div>
  <div class="piscina">
    <img src="https://image-tc.galaxy.tf/wijpeg-zvwqlk8yfkdsc0e9es5gqusd/pilar-50-min.jpg?width=1920" alt="Piscina 4">
  </div>
  <div class="piscina">
    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/106148685.jpg?k=64b563723c66093174c356d13a05d647b80f901f5ef34c6c8190646f6cb4735f&o=&hp=1" alt="Piscina 5">
  </div>
  <div class="piscina">
    <img src="https://revistadiners.com.co/wp-content/uploads/2017/07/portada_restaurantes_hotel_1200x800.jpg" alt="Piscina 6">
  </div>
</div>


</template>



<style >

@font-face {
    font-family: "Yasashii W01 Bold";
    src: url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.eot");
    src: url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/84ed805b799a7034568767668b7c9316.svg#Yasashii W01 Bold")format("svg");
}
@font-face {

    font-family: "VIP W01 Regular";
    src: url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.eot");
    src: url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.svg#VIP W01 Regular")format("svg");
}

@font-face {
  font-family: "Apple SD Gothic Neo Bold";
  src: url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.eot");
  src: url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.svg#Apple SD Gothic Neo Bold")format("svg");
}

.collage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 5%;

  }

  .piscina {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }

  .piscina img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }

  .piscina img:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  .highlight-item {
    margin-bottom: 10px;
  }

  .highlight-item h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .highlight-item hr {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 0;
    border-top: 1px solid #ccc;
  }
  .highlight-item img {
    width: 50px; /* Ajusta el tamaño del icono según sea necesario */
    height: auto;
    margin-bottom: 10px; /* Espacio opcional entre el icono y el texto */
  }

.con {
    position: relative;
   
    /* height: 60vh; */
    background: white;
    border-radius: 10px;
    overflow: hidden;
    /* box-shadow: 0 4px 8px rgba(0,0,0,0.1); */
    display: flex;
}

.image-section {
    flex: 9;  /* Adjust this value to make the image section larger */
    position: relative;
}

.image-section img {
    width: 100%;
    height: auto;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
}

.text-section {
 /* Adjust this value to make the text section smaller */
 /* padding: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 20%;

   margin-top: 13%;
    
}

.text-section h1 {
    font-size: 2em;
    margin: 0;
    color: #000;
    margin-left: -10%;
  
    font-family: "Apple SD Gothic Neo Bold";
}

.text-section p {
    font-size: 1.2em;
    color: #000;
    margin-left: -10%;
  
}

#letra{
    position: absolute;
    margin-left: 20%;
    z-index: 50;
}




* {
  margin: 0;
  padding: 0;

}


.destacados {

  /* background-color: aqua; */
  justify-content: center;
  text-align: center;
  font-family: "Yasashii W01 Bold";
/* position: absolute; */
height: auto;

/* Ancho fijo para la sección de destacados */

 /* Ancho del bloque de destacados */
   
/*   
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
 

}
body{
  background-color: beige;
}
hr{
  width: 50%;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
}
.destacados h2{
  font-size: 2.5rem;
  margin-bottom: 10px;
  line-height: 2.5;
}
.destacados h4{
  font-family: "Apple SD Gothic Neo Bold";
  line-height: 1.5;
}

</style>

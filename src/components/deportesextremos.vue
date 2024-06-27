<template>
    <div class="mura">
        <div class="image2">
            <img src="https://lh6.googleusercontent.com/-FQsVzj51pZYzJf7cDSTdnNxP16pzoSAJHJ-OD_mw6_w6XBdZRpunxB_g5_brqU4SlzWzOst3Som4jPg9WZkklXOFo0vrC5cHGxd1Ji_Jr8RJOQy=w1280" alt="Imagen de ejemplo">
            <h2>Xtremo</h2>
        </div>
    </div>
 
    <div v-for="(activity, index) in activities" :key="index" class="grande">
      <div class="text">
        <h1>{{ activity.ho }}</h1>
        <h3>{{ activity.title }}</h3>
        <p>{{ activity.description }}</p>
      </div>
      <div class="carousel">
        <button class="carousel-button prev" @click="prevImage(index)" :disabled="activity.currentIndex === 0">&#10094;</button>
        <div class="carousel-images" :style="{ transform: 'translateX(' + activity.offset + '%)' }">
          <img v-for="(image, imgIndex) in activity.images" :src="image" :alt="'Imagen ' + (imgIndex + 1)" :key="imgIndex">
        </div>
        <button class="carousel-button next" @click="nextImage(index)" :disabled="activity.currentIndex === activity.images.length - 1">&#10095;</button>
      </div>
    </div>
  
</template>

<style>
.mura {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.image2 img {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(40%);
}

.image2 h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Yasashii W01 Bold";
    font-size: 6em;
    color: white;
    z-index: 1;
}

.grande {
    text-align: center;
    padding: 20px;
}

.text h1{
    font-size: 2.5em;
    margin-bottom: 10px;
    font-family: "Apple SD Gothic Neo Bold";
}

.text h3 {
    font-size: 1.8em;
    margin-bottom: 10px;
    font-family: "Apple SD Gothic Neo Bold";
  
}

.text p {
    font-size: 1.2em;
    margin-bottom: 20px;
    
}

.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 80%;
    height: 300px;
    margin: 0 auto;
    position: relative;
}

.carousel-images {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-images img {
    width: 355px;
    height: 100%;
    object-fit: cover;
    margin: 0 10px;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
}

.carousel-button.prev {
    left: 10px;
}

.carousel-button.next {
    right: 10px;
}

.carousel-button:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
}
</style>

<script>
export default {
  data() {
    return {
      activities: [
     
        {
          ho:'¿Qué puedes hacer en Crystal Xtrem?',
          title: 'Rafting',
          description: 'El Rafting o canotaje es una disciplina deportiva con un alto contenido de exigencia física, el desarrollo de esta actividad es saliendo en un balsa inflable certificada que nos permite descender río abajo pasando por diferentes rápidos, disfrutando de un paseo sin igual.',
          images: [
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/Diseno-sin-titulo-1-min-1-p36khpn3z3j39h4g0tecnaz4k6mfq47b119k75uufq.png',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/pagina4-p36kj1kvnncppl6t8w4bogvmuu25mohm7mjbo9vrme.jpg',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/raftingf3-scaled-1-p36kdejqnfms1tdq6gcwpw42jluvg23lfpmg0i8sye.jpg',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/canotaje4-p36kfr57qiul2pyuggxbyark0a9wotffrcc57erdee.jpg',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/Diseno-sin-titulo-1-min-1-p36khpn3z3j39h4g0tecnaz4k6mfq47b119k75uufq.png'
          ],
          currentIndex: 0,
          offset: 0
        },
        {
          title: 'Canopy',
          description: 'Consiste de una polea suspendida por cables montados con un grado de inclinación. con el fin de deslizarse desde la parte superior hasta el fondo mediante un cable a altas velocidades, en esta actividad podrás vivir la verdadera sensación de volar como un ave, disfruta, siente y vive. ',
          images: [
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/canopy4-p36lm2th8cm6xe3q7bqsbtpyj9z8l1udd58r9gzsbc.jpg',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/canopy3-p36ln5cv0k2y5ejqyaeho1zuw2pacn3d6fznxten88.jpg',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/canopy-p36ljgtm8x1iodw9g743ehfv4quj7bh7o8079sv5lk.png',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/canopy2-p36lo297nrbzfr7ym6mflbozok74u1pyyytnqi1v6g.jpg',
            'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/canopy4-p36lm2th8cm6xe3q7bqsbtpyj9z8l1udd58r9gzsbc.jpg'
          ],
          currentIndex: 0,
          offset: 0
        },
        {
          title: 'Torrentismo',
          description: 'Por su variedad topográfica, Útica Colombia es el sitio ideal para la práctica del torrentismo ya que cuenta con numerosas cascadas de agua cristalina y diferentes pozos donde los turistas se podrán bañar. Los amantes de este deporte descenderán con cuerdas, alturas entre 20 y 25 metros, donde se combinan el equilibrio y la agilidad, con una gran dosis de adrenalina',
          images: [
            ' https://ciudadperdidafalan.co/wp-content/uploads/2020/06/torrentismo-duo_1-1024x691.png',
               'https://www.bamah.co/wp-content/uploads/2021/11/f277cedd0078598b1cf69e788705f0bd-945x650.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBeuG9eREPrAj7h1a_-PoKdcql8qsdpVarg&s',
               'https://www.dosisverde.com/cmsd/wp-content/uploads/2022/07/IMG_0224-900x600.jpg',
             'https://www.dosisverde.com/cmsd/wp-content/uploads/2022/07/IMG_0250-768x512.jpg'
          ],
          currentIndex: 0,
          offset: 0
        },
        {
          title: 'Cabalgata',
          description: 'Si quieres disfrutar de una aventura diferente, una cabalgata ecológica guiada es lo indicado para ti. Cruzarás a caballo por los más hermosos paisajes de Útica Cundinamarca, en donde llenarás tus pulmones de aire puro.',
          images: [
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/cabalgataextrema2-p39hpxsxed5l4o4kbuy2okdj4n90qll9nc0ism04rc.jpg',
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/cabalgataextrema4-p39i6ex36tpimm714hbnvwpdys1mnlzw8vnwm7kpp4.jpg',
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/cabalgataextrema1-p39hqvn48efwqmreu9kn6bu4iim8fpblrzi02klyjc.jpg',
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/cabalgataextrema5-p39i8v9x192gxymosjileaepszy4r5qnx0zjq7xpg8.jpg',
                'https://whattodoincali.com/wp-content/uploads/2017/06/horseback-riding-in-colombia.jpg'
          ],
          currentIndex: 0,
          offset: 0
        },
        {
          title: 'Caminata Ecológica',
          description: 'Recorrerás territorios rurales, urbanos y de reserva del municipio de Útica Cundinamarca. Se realiza en grupo, guiado por personal experto, conocedor de la topografía del municipio.',
          images: [
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/CAMINATAEXTREMAXIE2-p3c2y0o2zbdi718f6jkd9o5m7dk7lszsedvkatwsns.jpg',
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/CAMINATAEXTREMA5-p3c2ywmlfol95rxzzxdomg3aeh6oviinus22m8les8.jpg',
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/CAMINATAEXTREMA6-p3c2wz2jdxy1amr1a3bahxn6fypj1wuix7s53rgjko.jpg',
                'https://xiedeportesextremos.com/wp-content/uploads/elementor/thumbs/CAMINATAEXTREMAXIE-p3c32fit2beyp4toey8bh22ilht8qnifc84meld9g8.jpg',
                'https://www.bucaramanga.gov.co/wp-content/uploads/2023/04/Caminatas.jpg'
              
          ],
          currentIndex: 0,
          offset: 0
        },
      
      ]
    };
  },
  methods: {
    prevImage(index) {
      const activity = this.activities[index];
      activity.currentIndex = Math.max(activity.currentIndex - 1, 0);
      activity.offset = -activity.currentIndex * 30 / activity.images.length;
    },
    nextImage(index) {
      const activity = this.activities[index];
      activity.currentIndex = Math.min(activity.currentIndex + 1, activity.images.length - 1);
      activity.offset = -activity.currentIndex * 30 / activity.images.length;
    }
  }
};
</script>

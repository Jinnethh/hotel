
<template>
  
  

  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          Oasis
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="bienvenida" />
        <q-route-tab to="/habitaciones" label="habitaciones" />
        <q-route-tab to="/contacto" label="contacto" />
        <q-route-tab to="/deportesextremos" label="deportesextremos" />
        <q-route-tab to="/servicios" label="servicios" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile">
   
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>




 
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style scoped>

@font-face {
    font-family: "VIP W01 Regular";
    src: url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.eot");
    src: url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/acd69c8ded5bb2eeb4bdc31e7a57fc93.svg#VIP W01 Regular")format("svg");
}
 


/* body{
  background-color: beige;
} */

 .bg-primary{
  background-color: black !important;
 }

 .q-toolbar__title {
  color:white ;
  font-family: "VIP W01 Regular";
  font-size: 300%;
  text-align: center;
 }
/* 
 .q-tabs__content {
  text-align: center;
  align-items: center;display: flex;
  margin-left: 50%;
 } */

 /* .q-tabs__content.scroll--mobile.row.no-wrap.items-center.self-stretch.hide-scrollbar.relative-position.q-tabs__content--align-left{
 
  margin-left: 30% !important;
 } */


</style>
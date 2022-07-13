<script>


  import Buscador from './components/Buscador.vue'
  import MenuMovies from './components/MenuMovies.vue'

  export default{
    name:'App',
    components:{
      Buscador,
      MenuMovies
    }
  }
</script>

<template>
  <MenuMovies/>
  <RouterView/>
</template>


<style>

</style>
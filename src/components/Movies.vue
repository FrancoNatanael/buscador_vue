<script>
import { createDOMCompilerError } from '@vue/compiler-dom';
import Vista from './Vista.vue'
const api = "https://www.omdbapi.com/?apikey=d0a09967&t=";
    export default{
        name:'Movies',
        data(){
            return{
                results:[]
            }
        },
        components:{
            Vista
        },
        methods:{
          async pelicula(){
          try{

             const respuesta = await fetch(api + 'Narnia')
            const data = await respuesta.json();

             this.results.push(data);
             console.log(this.results);

          }catch(error){
           console.log(error);
            }
             // finally{
             //     this.info=null;
                // }
         }
        },
        created(){
            // fetch("https://www.omdbapi.com/?apikey=d0a09967&t=Narnia")
            //     .then(respuesta => respuesta.json())
            //          .then(datos => this.results.push(datos))
            this.pelicula();
             
        }

    }
</script>

<template>
    <div class="peliculas">
          <Vista
        v-for="movie in results"
        :titulo="movie.Title"
        :img="movie.Poster"
        :release="movie.Released"
        :duracion="movie.Runtime"
    />
    </div>


  
</template>

<style scoped>
.peliculas{
    margin: auto;
    width: 70%;
}
</style>
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
          async serie(){
          try{

             const respuesta = await fetch(api + 'Friends')
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
            this.serie();
             
        }

    }
</script>

<template>
    <div class="series">
          <Vista
        v-for="serie in results"
        :titulo="serie.Title"
        :img="serie.Poster"
        :release="serie.Released"
        :duracion="serie.Runtime"
    />
    </div>


  
</template>

<style scoped>
.series{
    margin: auto;
    width: 70%;
}
</style>
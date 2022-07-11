<script>
    const api = "https://www.omdbapi.com/?apikey=d0a09967&t=";

  import Error from './Error.vue'
  import Vista from './Vista.vue'
  
  export default{
    data(){
        return{
            info:null,
            result:null,
            errorMsg:""
        }
       
    },
    methods:{
        async buscarPorTitulo(){

            this.result=null
            this.errorMsg=""

            try{

             const respuesta = await fetch(api + this.info)
             const data = await respuesta.json();

             
            
                if(data.Response!="False"){
                    this.result = data;
                }else{
                    this.errorMsg="No se encontraron resultados para la busqueda..."
                }

            }catch(error){
                console.log(error);
            }
            finally{
                this.info=null;
            }
        }
    },
    components:{
        Vista,
        Error
    }
  }
</script>

<template>
     <div class="buscador">
            <h1>Buscar pelicula o serie</h1>
            <form action="" @submit.prevent="buscarPorTitulo">
                <input type="text"  v-model="info">
                <button type="submit">Buscar</button>
            </form>
            
            <Vista v-if="result" 
                :titulo="result.Title"
                :img="result.Poster"
                :release="result.Released"
                :duracion="result.Runtime"
            />

            <Error v-if="errorMsg" :mensaje="errorMsg"/>
            
        </div>
</template>


<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background-image:url("img/background.jpg");
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
}
.buscador{
    margin: 50px auto;
    width: 50%;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    padding: 40px 30px;
}
.buscador h1{
    font-size: 32px;
    margin-bottom: 10px;
    margin-left: -34px;
}
.buscador form{
    
    width: 50%;
    margin: auto;
    text-align: left;
   
}
.buscador input{
    padding: 5px;
    width: 65%;
    margin-right: 2%;
    border-radius: 2px;
    border: solid 2px rgb(208, 208, 208);
    color: rgb(56, 56, 56);
}
.buscador button{
    padding: 6px;
    border: none;
    color: white;
    border-radius: 2px;
    background-color: brown;
    transition: all 0.5s;
    
}
.buscador button:hover{
   transform: scale(107%);
    cursor: pointer;
}
</style>
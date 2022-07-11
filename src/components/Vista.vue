<script>
    export default{
        props:['titulo','img','release','duracion']
    }
</script>

<template>
   <article class="vista-pelicula-serie">
            <img :src="img" alt="movie">
            <div class="informacion">
                <h2>{{titulo}}</h2>
                <p>Año : {{release}}</p>
                <p>Duracion :  {{duracion}}</p>
            </div>
        </article>
</template>

<style scoped>
.vista-pelicula-serie{
    box-sizing: border-box;
    padding: 10px;
    background-color: khaki;
    margin-top: 5px;
   display: flex;
   justify-content: space-between;

}
.vista-pelicula-serie img{
    width: 40%;
}
.vista-pelicula-serie .informacion{
   width: 55%;
   text-align: left;

}
.vista-pelicula-serie .informacion h2{
    margin-bottom: 5px;

}
</style>
<script>
    export default{
        name:'Menu'
    }
</script>

<template>
    <div class="menu">
        <nav>
            <ul>
                <RouterLink to="/">Buscador</RouterLink>
                <RouterLink to="/movies">Peliculas recomendadas</RouterLink>
                <RouterLink to="/series">Series recomendadas</RouterLink>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.menu{
     background-color: white;
    width: 50%;

}
.menu nav ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 16px;
    font-weight: 400;
    color: black;
    text-align: center;
}
a{
    color: black;
    text-decoration: none;
    padding: 10px;
    width: 32%;
    transition: all 0.6s;
}
a:hover{
    cursor: pointer;
    background-color: rgb(196, 195, 195);
    color: white;

}
</style>
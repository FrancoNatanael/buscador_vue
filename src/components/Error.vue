<script>
    export default{
        props:['mensaje']
       
    }
</script>

<template>
    <p class="error">{{mensaje}}</p>
</template>

<style scoped>
.error{
    margin-top: 8px;
    color: red;
    font-weight: bold;
}
</style>
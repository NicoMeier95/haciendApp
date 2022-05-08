<template>
  <div class="header">
      <h1>
          Bienvenido a tu App <br/>de administración<br/> de hacienda
      </h1>
      <img src="../assets/1.jpg" alt="campo con hacienda">
  </div>
</template>

<script>
export default {
    name: 'Welcome'
}
</script>

<style>
.header{
    display: flex;
    height: 70vh;
    align-items: center;
    justify-content: space-around;
}
img{
    width: 40%;
    height: auto;
    border-radius: 20%;
}
@media (max-width: 720px) {
    .header{
        display: block;
        margin: 0 auto;
        text-align: center;
        margin-top: 30%;
    }
    img{
        margin-top: 3rem;
    }
}
</style>
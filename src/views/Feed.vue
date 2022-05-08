<template>
  <div class="feed pt-5 mt-0">
      <h3 class="ms-5">Mi hacienda</h3>
        <Hacienda></Hacienda>
      <h3 class="ms-5">Pastoreos</h3>
        <Pastura></Pastura>

        <Footer class="my-0 py-2"></Footer>
  </div>
</template>

<script>
import Hacienda from '../components/hacienda.vue'
import Pastura from '../components/pastura.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'feed',
  components: {
    Hacienda, Pastura, Footer
  }
}
</script>

<style>
.feed{
  margin-top: 5rem;
  background-color: #fff;
}
</style>
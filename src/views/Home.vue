<template>
  <div>
    <Welcome></Welcome>
    <About></About>
    <Contact></Contact>
    <Footer class="my-0 py-2"></Footer>
  </div>

</template>

<script>
import Welcome from '../components/welcome.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'Home',
  components: {
    Welcome,About,Contact,Footer
  }
}
</script>
<style>

</style>
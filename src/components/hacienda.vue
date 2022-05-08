<template>
  <div class="hacienda">
        <div class="hacienda-header">
            <Toros></Toros>  
        </div>
        <div class="hacienda-header--vacas">
            <Vacas></Vacas>
        </div>

        <div class="hacienda-header">
          <Novillos></Novillos>
        </div>
        <div class="hacienda-header--terneros">
          <Terneros></Terneros>
        </div>
      </div>
</template>

<script>
import Toros from './toros.vue'
import Vacas from './vacas.vue'
import Novillos from './novillos.vue'
import Terneros from './terneros.vue'

export default {
    name:'Hacienda',
    components: {Toros, Vacas, Novillos, Terneros}
}
</script>

<style>
.hacienda-header--vacas{
  background-color: rgba(2,90,2,.1);
}

.hacienda-header--terneros{
  background-color: rgba(2,90,2,.1);
}
</style>
<template>
  <h4 class="text-center mt-3 pt-3">Terneros</h4>
      <form class="my-3 text-center row mx-auto">
          <input class="col-sm form-control ms-1 my-1" type="text" name="caravana" id="caravana" v-model="caravana" placeholder="Agregar caravana de la madre">
          <input class="col-sm form-control ms-1 my-1" type="date" name="nacimiento" id="nacimiento" v-model="nacimiento" placeholder="Nacimiento">
          <input class="col-sm form-control ms-1 my-1" type="text" name="pesoEstimado" id="pesoEstimado" v-model="pesoEstimado" placeholder="Peso estimado">
          <input class="col-sm form-control ms-1 my-1" type="text" name="genero" id="genero" v-model="genero" placeholder="Género">
          <input class="col-sm form-control ms-1 my-1" type="text" name="observaciones" id="observaciones" v-model="observaciones" placeholder="Observaciones">       
          <button class="btn btn-success col-sm form-control ms-1 my-1" @click.prevent="agregarTernero">Agregar</button>
      </form>
      
      <table class="table table-striped table-hover mt-3 text-center">  
          <thead>
              <tr>
                <td scope="col">Caravana madre</td> 
                <td scope="col">Nacimiento</td>
                <td scope="col">Peso Estimado</td>
                <td scope="col">Género</td>
                <td scope="col">Observaciones</td>
                <td scope="col"></td>
              </tr>
            </thead>
            <tbody>
                <tr v-for="ternero in terneros" v-bind:key="ternero.caravana">
                 <td>{{ternero.caravana}}</td>
                 <td>{{ternero.nacimiento}}</td>
                 <td>{{ternero.peso}}</td>
                 <td>{{ternero.genero}}</td> 
                 <td>{{ternero.observaciones}}</td>
                 <td><button class="btn btn-danger" @click.prevent="eliminar(index)">Eliminar</button></td>   
                </tr>
            </tbody>
        </table>
</template>

<script>

let terneros = [];

export default {
    name:'Terneros',
    methods: {
      agregarTernero(){
        this.terneros.push({
          caravana: this.caravana,
          nacimiento: this.nacimiento,
          peso: this.pesoEstimado,
          genero: this.genero,
          observaciones: this.observaciones
        });
        this.caravana='';
        this.nacimiento='';
        this.pesoEstimado='';
        this.genero='';
        this.observaciones='';

        localStorage.setItem('HaciendApp-terneros', JSON.stringify(this.terneros));
      },
      eliminar(index){
        this.terneros.splice(index,1);

        localStorage.setItem('HaciendApp-terneros', JSON.stringify(this.terneros));
      }
    },
    created(){
      let datosLS = JSON.parse(localStorage.getItem('HaciendApp-terneros'));
        if (datosLS == null) {
            this.terneros = []
        } else {
            this.terneros = datosLS
        }
    },
    data() {
      return {
        terneros
      }
    },
}
</script>

<style>

</style>
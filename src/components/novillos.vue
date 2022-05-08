<template>
  <h4 class="text-center mt-3">Novillos</h4>
      <form class="my-3 text-center mx-auto row">
          <input class="col-sm form-control ms-1 my-1" type="text" name="caravana" id="caravana" v-model="caravana" placeholder="Agregar caravana">
          <input class="col-sm form-control ms-1 my-1" type="text" name="edad" id="edad" v-model="edad" placeholder="Edad">
          <input class="col-sm form-control ms-1 my-1" type="text" name="pesoEstimado" id="pesoEstimado" v-model="pesoEstimado" placeholder="Peso estimado">
          <input class="col-sm form-control ms-1 my-1" type="text" name="observaciones" id="observaciones" v-model="observaciones" placeholder="Observaciones">
          <button class="btn btn-success col-sm form-control ms-1 my-1" @click.prevent="agregarNovillo">Agregar</button>
      </form>
      <table class="table table-striped table-hover mt-3 text-center">  
          <thead>
              <tr>
                <td scope="col">Caravana</td> 
                <td scope="col">Edad</td>
                <td scope="col">Peso Estimado</td>
                <td scope="col">Observaciones</td>
                <td scope="col"></td>
              </tr>
            </thead>
            <tbody>
                <tr v-for="novillo in novillos" v-bind:key="novillo.caravana">
                 <td>{{novillo.caravana}}</td>
                 <td>{{novillo.edad}}</td>
                 <td>{{novillo.peso}}</td> 
                 <td>{{novillo.observaciones}}</td>
                 <td><button class="btn btn-danger" @click.prevent="eliminar(index)">Eliminar</button></td>   
                </tr>
            </tbody>
        </table>
</template>

<script>
let novillos = [];

export default {
    name:'Novillos',
    methods:{
      agregarNovillo(){
        this.novillos.push({
          caravana: this.caravana,
          edad: this.edad,
          peso: this.pesoEstimado,
          observaciones: this.observaciones
        });
        this.caravana='';
        this.edad='';
        this.pesoEstimado='';
        this.observaciones='';

        localStorage.setItem('HaciendApp-novillos', JSON.stringify(this.novillos));
      },
      eliminar(index){
        this.novillos.splice(index,1);

        localStorage.setItem('HaciendApp-novillos', JSON.stringify(this.novillos));
      }
    },
    created(){
        let datosLS = JSON.parse(localStorage.getItem('HaciendApp-novillos'));
        if (datosLS == null) {
          this.novillos = []
        } else {
          this.novillos = datosLS
        }
    },
    data() {
      return {
        novillos
      }
    },
}
</script>

<style>

</style>
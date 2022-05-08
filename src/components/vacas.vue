<template>
  <h4 class="text-center my-3 pt-3">Vacas</h4>
      <form class="my-3 text-center mx-auto row">
            <input class="col-sm form-control ms-1 my-1" type="text" name="caravana" id="caravana" v-model="caravana" placeholder="Agregar caravana">
            <input class="col-sm form-control ms-1 my-1" type="text" name="edad" id="edad" v-model="edad" placeholder="Edad">
            <input class="col-sm form-control ms-1 my-1" type="text" name="pesoEstimado" id="pesoEstimado" v-model="pesoEstimado" placeholder="Peso estimado">
            <input class="col-sm form-control ms-1 my-1" type="text" name="pariciones" id="pariciones" v-model="pariciones" placeholder="Pariciones">
            <input class="col-sm form-control ms-1 my-1" type="text" name="observaciones" id="observaciones" v-model="observaciones" placeholder="Observaciones">
            <button class="col-sm form-control ms-1 my-1 btn btn-success" @click.prevent="agregarVaca">Agregar</button>
        </form>
      <table class="table table-striped table-hover mt-3 text-center">  
          <thead>
              <tr>
                <td scope="col">Caravana</td> 
                <td scope="col">Edad</td>
                <td scope="col">Peso Estimado</td>
                <td scope="col">Pariciones</td>
                <td scope="col">Observaciones</td>
                <td scope="col"></td>
              </tr>
            </thead>
            <tbody>
                <tr v-for="vaca in vacas" v-bind:key="vaca.caravana">
                 <td>{{vaca.caravana}}</td>
                 <td>{{vaca.edad}}</td>
                 <td>{{vaca.peso}}</td>
                 <td>{{vaca.pariciones}}</td> 
                 <td>{{vaca.observaciones}}</td>
                 <td><button class="btn btn-danger" @click.prevent="eliminar(index)">Eliminar</button></td>   
                </tr>
            </tbody>
        </table>
</template>

<script>
let vacas = [];

export default {
    name:'Vacas',
    methods: {
      agregarVaca(){
        this.vacas.push({
          caravana: this.caravana,
          edad: this.edad,
          peso: this.pesoEstimado,
          pariciones: this.pariciones,
          observaciones: this.observaciones
        });
        this.caravana='';
        this.edad='';
        this.pesoEstimado='';
        this.pariciones='';
        this.observaciones='';
        
        localStorage.setItem('HaciendApp-vacas', JSON.stringify(this.vacas));
      },
      eliminar(index){
        this.vacas.splice(index,1);

        localStorage.setItem('HaciendApp-vacas', JSON.stringify(this.vacas));
      }
    },
    created(){
      let datosLS = JSON.parse(localStorage.getItem('HaciendApp-vacas'));
        if (datosLS == null) {
            this.vacas = []
        } else {
            this.vacas = datosLS
        }
    },
    data() {
      return {
        vacas
      }
    },
}
</script>

<style>

</style>
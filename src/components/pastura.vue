<template>
  <div class="pastura mt-3">
        <h4 class="text-center">Agregar Pastura</h4>
        <form class="my-3 text-center row mx-auto">
            <input class="col-sm form-control ms-1 my-1" type="text" name="pastura" id="pastura" v-model="pastura" placeholder="Agregar Pastura">
            <input class="col-sm form-control ms-1 my-1" type="number" min="1" name="hectareas" id="hectareas" v-model="hectareas" placeholder="Hectareas">
            <input class="col-sm form-control ms-1 my-1" type="date" name="fecha" id="fecha" v-model="fecha">
            <input class="col-sm form-control ms-1 my-1" type="number" name="parcelas" min="1" id="parcelas" v-model="parcelas" placeholder="Parcelas">
            <button class="btn btn-success col-sm form-control ms-1 my-1" @click.prevent="agregarPastura">Agregar</button>
        </form>

        <table class="table table-striped table-hover mt-3 text-center">
          <thead>
            <tr>
              <td scope="col">Pastura</td>
              <td scope="col">Hectáreas</td>
              <td scope="col">Fecha de siembra</td>
              <td scope="col">Parcelas</td>
              <td scope="col"></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pastura in pasturas" v-bind:key="pastura.orden">
              <td>{{pastura.pastura}}</td>
              <td>{{pastura.hectareas}}</td>
              <td>{{pastura.fecha}}</td>
              <td>{{pastura.parcelas}}</td>
              <td><button class="btn btn-danger" @click.prevent="eliminar(index)">Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
let pasturas = []; 

export default {
    name:'Pastura',
    methods:{
      agregarPastura(){       
        this.pasturas.push({
          pastura : this.pastura,
          hectareas: this.hectareas,
          fecha: this.fecha,
          parcelas: this.parcelas,
          orden: this.orden
        });
        this.pastura='';
        this.hectareas='';
        this.fecha='';
        this.parcelas='';
        localStorage.setItem('HaciendApp-pasturas', JSON.stringify(this.pasturas));
      },
      eliminar(index){
        this.pasturas.splice(index,1);
        localStorage.setItem('HaciendApp-pasturas', JSON.stringify(this.pasturas));
      }
    },
    data() {
      return {
        pasturas
      }
    },
    created() {
      let datosLS = JSON.parse(localStorage.getItem('HaciendApp-pasturas'));
        if (datosLS == null) {
            this.pasturas = []
        } else {
            this.pasturas = datosLS
        }
    },
  }
</script>

<style>

</style>
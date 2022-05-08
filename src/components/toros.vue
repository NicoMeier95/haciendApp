<template>
  <h4 class="text-center mt-5">Toros</h4>
      <form class="my-3 mx-auto text-center row">
            <input class="col-sm form-control ms-1 my-1" type="text" name="caravana" id="caravana" v-model="caravana" placeholder="Agregar caravana">
            <input class="form-control col-sm ms-1 my-1" type="date" name="fecha" id="fecha" v-model="fecha">
            <input class="col-sm form-control ms-1 my-1" type="text" name="procedencia" id="procedencia" v-model="procedencia" placeholder="Procedencia">
            <input class="col-sm form-control ms-1 my-1" type="text" name="raza" id="raza" v-model="raza" placeholder="Raza">
            <button class="btn btn-success col form-control ms-1 my-1" @click.prevent="agregarToro">Agregar</button>
        </form>
      <table class="table table-striped table-hover mt-3 align-items-center text-center">  
          <thead>
              <tr>
                <td scope="col">Caravana</td> 
                <td scope="col">Fecha de compra</td>
                <td scope="col">Procedencia</td>
                <td scope="col">Raza</td>
                <td scope="col"></td>
              </tr>
            </thead>
            <tbody>
                <tr v-for="toro in toros" v-bind:key="toro.caravana">
                 <td>{{toro.caravana}}</td>
                 <td>{{toro.fecha}}</td>
                 <td>{{toro.procedencia}}</td>
                 <td>{{toro.raza}}</td>
                 <td>
                    <button class="btn btn-danger" @click.prevent="eliminar(index)">Eliminar</button>
                 </td>   
                </tr>
            </tbody>
        </table>
</template>

<script>
let toros = [];

export default {
    name: 'Toros',
    methods:{
        agregarToro(){
            this.toros.push({
                caravana: this.caravana,
                fecha: this.fecha,
                procedencia: this.procedencia,
                raza: this.raza,
                estado: false
            });
            this.caravana='';
            this.fecha='';
            this.procedencia='';
            this.raza='';
            localStorage.setItem('HaciendApp-toros', JSON.stringify(this.toros));
        },
        eliminar(index){
            this.toros.splice(index,1);
            localStorage.setItem('HaciendApp-toros', JSON.stringify(this.toros));
        }
    },
    data(){
        return {toros}
    },
    created(){
        let datosLS = JSON.parse(localStorage.getItem('HaciendApp-toros'));
        if (datosLS == null) {
            this.toros = []
        } else {
            this.toros = datosLS
        }
    }
}
</script>

<style>
form{
    width:90%;
    border: 3px solid rgb(158, 106, 39);
    border-radius: 3rem;
    padding: 1.5rem 3rem;
}

</style>
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Registro</router-link> |
    <router-link to="/sign-in">Iniciar Sesión</router-link> |
    <router-link to="/feed">Mi cuenta</router-link>
    <button class="btn btn-danger" @click="handleSignOut" v-if="isLoggedIn">Cerrar Sesión</button>
  </div>
  <router-view/>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter();
const isLoggedIn = ref (false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user)=>{
    if (user) {
      isLoggedIn.value = true;
    }else{
      isLoggedIn.value = false;
    }
  })
});

const handleSignOut = () => {
    signOut(auth).then(()=>{
      router.push('/');
    });
    alert('Saliste de tu cuenta. Gracias por visitarnos!')//PROBAR CON STRING LITERAL
}

</script>

<style>
#nav{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.1rem;
  background-color: rgba(2,90,2,.2);
  width: 100vw;
  height: 2.3rem;
  margin-left: -.5rem;
  padding: 1rem 0;
  position: fixed;
  top: 0;
}
#nav a{
  margin-left: .5rem;
  margin-right: .5rem;
  margin-bottom: .3rem;
  text-decoration: none;
  color: #ffffff;
  transition: all .2s;
}

#nav a:last-child{
  margin-right: 1.5rem;
}

#nav a:hover{
  border-bottom: 1px solid rgb(2, 90, 2);
  color: rgb(2, 90, 2);
  transition: all .2s;
}

</style>

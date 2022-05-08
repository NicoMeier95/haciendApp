<template>
  <div class="register">
      <h3>Crear una cuenta</h3>
      <p>¿Es la primera vez que nos visitás?</p>
      <p>Crea una cuenta a continuación para disfrutar de la totalidad del sitio.</p>
      <form class="text-center">
        <input class="form-control mb-3 mx-auto" type="text" placeholder="Email" v-model="email">
        <input class="form-control mb-3 mx-auto" type="password" placeholder="Password" v-model="password">
        <button type="button" class="btn" @click="register">Iniciar sesión</button>
        <button type="button" class="btn mt-3" @click="signInWithGoogle">Iniciar sesión con Google</button>
      </form>
  </div>
  <Footer class="my-0 py-2"></Footer>
</template>

<script setup>
import Footer from '../components/footer.vue'
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data)=>{
            console.log("Successfully registered!");
            console.log(getAuth().currentUser);
            router.push('/feed')
        })
        .catch((error)=>{
            console.log(error)
            alert(error.message)
        })
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result)=>{
            console.log(result.user);
            router.push('/feed');
        })
        .catch((error)=>{
            console.log(error)
        })
}

</script>
<style scoped>
.register{
    width: 80%;
    margin: 5rem auto;
}
h3{
    text-align: center;
}
p{
    text-align: center;
}
form{
    margin: 3rem auto 0 auto;
    border: 3px solid rgb(158, 106, 39);
    border-radius: 10%;
    padding: 3rem 1rem;
    width: 40%;
    background-color: #eeeeee;
}
.btn{
    font-size: inherit;
    text-transform: capitalize;
    text-align: center;
    margin: 0 auto;
    display: block;
    padding: .5rem 1rem;
    background-color: rgb(158, 106, 39);
    color: #e4e4e4;
    border: none;
    cursor: pointer;
}

.btn:hover{
    border: none;
    background-color: rgb(94, 63, 23);;
}

input{
    border: 1px solid rgba(158,106,39,.5);
    border-radius: .5rem;
    width: 80%;
}
</style>
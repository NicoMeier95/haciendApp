<template>
  <div class="sign-in">
      <h3>Iniciar sesión</h3>
      <p>Inicia sesión con tu cuenta para continuar.</p>
      <p>Gracias por elegirnos</p>
      <form class="text-center">
        <input type="text" class="form-control mb-3 mx-auto" placeholder="Email" v-model="email">
        <input type="password" class="form-control mb-3 mx-auto" placeholder="Password" v-model="password">
        <p v-if="errorMsg">{{ errorMsg }}</p>
        <button type="button" class="btn" @click="signIn">Iniciar sesión</button>
        <button type="button" class="btn mt-3" @click="signInWithGoogle">Continuar con Google</button>
      </form>
  </div>

  <Footer class="my-0 py-2"></Footer>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/footer.vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const errorMsg = ref();
const router = useRouter();

const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data)=>{
            console.log("Successfully signed in!");
            console.log(getAuth().currentUser);
            router.push('/feed')
        })
        .catch((error)=>{
            console.log(error);
            switch (error.code) {
                case "auth/invalid-email":
                    errorMsg.value = "Invalid Email";
                    break;
                case "auth/user-not-found":
                    errorMsg.value = "User not found";
                    break;
                case "auth/wrong-password":
                    errorMsg.value = "Wrong Password";
                    break;
                default:
                    errorMsg.value = "Email or Password was incorrect"
                    break;
            }
        })
}
const signInWithGoogle = () => {

}
</script>
<style scoped>
.sign-in{
    width: 80%;
    margin: 5rem auto;
    background-color: #fff;
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

@media (max-width: 600px) {
    .sign-in{
        width: 80%;
    }
    form{
        width: 100%;
    }
}

@media (max-width: 950px) {
    .sign-in{
        width: 70%;
    }
    form{
        width: 80%;
    }
}
</style>

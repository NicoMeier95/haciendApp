import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1cbQfUGk0BeCLlKjWNB40Y7KIj3EkU5Q",
    authDomain: "vue-firebase-auth-f4241.firebaseapp.com",
    projectId: "vue-firebase-auth-f4241",
    storageBucket: "vue-firebase-auth-f4241.appspot.com",
    messagingSenderId: "419444312843",
    appId: "1:419444312843:web:d54e66f5366ffc556f700e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
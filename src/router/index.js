import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/sign-in',
        component: () =>
            import ('../views/SignIn.vue')
    },
    {
        path: '/feed',
        component: () =>
            import ('../views/Feed.vue'),
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject);
    })
}


router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert("Debes estar registrado para continuar");
            next('/');
        }
    } else {
        next();
    }
})

export default router
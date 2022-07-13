import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory}  from 'vue-router'

import Buscador from './components/Buscador.vue'
import Movies from './components/Movies.vue'
import Series from './components/Series.vue'
import Movie from './components/Movie.vue'


const routes = [
    { path: '/',
     component: Buscador,
      name:'home'
    },
    { path: '/movies',
     component: Movies,
     name:'movies'
    },
    { path: '/series',
     component: Series,
     name:'series'
    },
    {
      path:'/movies/:id',
      name:'movieDetail',
      component:Movie
    }
  ]
  
  const router = createRouter({
    mode:'history',
    history: createWebHashHistory(),
    routes, 
  })


const app = createApp(App);
  app.use(router)
app.mount('#app')

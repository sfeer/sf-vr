import Vue from 'vue';
import Router from 'vue-router';
import Scene from '../views/Scene';
import NewScene from '../views/NewScene';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/s1'},
    {path: '/s4', component: NewScene},
    {path: '/:station(s\\d+)', component: Scene},
    {path: '/scene/:scene', component: Scene}
  ]
})

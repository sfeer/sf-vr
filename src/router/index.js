import Vue from 'vue';
import Router from 'vue-router';
import Scene from '../views/Scene';
import NewScene from '../views/NewScene';
import NewScene2 from '../views/NewScene2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/s1'},
    {path: '/s4', component: NewScene},
    {path: '/s5', component: NewScene2},
    {path: '/:station(s\\d+)', component: Scene},
    {path: '/scene/:scene', component: Scene}
  ]
})

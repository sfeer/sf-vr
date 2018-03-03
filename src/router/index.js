import Vue from 'vue';
import Router from 'vue-router';
import Scene from '../views/Scene';
import NewScene from '../views/NewScene';
import DebugScene from '../views/DebugScene';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/s4'},
    {path: '/s1', name: 's1', component: Scene},
    {path: '/s2', name: 's2', component: Scene},
    {path: '/s3', name: 's3', component: Scene},
    {path: '/scene/:scene', component: Scene},

    {path: '/s4', name: 's4', component: NewScene},

    {path: '/debug/:sid', component: DebugScene}
  ]
})

import Vue from 'vue';
import Router from 'vue-router';
import Station from '../views/Station';
import Scene from '../views/Scene';
import DefectPano from '../views/DefectPano';
import DebugScene from '../views/DebugScene';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/s1'},
    // {path: '/:sid(s\\d+)', component: Station},
    // {path: '/:sid(s\\d+)/:rid(r\\d+)', component: Station},
    {path: '/s1', name: 's1', component: DefectPano},
    {path: '/s2', name: 's2', component: Station},
    {path: '/s3', name: 's3', component: Station},
    {path: '/s4', name: 's4', component: Station},
    {path: '/s4/r1', name: 's4r1', component: Station},
    {path: '/s4/r2', name: 's4r2', component: Station},
    {path: '/s4/r3', name: 's4r3', component: Station},
    {path: '/s4/r4', name: 's4r4', component: Station},
    {path: '/s4/r5', name: 's4r5', component: Station},

    {path: '/scene/:scene', component: Scene},
    {path: '/debug/:sid', component: DebugScene}
  ]
})

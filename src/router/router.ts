import {createRouter, createWebHistory} from "vue-router";
import EventsList from "../components/EventsList.vue";


const routes = [
  {
    path: '/',
    component: EventsList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
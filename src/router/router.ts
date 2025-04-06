import {createRouter, createWebHistory} from "vue-router";
import EventsList from "../components/EventsList.vue";
import ParticipationList from "../components/ParticipationList.vue";


const routes = [
  {
    path: '/',
    component: EventsList
  },
  {
    path: '/participants/:eventId',
    component: ParticipationList,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
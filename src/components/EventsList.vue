<script lang="ts">
import {defineComponent} from 'vue'
import {EventsResolver} from "../api/resolvers/events.resolver.ts";
import type {EventStructureDto} from "../api/dto/events/event-structure.dto.ts";
import EventItem from "./UI/EventItem.vue";
import {useDevice} from "../utils/modile-detector.util.ts";

export default defineComponent({
  name: "EventsList",
  components: {EventItem},
  data() {
    const isMobile = useDevice().isMobile;
    const eventsResolver = new EventsResolver();

    return {
      isMobile,
      eventsResolver,
      events: [] as EventStructureDto[]
    }
  },
  methods: {
    convertDateFormat(dateString: Date) {
      const date = new Date(dateString);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');

      return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
  },
  async mounted() {
    this.events = await this.eventsResolver.getAll();
  }
})
</script>

<template>
  <div class="container" :class="isMobile ? 'container-mobile' : 'container-desktop'">
    <div class="block-title" v-if="!isMobile">
      <div class="block">
        Название мероприятия
      </div>
      <div class="block">
        Время проведения
      </div>
      <div class="block">
        Кабинет
      </div>
    </div>
    <EventItem v-for="(event, index) in events"
               :key="index"
               class="event-item"
               @click="console.log(event.id)"
    >
      <template v-slot:name> {{ event.name }}</template>
      <template v-slot:time> {{ convertDateFormat(event.data) }}</template>
      <template v-slot:classroom> {{ event.classroom }}</template>
    </EventItem>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  gap: 1rem;
}

.container-mobile {
  width: 85%;
}

.container-desktop {
  width: 70vw;
}

.event-item {
  border: 1px solid gray;
}

.block-title {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 1rem;
  width: 95%;
  height: 2rem;
  color: black;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid gray;
}

.block-title > div {
  border-right: 1px solid black;
}

.block-title > div:last-child {
  border: 0;
}
</style>
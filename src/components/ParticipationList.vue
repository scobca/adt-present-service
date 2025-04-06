<script lang="ts">
import {defineComponent} from 'vue'
import {ParticipationResolver} from "../api/resolvers/participation.resolver.ts";
import type {ParticipantStructureDto} from "../api/dto/participants/participant-structure.dto.ts";
import ParticipantItem from "./UI/ParticipantItem.vue";
import {useDevice} from "../utils/modile-detector.util.ts";
import type {UpdateParticipantDto} from "../api/dto/participants/update-participant.dto.ts";

export default defineComponent({
  name: "ParticipationList",
  components: {ParticipantItem},
  props: {
    eventId: {
      type: String,
      required: true
    },
  },
  data() {
    const participationResolver = new ParticipationResolver();
    const isMobile = useDevice().isMobile;

    return {
      participationResolver,
      isMobile,
      participants: [] as ParticipantStructureDto[],
      searchQuery: "",
    }
  },
  async mounted() {
    const res = await this.participationResolver.getAll(Number(this.eventId));
    this.participants = res.sort((a, b) => a.name.localeCompare(b.name))
    },
  methods: {
    async change(id: number, checked: boolean) {
      const updatedData: UpdateParticipantDto = {
        id: id,
        presence: checked,
      }

      await this.participationResolver.update(updatedData);
    }
  },
  computed: {
    participationList() {
      return this.participants.filter((el) => el.name.includes(this.searchQuery))
    }
  }
})
</script>

<template>
  <div class="container" :class="isMobile ? 'container-mobile' : 'container-desktop'">
    <div class="search-input-container">
      <input class="text-input" v-model="searchQuery" type="text" placeholder="ФИО Участника" />
    </div>

    <div class="block-title" v-if="!isMobile">
      <div class="block">
        Имя участника
      </div>
      <div class="block">
        Компетенция
      </div>
      <div class="block">
        Возраст
      </div>
      <div class="block">
        Отметить посещение
      </div>
    </div>

    <ParticipantItem v-for="(participant, index) in participationList"
                     :key="index"
                     class="item"
                     @checkbox-change="(check: boolean) => change(participant.id, check)"
                     :is-here="participant.presence"
                     v-if="participants.length > 0"
    >
      <template v-slot:name> {{participant.name}} </template>
      <template v-slot:competence> {{participant.competence}} </template>
      <template v-slot:age> {{participant.age}} </template>
    </ParticipantItem>

    <h1 class="sub-header" v-else>Пока что участников нет</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  gap: 1rem;
}

.container-mobile {
  width: 85%;
  min-height: 30vh;
}

.container-desktop {
  width: 70vw;
  min-height: 50vh;
}

.item {
  border: 1px solid gray;
}

.block-title {
  display: grid;
  grid-template-columns:  5fr 5fr 3fr 2fr;
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
  width: 100%;
  overflow-x: scroll;
}

.block-title > div:last-child {
  border: 0;
}

.text-input {
  width: 100%;
  display: flex;
  flex: 1;
  padding: 12px;
  border: 2px solid #b8d8d8;
  border-radius: 8px;
  font-size: 16px;
  background: #f8f9fa;
  color: black;
}

.sub-header {
  color: black;
}
</style>
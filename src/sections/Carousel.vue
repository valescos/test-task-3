<script setup lang="ts">
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { SLIDES } from "../data/carouselSlides";
import ModalOrderCall from "../components/ModalOrderCall.vue";
import { useModalStore } from "../store/store";
import { storeToRefs } from "pinia";
import CaruselSlide from "../components/CaruselSlide.vue";

const modalStore = useModalStore();
const { isModalOpened } = storeToRefs(modalStore);
</script>

<template>
  <ModalOrderCall v-if="isModalOpened" />

  <section class="wrapper rounded-[75px] overflow-hidden relative">
    <Swiper :slides-per-view="1" :loop="true">
      <SwiperSlide v-for="slide in SLIDES" :key="slide.id">
        <CaruselSlide
          :title="slide.title"
          :body="slide.body"
          :img="slide.img"
          :highligth="slide.highligth"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped></style>

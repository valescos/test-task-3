<script setup lang="ts">
import { useSwiper } from "swiper/vue";
import StyledButton from "./StyledButton.vue";
import ArrowLeft from "./ArrowLeft.vue";
import ArrowRight from "./ArrowRight.vue";
import { useModalStore } from "../store/store";
import { storeToRefs } from "pinia";

defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  highligth: {
    type: String,
    required: true,
  },
});

const modalStore = useModalStore();
const { isModalOpened } = storeToRefs(modalStore);
const swiper = useSwiper();
</script>

<template>
  <div
    class="h-[662px] lg:h-[426px] bg-fixed-bottom lg:bg-fixed-rigth bg-cover bg-[url('/src/images/background_vertical.png')] lg:bg-[url('/src/images/background_horizontal.png')] relative z-40 bg-no-repeat bg-white bg-fixed"
  >
    <button
      @click="swiper.slidePrev()"
      class="hidden lg:block absolute left-2 top-1/2 -translate-y-[50%]"
    >
      <ArrowLeft />
    </button>
    <button
      @click="swiper.slideNext()"
      class="hidden lg:block absolute right-2 top-1/2 -translate-y-[50%]"
    >
      <ArrowRight />
    </button>
    <div
      class="px-6 lg:px-20 py-12 flex gap-16 flex-col lg:flex-row h-full text-center lg:text-left"
    >
      <div
        class="flex flex-col gap-4 items-center lg:items-start justify-center self-end"
      >
        <h3
          class="text-[24px] leading-[24px] xl:text-[46px] xl:leading-[46px] text-[#22253B]"
        >
          <span v-for="(word, index) in title.split(' ')">
            <span class="highligth" v-if="word === highligth">{{ word }}</span>
            <span v-if="word === highligth">{{ " " }}</span>
            <span v-else-if="index === title.split(' ').length - 1">{{
              word
            }}</span>
            <span v-else>{{ word }}{{ " " }}</span>
          </span>
        </h3>
        <p
          class="lg:w-[60%] text-[16px] text-[#22253B] border-t-[1px] border-[#DEDEDE] pt-2 mt-2"
        >
          {{ body }}
        </p>
        <StyledButton @click="isModalOpened = true" />
      </div>
      <img
        :src="img"
        alt=""
        class="h-[250px] lg:h-[320px] self-center lg:self-end"
      />
    </div>
  </div>
</template>

<style scoped>
.highligth {
  @apply italic font-bold;
}

@media (min-width: 1024px) {
  .highligth {
    font-weight: bold;
    font-style: normal;
  }
  .highligth::after {
    content: "}";
    font-weight: 300;
    color: #f15525;
  }
  .highligth::before {
    content: "{";
    font-weight: 300;
    color: #f15525;
  }
}
</style>

<script setup lang="ts">
import { BENEFITS } from "../data/studyBenefits";
</script>

<template>
  <section class="wrapper">
    <h1
      class="text-center font-bold pb-4 text-[24px] leading-[24px] lg:text-[46px] lg:leading-[46px] text-[#22253B];"
    >
      Обучение в CoDe – это<br />
      удобно и результативно
    </h1>
    <div class="flex flex-wrap gap-[1rem] lg:gap-[2rem] justify-center">
      <div
        v-for="(benefit, index) in BENEFITS"
        :key="benefit.id"
        :class="
          index === BENEFITS.length - 1
            ? 'lg:basis-[calc(100%_/_4_-_2rem_*_3_/_4)] flex lg:flex-col px-16 lg:px-4 items-center lg:text-center'
            : 'px-4 flex flex-col items-center text-center basis-[calc(100%_/_2_-_1rem_*_1_/_2)] lg:basis-[calc(100%_/_4_-_2rem_*_3_/_4)]'
        "
        class="bg-[#EAF2F5] rounded-[30px] py-8 lg:p-8 gap-2"
      >
        <img :src="benefit.icon" />
        <div>
          <h3 class="text-[16px] leading-[18.5px]">
            {{ benefit.title }}
          </h3>
          <p class="text-[13px] leading-[15px]">
            {{ benefit.body }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

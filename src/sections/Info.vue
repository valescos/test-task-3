<script setup lang="ts">
import { INFOITEMS } from "../data/infoItems";
</script>

<template>
  <section class="wrapper flex flex-col gap-4">
    <div
      v-for="(item, i) in INFOITEMS"
      :key="item.id"
      class="flex flex-col md:flex-row gap-4"
    >
      <img
        :src="item.img"
        alt=""
        class="md:w-[300px] lg:w-[400px]"
        :class="i % 2 === 0 ? 'md:order-0' : 'md:order-2'"
      />
      <div
        class="bg-[#EAF2F5] rounded-[40px] py-8 px-8 lg:px-24 flex flex-col gap-2 justify-center order-1"
      >
        <h3 class="text-[32px] leading-[40px] text-[#22253B]">
          {{ item.title }}
        </h3>
        <p
          class="text-[16px] leading-[25px] text-[#22253B]"
          v-for="(parag, index) in item.body"
          :key="`${item.id}${index}`"
        >
          {{ parag }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

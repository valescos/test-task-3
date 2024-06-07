<script setup lang="ts">
import { storeToRefs } from "pinia";
import Logo from "../components/Logo.vue";
import { NAVITEMS } from "../data/navItems";
import Burger from "../icons/Burger.vue";
import Cross from "../icons/Cross.vue";
import { useModalStore } from "../store/store";

const modalStore = useModalStore();
const { isMenuOpened } = storeToRefs(modalStore);
</script>

<template>
  <section
    class="wrapper flex justify-between rounded-[75px] py-2 px-8 bg-white items-center"
  >
    <div class="flex items-baseline gap-4">
      <Logo :size="24" />
      <ul class="flex gap-4">
        <li
          v-for="item in NAVITEMS.filter((item) => item.name !== 'Регистрация')"
          :key="item.id"
          class="text-[#22253B] text-[13px] hover:text-[#F15525] cursor-pointer transition-all hidden lg:block"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <span class="text-[#38BFF2] text-[16px]">+7 (499) 348 93 96</span>
    <button class="block lg:hidden">
      <Burger @click="isMenuOpened = true" />
    </button>
  </section>

  <Teleport to="#modal">
    <div
      :class="isMenuOpened ? 'w-full' : 'hidden'"
      class="fixed bg-white top-0 pb-24 transition-all z-50"
    >
      <div class="wrapper flex flex-col gap-8">
        <button class="self-end">
          <Cross @click="isMenuOpened = false" />
        </button>
        <ul>
          <li
            v-for="item in NAVITEMS"
            :key="item.id"
            class="text-[#22253B] text-[20px] hover:text-[#F15525] cursor-pointer transition-all"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>

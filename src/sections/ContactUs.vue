<script setup lang="ts">
import Logo from "../components/Logo.vue";
import { NAVITEMS } from "../data/navItems";
import Facebook from "../icons/social_media/Facebook.vue";
import Insta from "../icons/social_media/Insta.vue";
import Vk from "../icons/social_media/Vk.vue";
import Youtube from "../icons/social_media/Youtube.vue";
</script>

<template>
  <section
    class="wrapper gap-4 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between"
  >
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <Logo :size="32" />
        <div class="text-[#8E8E8E] flex flex-col gap-0">
          <span class="-mb-2">Школа</span>
          <span>програмирования</span>
        </div>
      </div>
      <div
        class="flex gap-4 [&>*]:cursor-pointer justify-center lg:justify-start"
      >
        <Insta />
        <Vk />
        <Facebook />
        <Youtube />
      </div>
    </div>
    <div class="flex gap-4 flex-col lg:flex-row lg:gap-32">
      <nav>
        <ul class="flex flex-col gap-4 text-[13px] items-center lg:items-start">
          <li
            v-for="item in NAVITEMS"
            :key="item.id"
            class="hover:text-[#F15525] cursor-pointer transition-all"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
      <div
        class="text-[16px] flex gap-4 flex-col items-center lg:items-start lg:gap-2"
      >
        <p class="text-[#38BFF2]">+7 (999) 999 99 99</p>
        <p>info@code.ru</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

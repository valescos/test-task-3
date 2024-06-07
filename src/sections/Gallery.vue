<script setup lang="ts">
import img01 from "../images/gallery/01.png";
import img02 from "../images/gallery/02.png";
import img03 from "../images/gallery/03.png";
import img04 from "../images/gallery/04.png";
import img05 from "../images/gallery/05.png";
import img01l from "../images/gallery/01l.png";
import img02l from "../images/gallery/02l.png";
import img03l from "../images/gallery/03l.png";
import img04l from "../images/gallery/04l.png";
import img05l from "../images/gallery/05l.png";

import FancyBoxWrapper from "../components/FancyBoxWrapper.vue";
</script>

<template>
  <FancyBoxWrapper
    :options="{
      Carousel: {
        infinite: true,
      },
    }"
  >
    <section
      class="wrapper grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-stretch"
    >
      <div class="col-span-2 row-span-2">
        <a data-fancybox="gallery" :href="img01l">
          <img :src="img01" alt="" />
        </a>
      </div>
      <div>
        <a data-fancybox="gallery" :href="img02l">
          <img :src="img02" alt="" />
        </a>
      </div>
      <div>
        <a data-fancybox="gallery" :href="img03l">
          <img :src="img03" alt="" />
        </a>
      </div>
      <div>
        <a data-fancybox="gallery" :href="img04l">
          <img :src="img04" alt="" />
        </a>
      </div>
      <div>
        <a data-fancybox="gallery" :href="img05l">
          <img :src="img05" alt="" />
        </a>
      </div>
    </section>
  </FancyBoxWrapper>
</template>

<style scoped></style>

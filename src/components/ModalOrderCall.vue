<script setup lang="ts">
import StyledButton from "./StyledButton.vue";
import { useModalStore } from "../store/store";
import { storeToRefs } from "pinia";
const modalStore = useModalStore();
const { isModalOpened } = storeToRefs(modalStore);
</script>
<template>
  <teleport to="#modal">
    <div
      class="fixed inset-0 overflow-y-hidden bg-black bg-opacity-50 z-50"
      @click.self="isModalOpened = false"
    >
      <div class="bg-white m-auto w-[90%] lg:w-[540px] mt-6 lg:mt-16">
        <form class="flex flex-col gap-6 p-6 lg:p-16">
          <h3 class="text-[#22253B] text-[32px] text-center font-bold">
            Заказать звонок
          </h3>
          <div class="flex flex-col">
            <label for="name">Имя</label>
            <input type="text" id="name" placeholder="Ваше  имя" />
          </div>
          <div class="flex flex-col">
            <label for="tel">Телефон</label>
            <input type="tel" id="tel" placeholder="+ 7 XXX - XX - XX" />
          </div>
          <div class="flex flex-col">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="mail@site.com" />
          </div>
          <div class="flex flex-col">
            <label for="message">Сообщение</label>
            <input type="textarea" id="message" placeholder="Ваше сообщение" />
          </div>
          <div>
            <p class="text-[#9F9F9F] text-[16px]">
              Нажимая кнопку «Отправить», соглашаюсь с
              <span class="text-[#F15525]">политикой конфидениальности</span>
            </p>
          </div>
          <StyledButton text="Отправить" class="self-start" />
        </form>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
input {
  @apply border-[1px] border-[#9F9F9F] rounded-[10px] p-4;
}
label {
  @apply text-[16px];
}
</style>

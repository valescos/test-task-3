import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modals", () => {
  const isModalOpened = ref(false);
  const isMenuOpened = ref(false);

  return { isModalOpened, isMenuOpened };
});

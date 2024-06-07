<script setup>
import { Map, MapStyle, Marker, config } from "@maptiler/sdk";
import { shallowRef, onMounted, onUnmounted, markRaw } from "vue";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  config.apiKey = "x5tpHUnKVm9Uxbh1xKFS";

  const initialState = { lng: 82.92632, lat: 55.029064, zoom: 14 };

  map.value = markRaw(
    new Map({
      container: mapContainer.value,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      logoPosition: "top-left",
    })
  );
  new Marker({ color: "#F15525" })
    .setLngLat([82.92632, 55.029064])
    .addTo(map.value);
}),
  onUnmounted(() => {
    map.value?.remove();
  });
</script>

<template>
  <div class="wrapper relative h-[420px] rounded-[30px] overflow-hidden">
    <div class="absolute w-full h-full" ref="mapContainer" />
  </div>
</template>

<style scoped></style>

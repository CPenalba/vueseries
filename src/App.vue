<template>
  <div>
    <MenuSeries />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuSeries from "./components/MenuSeries.vue";

export default {
  name: "App",
  components: {
    MenuSeries,
  },
};
</script>

<style></style>

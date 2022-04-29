<template lang="pug">
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLayout from "@/components/TheLayout.vue";
export default defineComponent({
  name: "main-page",
  components: {
    TheLayout,
  },
});
</script>
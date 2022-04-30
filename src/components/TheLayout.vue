<template lang="pug">
.mane-page 
  SideBar
  router-view
  Footer
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar/SideBar.vue";
import Campaigns from "@/components/Campaigns/Campaigns.vue";
import Footer from "@/components/Footer/Footer.vue";

export default defineComponent({
  name: "TheLayout",
   components: {
    SideBar,
    Campaigns,
    Footer,
  },

});
</script>

<style lang="scss">
@import "../assets/style/helpers/reset.scss";
.main-page {
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0px;

}
</style>
<template lang="pug">
.campaigns-menu
.column
  h1 Campaigns
  p In Defense of Animals has campaigned to protect animals, people and the environment for over 30 years.
  p Our mission is to defend animals, humans and the environment from abuses and exploitation, and to foster peace between all life. Through our campaigns, we advocate change in laws, human behavior, and enlightenment in the need to protect lives, advance rights, improve welfare, and steward environmental protection.
  .list
    .campaigns-img(v-for="(box, i) in campImgs")
      .box(:style="{ backgroundImage: 'url(' + require('../../assets/' + box.imgs) + ')' }")
        h3 {{ box.name }}
.banner
  .box
  .box-gradient

    
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
export default defineComponent({
  name: "Campaigns",
  computed: {
    ...mapState("campaingsModule", ["campImgs"]),
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/style/helpers/reset.scss";
.campaigns-menu {
  position: relative;
  background-color: #6bb547;
  text-align: center;
  padding: 0rem 2rem;
  max-width: 100%;
  height: 118px;
}

.column {
  max-width: 1000px;
  height: 100%;
  margin: auto;
  padding: 0px 30px 0px 30px;

  h1 {
    margin-top: 60px;
    color: #2d2378;
    padding-top: 0rem;
    padding-bottom: 1.75rem;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #444;
  }
  p {
    margin-bottom: 1rem;
    font-size: inherit;
    color: #444;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0.825rem;
    padding-right: 0.825rem;
    margin-top: 70px;

    .campaigns-img {
      width: 320px;
      height: 340px;
      margin-bottom: 8px;

      .box {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        h3 {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          color: #fff;
          font-size: 1.4375rem;
          line-height: 1.6562rem;
        }
      }
    }
  }
}
.banner {
  position: relative;
  width: 100%;
  height: 448px;
  background-color: #01001A;
  .box{
  width: 809px;
  height: 448px;
  background-image: url("../../assets/banner-img.jpg");
  background-size: 100% 100%;
  }
  .box-gradient {
    margin-top: -448px;
    width: 100px;
    height: 448px;
    position: absolute;
    left: 750px;
    background-image: linear-gradient(90deg, rgba(255,255,255,0), #000);
  }
}
</style>

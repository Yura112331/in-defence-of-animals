<template lang="pug">
section.general-menu   
    .menu
        .logo
            .icon
        .top-bar
            router-link(
                v-for="(item, i) in routers",
                active-class="link",
                :to="item.url",
                :key="'routers' + i"
                ) {{ item.name }}
            router-link.donate(to="/donate") DONATE
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBar",
  data() {
    return {
      routers: [
        {
          name: "HOME",
          url: "/home",
        },
        {
          name: "ABOUT",
          url: "/about",
        },
        {
          name: "CAMPAIGNS",
          url: "/campaigns",
        },
        {
          name: "SANCTUARIES",
          url: "/sanctuaries",
        },
        {
          name: "NEWS",
          url: "/news",
        },
        {
          name: "TAKE ACTION",
          url: "/take-action",
        },
        {
          name: "SHOP",
          url: "/shop",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/style/helpers/reset.scss";
.general-menu {
  position: fixed;
  width: 100%;
  height: 62px;
  background-color: #313141;
  z-index: 100;

  .menu {
    margin: auto;
    width: 1000px;
    padding-top: 0.75rem;
    display: flex;
    justify-content: space-between;

    .logo {
      padding: 0.5rem;
      width: 114px;
      height: auto;
      background-color: #fff;
      border-radius: 5px 5px 0px 0px;
      cursor: pointer;
      .icon {
        background-image: url("../../assets/ida-logo.svg");
        height: 34px;
        background-size: 100%;
        background-color: #fff;
      }
    }
    .top-bar {
      margin-top: 16px;
      a {
        margin: 0.2rem 0.5rem 0.25rem 0.5rem;
        padding: 1rem 0rem 0.25rem 0rem;
        color: #fff;
        border-bottom: 2px solid transparent;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
      }
      a:hover {
        color: #9fd385;
      }

      .donate {
        background-color: #ffde00;
        color: #2d2378;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 5px 5px 0px 0px;
      }
      .donate:hover {
        background-color: #ffc400;
        color: #fff;
      }
    }
  }
}
</style>

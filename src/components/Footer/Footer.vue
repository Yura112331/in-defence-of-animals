<template lang="pug">
.footer-box
    .row-info
        .contacts
            p CONTACTS
            p PRIVACY
            p TERMS OF USE
        .number 
            p ANIMAL ACTIVIST SUPPORT LINE
            h5 1 800 705 0425
            button ASK FOR CARE
    .row-share 
        .adress
            p IN DEFENSE OF ANIMALS
            p 3010 KERNER BLVD
            p SAN RAFAEL
            p CA 94901
            p 415-448-0048
            h5 © 2021 IN DEFENSE OF ANIMALS
        .messengers
            a.facebook(href="https://www.facebook.com/indefenseofanimals/")
            a.twitter(href="https://twitter.com/IDAUSA")
            a.instagram(href="https://www.instagram.com/ida_international/")
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
@import "../../assets/style/helpers/reset.scss";
.footer-box {
  width: 100%;
  height: 335px;
  background-color: #313141;
  color: #fff;
  padding-bottom: 3rem;

  .row-info {
    display: flex;
    width: 1000px;
    margin: auto;
    height: 140px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    .contacts {
      display: flex;
      width: 66%;
      padding: 0 0.9375rem;

      p {
        font-size: 0.75rem;
        line-height: 0.925rem;
        margin-right: 1rem;
        padding-bottom: 0.25rem;
      }
    }
    .number {
      text-align: center;
      p {
        font-size: 0.75rem;
        line-height: 0.925rem;
      }
      h5 {
        color: #ffde00;
      }
      button {
        width: 100%;
        max-width: 280px;
        margin-top: 1rem;
        font-size: 0.75rem;
        line-height: 0.925rem;
        background-color: #ffde00;
        color: #2d2378;
        border-radius: 5px;
        padding: 1rem 1.5rem;
        height: auto;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .row-share {
    width: 1000px;
    height: 147px;
    padding: 0 1.5rem;
    max-width: 62.5rem;
    margin: auto;

    p {
      font-size: 0.7rem;
      line-height: 0.9rem;
    }
    h5 {
        margin-top: 30px;
        font-size: 5px;
    }
    .messengers {
        width: 111px;
        height: 32px;
        .facebook {
            width: 32px;
            height: 32px;
            background-image: url("../../assets/facebook.png");
        }
        .twitter {
            width: 32px;
            height: 32px;
            background-image: url("../../assets/twitter.png");
        }
        .instagram {
            width: 32px;
            height: 32px;
            background-image: url("../../assets/instagram.png");
            background-size: 32px;
        }

    }
  }
}
</style>

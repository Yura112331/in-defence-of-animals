<template lang="pug">
.not-found
  h2 404
  h3 Not Found
  hr
  p(@click="$router.push('/')") Back
</template>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  background-color: rgb(235, 227, 227);
  height: 100vh;
  h2 {
    font-size: 200px;
  }
  h3 {
    font-size: 100px;
  }
  p {
    color: rgb(156, 58, 58);
    font-size: 40px;
    cursor: pointer;
    margin-top: 20px;
  }
}
</style>
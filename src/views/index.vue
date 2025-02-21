<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Hello World</h1>
        <button @click="getSetting">提交</button>
      </div>
    </div>
    <tesPage></tesPage>
  </div>
</template>
<script lang="ts" setup>
const name = ref()
const getSetting = () => {
  backendCfg().then((res) => {
    console.log(res)
  })
}
</script>
<style lang="scss" scoped></style>

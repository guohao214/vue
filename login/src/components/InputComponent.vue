<template>
  <div class="">
    <slot>
      默认提示
    </slot>
    <input v-bind:type= {{ typeName }}  class="input" />{{ typeName }}
    <slot name="errorMessage">请输入信息</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['typeName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  border:1px solid #CCC;
  color:red;
  padding:8px 10px;
  margin:10px;
}
</style>

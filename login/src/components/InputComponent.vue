<template>
  <div class="">
    <input v-bind:type= {{ typeName }}  class="input" />{{ typeName }}
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

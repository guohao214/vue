<template>
  {{ this.test = "password" }}
  <div class="">
    <input :typeName= {{ test }}  class="input" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['typeName', 'test']
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

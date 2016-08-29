<template>
  <div class="">
    <input type={{ this.props.type }} class="input"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
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

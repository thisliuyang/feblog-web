<template>
  <section class="container">
    <div class="wrapper">fsa</div>
  </section>
</template>
<script>
export default {
  data () {
    return {}
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
<style scoped>
</style>
<template>
  <footer>
    <div class="wrapper">
      <div class="copyright"><a href="/">www.feblog.cn</a> - 专注前端博客 Copyright© Author thisliuyang@gmail.com</div>
      <div>
        <a href="http://www.beian.miit.gov.cn">鄂ICP备19004686号-3</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #292929;
  min-height: 80px;
  .wrapper {
    color: #fff;
    text-align: center;
    a {
      color: #fff;
    }
  }
}
</style>
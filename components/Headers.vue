<template>
  <header>
    <div class="wrapper">
      <a href="/" class="logo-lick">
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo">
      </a>
      <nav>
        <ul class="nav-list">
          <nuxt-link class="" to="/">首页</nuxt-link>
          <nuxt-link to="/">话题</nuxt-link>
          <nuxt-link to="/">工具</nuxt-link>
          <nuxt-link to="/">教程</nuxt-link>
          <nuxt-link to="/">关于</nuxt-link>
        </ul>
        <div class="handle-list">
          <a-input-search placeholder="搜索文章" style="width: 200px" @search="onSearch" />
          <div class="write-article">写文章</div>
          <div class="auth">
            <span class="login_btn">登录</span>
            <span>注册</span>
          </div>
        </div>

      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    onSearch(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
@brandcolor: #007fff;
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #fff;
}
.wrapper {
  display: flex;
  align-items: center;
  max-width: 960px;
  height: 60px;
  margin: 0 auto;
  .logo-lick {
    margin-right: 24px;
  }
}

nav {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #71777c;
  font-size: 16px;
  .nav-list {
    display: flex;
    .nuxt-link-active {
      padding: 0 18px;
    }
  }
  .handle-list {
    display: flex;
    align-items: center;
    color: @brandcolor;
    .write-article {
      padding: 0 18px;
    }
    .login_btn {
      &::after {
      content: "·";
        margin: 0px 8px;
      }
    }
  }
}


</style>
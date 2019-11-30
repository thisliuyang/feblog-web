<template>
  <header>
    <div class="wrapper">
      <a href="/" class="logo-lick">
        <img class="logo" src="/img/feBlog.svg" alt="logo">
      </a>
      <nav>
        <div class="nav-list">
          <nuxt-link v-for="(nav, index) in navList" :key="index" class="nuxt-link-active" :to="nav.router">{{ nav.title }}</nuxt-link>
        </div>
        <div class="handle-list">
          <a-input-search placeholder="搜索文章" style="width: 200px" @search="onSearch" />
          <nuxt-link :to="'createArticle'" class="write-article">写文章</nuxt-link>
          <div class="auth">
            <span class="login_btn cursor_pointer">登录</span>
            <span class="cursor_pointer">注册</span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        { router: { name: 'index' }, title: '首页' },
        { router: { name: 'a' }, title: '话题' },
        { router: { name: 'b' }, title: '工具' },
        { router: { name: 'c' }, title: '关于' }
      ]
    }
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
  z-index: 9;
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
    .logo {
      width: 100px;
      height: 60px;
    }
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
      &:hover {
        color: @brandcolor;
      }
    }
  }
  .handle-list {
    display: flex;
    align-items: center;
    color: @brandcolor;
    .write-article {
      padding: 0 18px;
      &:hover {
        color: @brandcolor;
      }
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
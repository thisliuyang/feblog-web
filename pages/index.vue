<template>
  <section class="container">
    <div class="wrapper">
      <article class="article">
        <nav class="article-nav">
          <div
          v-for="(nav, index) in articleNav"
          :key="index"
          @click="changeArticleDesc(nav.desc, index)"
          :class="['article-nav-item', index === navIndex && 'article-nav-item--active']">
            <span :class="['iconfont', nav.icon]"></span>
            <span>{{nav.name}}</span>
          </div>
        </nav>
        <div class="article-list">
          <div class="article-item">
            <div class="article-content">
              <div class="article-title">DNS与解析</div>
              <div class="article-info">
                <div class="article-category">nodejs</div>
                <div class="article-author">
                  <span class="iconfont icon-zuozhe"></span>
                  <span>刘洋</span>
                </div>
                <div class="article-browse">
                  <span class="iconfont icon-eye"></span>
                  <span>235</span>
                </div>
                <div class="article-browse">
                  <span class="iconfont icon-pinglun"></span>
                  <span>33</span>
                </div>
                <div class="article-create-at">
                  <span class="iconfont icon-shijian"></span>
                  <span>2019-11-29</span>
                </div>
              </div>
            </div>
            <div class="article-img">
              <img src="http://q0mv5lv4t.bkt.clouddn.com/FmPuGBOmgaaoVKBbQUHHygvqvSMD" alt="">
            </div>
          </div>
        </div>
      </article>
      <div class="sidebar">
        <div class="category">
          <div class="category-title">
            <span class="iconfont icon-zuozhe"></span>
            <span>分类</span>
          </div>
          <ul class="category-list">
            <li class="category-item">全部文章</li>
            <li class="category-item">html（8）</li>
            <li class="category-item">vuejs（9）</li>
            <li class="category-item">nodejs（88）</li>
            <li class="category-item">js（6）</li>
            <li class="category-item">小程序（66）</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'FEblog - 专注前端开发博客'
    }
  },
  data () {
    return {
      articleNav: [
        {name: '最新', icon: 'icon-zuixinnew3', desc: 'created_at'},
        {name: '最热', icon: 'icon-remen', desc: 'browse'}
      ],
      navIndex: 0
    }
  },
  methods: {
    changeArticleDesc(desc, index) {
      console.log(desc)
      this.navIndex = index
    }
  }
}
</script>

<style lang="less">
@brandcolor: #007fff;

.container {
  height: 100%;
  padding-top: 60px;
  min-height: 100vh;
  .wrapper {
    display: flex;
    margin-top: 20px;
  }
  .article {
    flex: 1;
    height: 100%;
    background: #fff;
    .article-nav {
      display: flex;
      padding: 16px 12px;
      border-bottom: 1px solid #efefef;
      .article-nav-item {
        margin-right: 8px;
        &:hover {
          color: @brandcolor;
        }
      }
      .article-nav-item--active {
        color: @brandcolor;
      }
    }
    .article-list {
      .article-item {
        display: flex;
        justify-content: space-between;
        padding: 18px;
        .article-content {
          .article-title {
            color: #464c5b;
            font-size: 16px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .article-info {
            display: flex;
            align-items: center;
            margin-top: 24px;
            > div {
              margin-right: 14px;
            }
            .article-category {
              line-height: 24px;
              padding: 0 20px;
              font-size: 16px;
              color: #409eff;
              border-radius: 20px;
              background: rgba(51,119,255,.1);

            }
          }
        }
        .article-img {
          width: 56px;
        }
      }
    }
  }
  .sidebar {
    width: 230px;
    margin-left: 20px;
    .category {
      background: #fff;
      padding: 12px;
      .category-title {
        color: #464c5b;
        font-size: 18px;
        border-bottom: 1px solid #f0f0f0;
      }
      .category-list {
        padding-top: 10px;
        .category-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}

</style>

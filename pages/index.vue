<template>
  <section class="container">
    <div class="wrapper">
      <article class="article">
        <nav class="article-nav">
          <div
            v-for="(nav, index) in articleNav"
            :key="index"
            @click="changeArticleDesc(nav.desc, index)"
            :class="['article-nav-item', 'cursor_pointer', index === navIndex && 'article-nav-item--active']">
            <span :class="['iconfont', nav.icon]"></span>
            <span>{{nav.name}}</span>
          </div>
        </nav>
        <div class="article-list">
          <div 
            v-for="article in articleList.data"
            :key="article.id"
            @click="goArtilceDetail(article.id)"
            class="article-item">
            <div class="article-content">
              <div class="article-title">{{article.title}}</div>
              <div class="article-info">
                <div class="article-category">{{article.category_detail && article.category_detail.name}}</div>
                <div class="article-author">
                  <span class="iconfont icon-zuozhe4"></span>
                  <span>{{article.author}}</span>
                </div>
                <div class="article-browse">
                  <span class="iconfont icon-yanjing8"></span>
                  <span>{{article.browse}}</span>
                </div>
                <div class="article-browse">
                  <span class="iconfont icon-comment"></span>
                  <span>{{article.comments_nums}}</span>
                </div>
                <div class="article-create-at">
                  <span class="iconfont icon-time"></span>
                  <span>{{article.created_at}}</span>
                </div>
              </div>
            </div>
            <div class="article-img">
              <img :src="article.cover" alt="图片">
            </div>
          </div>
        </div>
      </article>
      <div class="sidebar">
        <div class="category">
          <div class="category-title">
            <span class="iconfont icon-category"></span>
            <span>分类</span>
          </div>
          <ul class="category-list">
            <li class="category-item">全部文章</li>
            <li v-for="category in categorylist" :key="category.id" class="category-item">{{category.name}}（ {{category.article_nums}} ）</li>
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
  async asyncData ({ $axios, error, req }) {
    try {
      console.log(req, $axios)
      let [articleList, categorylist] = await Promise.all([$axios.$get('/user/article'), $axios.$get('/user/category')])

      if (articleList.code === 200) {
        return {
          articleList: articleList.data,
          categorylist: categorylist.data
        }
      }
    }catch {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  data () {
    return {
      articleNav: [
        {name: '最新', icon: 'icon-zuixin', desc: 'created_at'},
        {name: '最热', icon: 'icon-remen', desc: 'browse'}
      ],
      navIndex: 0,
      articleList: [],
      categorylist: []
    }
  },
  methods: {
    goArtilceDetail (id) {
      this.$router.push({
        path: `/article-detail/${id}`
      })
    },
    changeArticleDesc(desc, index) {
      console.log(desc)
      console.log(this.$router)
      this.$router.push({
        path: '/',
        query: { plan: 'private' }
      })
      this.navIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
@brandcolor: #007fff;
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
      cursor: pointer;
      border-bottom: 1px solid #f4f4f4;
      &:hover {
        background: #f4f4f4;
      }
      &:hover .article-content > .article-title {
        color: #409EFF;
      }
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
</style>

<template>
  <section class="container">
    <div class="wrapper">
      <mavon-editor
        style="height: 100%"
        :ishljs="true"
        class="article-detail"
        v-model="article.content"
        :defaultOpen="'preview'"
        :editable="false"
        :subfield="false"
        :toolbarsFlag="false">
      </mavon-editor>
      <Sidebar :categorylist="categorylist"/>
    </div>
  </section>
</template>
<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  data () {
    return {
      article: {}
    }
  },
  components: {
    Sidebar
  },
  async asyncData ({ $axios }) {
    try {
      let [article, categorylist] = await Promise.all([$axios.$get('/user/article/5'), $axios.$get('/user/category')])
      if (article.code === 200) {
        return {
          article: article.data,
          categorylist: categorylist.data
        }
      }
    }catch {
      error({ statusCode: 404, message: 'Post not found' })
    }

  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
<style lang="less" scoped>
.container {
  .wrapper {
    display: flex;
  }
  .article-detail {
    width: 700px;
  }
}
</style>
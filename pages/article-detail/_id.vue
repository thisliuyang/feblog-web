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
  async asyncData ({ $axios, params }) {
    try {
      let [article, categorylist] = await Promise.all([$axios.$get(`/user/article/${params.id}`), $axios.$get('/user/category')])

      return {
        article: article,
        categorylist: categorylist
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
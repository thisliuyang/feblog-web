<template>
  <section class="container">
    <div class="wrapper" id="article-detail">
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
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  async asyncData ({ $axios }) {
    try {
      let { data : { code, data } } = await $axios.get('/user/article/5')
      if (code === 200) {
        return {
          article: data
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
  padding-top: 90px;
  .article-detail {
    width: 700px;
  }
}
</style>
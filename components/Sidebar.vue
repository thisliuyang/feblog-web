<template>
  <div class="sidebar">
    <div class="category">
      <div class="category-title">
        <span class="iconfont icon-category"></span>
        <span>分类</span>
      </div>
      <ul class="category-list">
        <li class="category-item">全部文章</li>
        <li v-for="category in categorylist"
          :key="category.id"
          @click="changeArticleCategory(category.id)"
          class="category-item cursor_pointer"
          >{{category.name}}（ {{category.article_nums}} ）</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    categorylist: {}
  },
  methods: {
    changeArticleCategory (categoryId) {
      this.$emit('changeArticleCategory', categoryId)
    }
  }
}
</script>
<style lang="less" scoped>
.sidebar {
  margin-left: 20px;
  width: 230px;
  .category {
    position: fixed;
    width: 230px;
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
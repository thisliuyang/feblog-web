<template>
  <section class="container padding-top90">
    <div class="wrapper">
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="文章标题"
          >
          <a-input
            v-decorator="['title', ruleValidateConfig.articleTitle]"
            placeholder="请输入文章标题"
            />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="作者"
          >
          <a-input
            v-decorator="['author', ruleValidateConfig.author]"
            placeholder="请输入文章作者"
            />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="文章分类"
          >
          <a-select
            showSearch
            placeholder="请选择文章分类"
            optionFilterProp="children"
            style="width: 200px"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleSelectChange"
            v-if="categorylist.length"
            :filterOption="filterOption"
            >
              <a-select-option v-for="a in categorylist" :key="a.id" :value="a.id">{{a.name}}</a-select-option>
            </a-select>
          </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="文章封面"
          >
          <a-upload-dragger
            name="file"
            :multiple="true"
            listType="picture"
            :data="{token}"
            action="https://up-z1.qiniup.com"
            @change="handleUploadChange"
            >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">点击或者拖动上传</p>
          </a-upload-dragger>
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="文章内容"
          >
          <mavon-editor
            v-model="formValidate.content"
            :ishljs="true"
            ref="md"
            >
          </mavon-editor>
        </a-form-item>
        <a-form-item>
          <a-button @click="handleSubmit('formValidate')" type="primary">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData ({ $axios, error, req }) {
    try {
      let [token, categorylist] = await Promise.all([$axios.$get('/user/qiniutoken'), $axios.$get('/user/category')])
      return {
        token: token.data,
        categorylist: categorylist.data
      }
    }catch {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  data () {
    return {
      token: '',
      categorylist: [],
      form: this.$form.createForm(this),
      formValidate: {
        title: '',
        author: '',
        category_id: '',
        cover: '',
        content: ''
      },
      ruleValidateConfig: {
        articleTitle: {
         rules: [{ required: true, message: '请输入文章标题' }]
        },
        author: {
          rules: [{ required: true, message: '请输入文章作者' }]
        }
      },
      confirmLoading: false,
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
      },
      accept: '.jpg, .jpeg, .png',
      uploadData: {},
      headers: {},
      fileList: []
    }
  },
  methods: {
    handleSubmit (value) {
      console.log(value)
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.formValidate = {
            ...this.formValidate,
            ...values
          }
          let { data: { code, msg } } = await this.$axios.post('/user/article', this.formValidate)
          if (code === 200) {
            console.log(msg)
            this.$message.success(msg)
          }
        }
      })
    },
    handleSelectChange (value) {
      this.formValidate.category_id = value
    },
    handleUploadChange ({ file, fileList }) {
      if (file.status === 'done') {
        this.formValidate.cover = `http://file.feblog.cn/${file.response.key}`
        this.$message.success(`${file.name} 上传成功`)
      } else if (file.status === 'error') {
        this.$message.error(`${file.name} 上传失败`)
      }
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    },
    handleRemovePhoto () {

    },
    handleChange () {

    }
  },
  created () {
  }
}
</script>
<style scoped>
</style>
<template>
  <div class="container">
    <div id="toolbar"></div>
    <div id="editor" @dblclick="onDoubleClick"></div>
    <el-dialog ref="dialog" :visible.sync="dialog" title="查看源码" width="80%" @opened="onDialogOpened">
      <el-input ref="textarea" type="textarea" rows="20" v-model="content"></el-input>
    </el-dialog>
  </div>
</template>

<script>
import E from 'wangeditor'

export default {
  name: "Editor",
  data() {
    return {
      editor: null,
      content: '',
      dialog: false,
    }
  },
  created() {
  },
  methods: {
    onDoubleClick(){
      this.dialog = true
    },
    onDialogOpened(){
      this.$refs.textarea.select()
    },
  },
  mounted() {
    const editor = new E('#toolbar', '#editor')

    editor.config.onchange = content => {
      this.content = content
    }
    editor.config.height = 400
    editor.config.zIndex = 100

    editor.config.menus = []

    editor.create()
    editor.fullScreen();

    this.editor = editor
  },
  beforeDestroy() {
    this.editor.destroy()
    this.editor = null
  },
}
</script>

<style>
html, body, #app, .container {
  height: 100%;
  margin: 0;
}

#toolbar {
  display: none;
}
</style>
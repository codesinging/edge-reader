<template>
  <div class="container">
    <div id="toolbar"></div>
    <div id="editor"></div>
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
    }
  },
  created() {
  },
  mounted() {
    const editor = new E('#toolbar', '#editor')

    editor.config.onchange = content => {
      this.content = content
    }
    editor.config.height = 400

    editor.config.menus = []

    editor.create()
    editor.fullScreen();

    this.editor = editor
  },
  beforeDestroy() {
    this.editor.destroy()
    this.editor = null
  }
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
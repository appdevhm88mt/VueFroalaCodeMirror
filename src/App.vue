<template>
  <div id="app">
    <froala
      ref="editor"
      :immediateVueModelUpdate="true"
      :tag="'textarea'"
      :config="config"
      v-if="!loading"
      v-model="v_text"
    ></froala>
    <button @click="getCode">Get Code</button>
    {{ code }}
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    getCode() {
      this.editor.codeView.toggle();
      this.code = this.editor.html.get();
      this.editor.codeView.toggle();
    },
  },
  data() {
    this.v_text = "";
    return {
      editor: null,
      code: "",
      config: {
        iframe: true,

        htmlRemoveTags: ["script"],
        immediateVueModelUpdate: true,
        codeMirrorOptions: {
          indentWithTabs: true,
          lineNumbers: true,
          lineWrapping: true,
          mode: "text/html",
          tabMode: "indent",
          tabSize: 2,
        },
        events: {
          "codeView.update": function () {
            // Do something here.
            // this is the editor instance.
            console.log(this);
          },
          initialized: function () {
            let editor = this;
          },
        },
      },
    };
  },
  mounted() {
    console.log("text", this);
    this.v_text = "testing message";
    this.loading = false;
  },
};
</script>

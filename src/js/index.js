import Vue from 'vue'
import Color from 'color-factory'
import clipboard from 'clipboard-js'

export default new Vue({
  el: '#app',
  data () {
    return { inputValue: '' }
  },
  methods: {
    copy (color) {
      clipboard.copy(color)
    },
    focus (e) {
      e.target.focus()
      e.target.select()
    }
  },
  get computed() {
    const observer = {}
    const colorTypes = ['HEX', 'RGB', 'RGBA', 'HSL', 'HSLA', 'STRING']
    colorTypes.forEach(key => observer[key] = function () {
      return (new Color(this.inputValue))[`to${key}`]()
    })
    return observer
  }
})

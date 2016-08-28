import Vue from 'vue'
import Color from 'color-factory'

export default new Vue({
  el: '#app',
  data () {
    return { inputValue: '' }
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

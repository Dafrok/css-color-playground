import Vue from 'vue'
import Color from 'color-factory'

const colorTypes = ['HEX', 'RGB', 'RGBA', 'HSL', 'HSLA', 'STRING']
export default new Vue({
  el: '#app',
  data () {
    const data = {color: {}}
    colorTypes.forEach(key => data.color[key] = '')
    return data
  },
  get computed() {
    const observer = {}
    colorTypes.forEach(key => observer[key] = {
      get () {
        return this.color[key]
      },
      set (val) {
        this.setColor(val)
      }
    })
    return observer
  },
  methods: {
    setColor(val) {
      const color = new Color(val)
      colorTypes.forEach(key => this.color[key] = color[`to${key}`]())
    }
  }
})

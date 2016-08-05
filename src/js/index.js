import Vue from 'vue'
import Color from 'color-factory'

const app = new Vue({
  el: '#app',
  data () {
    return {
      color: {
        HEX: '',
        RGB: '',
        RGBA: '',
        HSL: '',
        HSLA: '',
        STRING: ''
      }
    }
  },
  methods: {
    setColor (val) {
      const color = new Color(val)
      console.log(val)
      this.color.HEX = color.toHEX()
      this.color.RGB = color.toRGB()
      this.color.RGBA = color.toRGBA()
      this.color.HSL = color.toHSL()
      this.color.HSLA = color.toHSLA()
      this.color.STRING = color.toSTRING()
    }
  },
  computed: {
    HEX: {
      get () {
        return this.color.HEX
      },
      set (val) {
        this.setColor(val)
      }
    },
    RGB: {
      get () {
        return this.color.RGB
      },
      set (val) {
        this.setColor(val)
      }
    },
    RGBA: {
      get () {
        return this.color.RGBA
      },
      set (val) {
        this.setColor(val)
      }
    },
    HSL: {
      get () {
        return this.color.HSL
      },
      set (val) {
        this.setColor(val)
      }
    },
    HSLA: {
      get () {
        return this.color.HSLA
      },
      set (val) {
        this.setColor(val)
      }
    },
    STRING: {
      get () {
        return this.color.STRING
      },
      set (val) {
        this.setColor(val)
      }
    }
  }
})

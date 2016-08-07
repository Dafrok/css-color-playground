import Vue from 'vue'
import Color from 'color-factory'

function createApp () {
  const colorTypes = ['HEX', 'RGB', 'RGBA', 'HSL', 'HSLA', 'STRING']
  function createData() {
    const data = {color: {}}
    colorTypes.forEach(key => data.color[key] = '')
    return data
  }

  function createObserver() {
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
  }

  function createSetter() {
    return function (val) {
      const color = new Color(val)
      colorTypes.forEach(key => this.color[key] = color[`to${key}`]())
    }
  }
  return new Vue({
    el: '#app',
    data () {
      return createData.call(this)
    },
    get computed() {
      return createObserver.call(this)
    },
    get methods() {
      return { setColor: createSetter.call(this) }
    }
  })
}

const app = createApp()

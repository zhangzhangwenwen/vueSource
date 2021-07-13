import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 定义了init方法
initMixin(Vue)
stateMixin(Vue)
// vue事件相关的定义
eventsMixin(Vue)
// 生命周期定义
lifecycleMixin(Vue)
//render定义
renderMixin(Vue)

export default Vue

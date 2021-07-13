/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // dom操作的方法 定义在这里
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// 实现
export const patch: Function = createPatchFunction({ nodeOps, modules })

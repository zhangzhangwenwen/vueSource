/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options) // 生成ast
  if (options.optimize !== false) {
    optimize(ast, options) // 标记静态节点
  }
  const code = generate(ast, options) // 生成代码字符串
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})


import fs from 'fs'
import parser from '@babel/parser'
import traverse from "@babel/traverse";
import path from 'path'
import ejs from 'ejs'
import { transformFromAst } from '@babel/core'

let id = 1
function createAsset(filePath) {
  // 1.获取文件的内容
  let source = fs.readFileSync(filePath, {
    encoding: "utf-8"
  })

  // 2.获取依赖的关系
  const ast = parser.parse(source, {
    sourceType: 'module'
  })

  const deps = []
  traverse.default(ast, {
    ImportDeclaration({ node }) {
      deps.push(node.source.value)
    }
  })
  let { code } = transformFromAst(ast, null, {
    presets: ['env']
  });
  return {
    filePath,
    code,
    deps,
    mapping: {},
    id: id++
  }
}


function createGraph() {
  const mainAsset = createAsset('./example/main.js');
  const queue = [mainAsset]

  for (const asset of queue) {
    asset.deps.forEach((relativePath) => {
      const child = createAsset(path.resolve('./example', relativePath))
      asset.mapping[relativePath] = child.id
      queue.push(child)
    })
  }

  return queue
}

function build(graph) {
  const template = fs.readFileSync('./bundle.ejs', {
    encoding: 'utf-8'
  })

  const data = graph.map((assets) => {
    return {
      id: assets.id,
      code: assets.code,
      mapping: assets.mapping
    }
  })
  console.log(data);
  const code = ejs.render(template, { data });
  fs.writeFileSync('./dist/bundle.js', code)
}
let graph = createGraph()
build(graph)
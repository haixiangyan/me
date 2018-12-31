#!/usr/bin/env ts-node
// process.argv['node', 'add.ts', '1', '2']
let a: number = +process.argv[2]
let b: number = +process.argv[3]

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('只接受整数')
    process.exit(-1)
}
console.log(a + b)
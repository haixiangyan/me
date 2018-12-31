#!/usr/bin/env ts-node

{
    let c: number = +process.argv[2]
    let d: number = +process.argv[3]

    if (Number.isNaN(c) || Number.isNaN(d)) {
        console.log('只接受整数')
        process.exit(1)
    }

    if (d === 0) {
        console.log('除数不能为0')
        process.exit(2)
    }
    console.log(c / d)
}
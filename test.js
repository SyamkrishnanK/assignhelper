// var yoyo = require('./distribution/index.js')

// obj = {
//     a: 10,
//     b: {
//         c: 20
//     }
// }

// console.log(yoyo.getValue(obj, 'b.d'))

import { getValue, assign } from './distribution/index.js'

const obj = {
    a: 10,
    b: {
        c: "success!!!"
    }
}

console.log(assign({}, 'a.b.c', 'yepee!!!!'))

console.log(getValue(obj, 'b.c'))
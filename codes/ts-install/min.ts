interface Person {
    gender: Gender,
}
enum Gender {
    Male,
    Female
}
function marry(a: Person, b: Person): [Person, Person] {
    if (a.gender !== b.gender) {
        return [a, b]
    }
    else {
        throw new Error('不能结婚')
    }
}

let a = {gender: Gender.Male}
let b = {gender: Gender.Female}

console.log(marry(a, b))

// function selectSort(a: number[]): number[] {
//     for (let i = 0; i < a.length - 1; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[j] < a[minIndex]) {
//                 minIndex = j
//             }
//         }
//         let temp = a[minIndex]
//         a[minIndex] = a[i]
//         a[i] = temp
//     }
//     return a 
// }

// console.log(selectSort([5, 4, 3, 2, 1]))
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//     return a + b
// }

// console.log(add('1', '2'))

// function min(a: number, b: number): number {
//     if (a < b) {
//         return a 
//     }
//     else {
//         return b
//     }
// }

// var c = (min(1, 2))
// console.log(c)
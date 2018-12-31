#!/usr/bin/env ts-node
{
    function createPrefix(n: number): string {
        return '--'.repeat(n)
    }
    class Person {
        public children: Person[] = []
        constructor(public name: string) { }
        sayHi() {
            console.log('大家好我是' + this.name)
        }

        addChild(child: Person): void {
            this.children.push(child)
        }
        introduceFamily(n?: number): void {
            n = n || 1
            console.log(`${createPrefix(n - 1)}${this.name}`)
            this.children.forEach((child) => {
                child.introduceFamily(n + 1)
            })
        }
    }

    let grandPa = new Person('Grand Pa')
    let child1 = new Person('Child 1')
    let child2 = new Person('Child 2')
    let person11 = new Person('GrandSon 11')
    let person12 = new Person('GrandSon 21')
    let person21 = new Person('GrandSon 21')
    let person22 = new Person('GrandSon 22')

    child1.addChild(person11)
    child1.addChild(person12)
    child2.addChild(person22)
    child2.addChild(person22)

    grandPa.addChild(child1)
    grandPa.addChild(child2)

    grandPa.introduceFamily()
}
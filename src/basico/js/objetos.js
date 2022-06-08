const user01 = new Object()
user01.id = 1
user01.nome = 'Dudu'
user01.idade = 11

const user02 = new Object()
user02.id = 2
user02.nome = 'Bob'
user02.idade = 9

const user03 = new Object()
user03.id = 3
user03.nome = 'Duda'
user03.idade = 10

const car01 = new Object()
car01['marca'] = 'fiat'

const car02 = new Object()
car02.marca = 'ford'




user01.idade = user01.idade + 1




Object.defineProperty(user01, 'cpf', {
    enumerable: true,
    writable: false,
    value: '000.111.222-33'
})

console.log(user01)
console.log(user02)
console.log(user03)
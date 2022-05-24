// удалить дубликаты из массива
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]
const newArr = Array.from(new Set(arr))

// объединить два объекта в один
const obj1 = {
  id: 1,
  name: 'userName'
}

const obj2 = {
  id: 1,
  password: 'qwerty'
}

const obj = Object.assign(obj1, obj2)

// сократить  объявление функци
// const add = function(x, y) {
//   return x + y
// }
const add = (x, y) => x + y

// написать функцию, с помощью которой можно выполнять действия с задержкой
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
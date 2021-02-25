type messageArray<T> = Array<T>

const hello: messageArray<string> = ['hello', 'world', '\n']

console.log(hello.join(' ').repeat(3))

interface MixedValues {
  [key: string]: number | string
}

interface FunctionMap {
  [key: string]: (...args: any[]) => void
}

interface StringArray {
  [index: number]: string
}

interface Person {
  name: string
  age: number
  [key: string]: any
}

interface Base {
  [key: string]: any
}

interface Extended extends Base {
  specificProperty: boolean
}

function areAllValuesNumbers(obj: { [key: string]: any }): boolean {
  return Object.values(obj).every(value => typeof value === "number")
}

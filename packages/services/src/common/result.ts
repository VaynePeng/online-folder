interface Res<T> {
  code: number
  data: T
  message: string
}

class Result<T> implements Res<T> {
  code: number
  data: T
  message: string

  constructor(result: Res<T>) {
    const { code, data, message } = result
    this.code = code
    this.data = data
    this.message = message
  }
}

export { Result as default, Res }

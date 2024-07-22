const debounce = (cb: Function, delay: number): Function => {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: []) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

export { debounce }

const debounce = (cb: Function, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: []) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

export { debounce }

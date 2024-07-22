const throttle = (cb: Function, delay: number) => {
  let lastCall: number = 0
  let timeout: ReturnType<typeof setTimeout>

  return (...args: []) => {
    const now = Date.now()
    let workingArgs: []

    if (now - lastCall >= delay) {
      cb(...args)
      workingArgs = []
      lastCall = now
    } else {
      workingArgs = [...args]

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        cb(...workingArgs)
        workingArgs = []
      }, delay)
    }
  }
}

export { throttle }

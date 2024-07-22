const throttle = (cb: Function, delay: number): Function => {
  let lastCall: number = 0
  let timeout: ReturnType<typeof setTimeout>

  return (...args: []) => {
    const now = Date.now()
    let workingArgs: [] //this variable to store all the arguments so that we can use it to later call the function when user stops typing

    if (now - lastCall >= delay) {
      // once its more than the delay, we call the function
      cb(...args)
      workingArgs = []
      lastCall = now
    } else {
      // if its not we record its arguments and at the very end, when user stops typing we call the function again
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

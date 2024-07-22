const throttle = (cb: Function, delay: number) => {
  let lastCall: number = 0

  return (...args: []) => {
    const now = Date.now()

    if (now - lastCall >= delay) {
      cb(...args)
      lastCall = now
    }
  }
}

export { throttle }

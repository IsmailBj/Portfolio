export const debounce = (fn:any, ms:any) => {
    let timer:any
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        fn()
      }, ms)
    };
  }
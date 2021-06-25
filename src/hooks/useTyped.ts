import {useEffect, useRef} from "react";
import Typed from "typed.js";

function useTyped(strings: string[]) {
  const el = useRef<HTMLElement | null>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 100,
      backSpeed: 60,
    }

    typed.current = new Typed(el.current || '', options);

    return () => typed.current?.destroy()
  }, [strings])

  return el
}

export default useTyped

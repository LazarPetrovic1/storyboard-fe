import { useEffect, useState } from "react"

function useSize(ref) {
  const [size, setSize] = useState({});
  useEffect(() => {
    if (ref.current != null || ref.current) {
      const observer = new ResizeObserver(([entry]) => {
        const mt = parseInt(getComputedStyle(ref.current).getPropertyValue('margin-top'));
        const mb = parseInt(getComputedStyle(ref.current).getPropertyValue('margin-bottom'));
        const pt = parseInt(getComputedStyle(ref.current).getPropertyValue('padding-top'));
        const pb = parseInt(getComputedStyle(ref.current).getPropertyValue('padding-bottom'));
        const pl = parseInt(getComputedStyle(ref.current).getPropertyValue('padding-bottom'));
        const pr = parseInt(getComputedStyle(ref.current).getPropertyValue('padding-bottom'));
        const ml = parseInt(getComputedStyle(ref.current).getPropertyValue('padding-bottom'));
        const mr = parseInt(getComputedStyle(ref.current).getPropertyValue('padding-bottom'));
        const { bottom, height, left, right, top, width, x, y } = entry.contentRect;
        setSize(() => ({
          bottom, height, left, right, top, width, x, y,
          fullheight: entry.contentRect.height + mt + mb + pt + pb,
          fullwidth: entry.contentRect.width + ml + pl + mr + pr
        }));
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
    // eslint-disable-next-line
  }, [])
  return size;
}

export default useSize;
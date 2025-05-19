import { useEffect, useRef, useState } from 'react';

function AnimatedPrice({ quantity }) {
  const [animatedTotal, setAnimatedTotal] = useState(quantity * 3500);
  const prevTotalRef = useRef(animatedTotal);

  useEffect(() => {
    const start = prevTotalRef.current;
    const end = quantity * 3500;
    const duration = 500;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.round(start + (end - start) * progress);
      setAnimatedTotal(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevTotalRef.current = end;
      }
    }

    requestAnimationFrame(animate);
  }, [quantity]);

  return (
    <span className="price small ml-auto">
      Total: ${animatedTotal.toLocaleString()}
    </span>
  );
}

export default AnimatedPrice;

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window !==  'undefined') {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }};
}
export default function useWindowDimensions() {
  if (typeof window !==  'undefined') {
    if (screen.width < 767.98){
}





/*export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}*/
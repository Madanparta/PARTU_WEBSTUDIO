import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    },300)
  }, [pathname]);
};

export default useScrollToTop;
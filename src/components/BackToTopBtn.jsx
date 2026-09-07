import { useState, useEffect } from 'react';

// import Link
import { animateScroll as scroll } from 'react-scroll';

// import icon
import { FiChevronUp } from 'react-icons/fi';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() => scroll.scrollToTop()}
        aria-label='Back to top'
        className='bg-accent-solid w-12 h-12 hover:bg-accent-solid-hover text-white rounded-full fixed right-10 bottom-10 cursor-pointer flex justify-center items-center transition-all'
      >
        <FiChevronUp size={24} />
      </button>
    )
  );
};

export default BackToTopBtn;

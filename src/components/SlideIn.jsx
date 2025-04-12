import { useEffect, useRef, useState } from 'react';

const SlideIn = ({ children, direction = 'down' }) => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-600 ease-out ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${direction === 'down' ? '-translate-y-24' : 'translate-y-24'}`
                }`}
        >
            {children}
        </div>
    );
}

export default SlideIn
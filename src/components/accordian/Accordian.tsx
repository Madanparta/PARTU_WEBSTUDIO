import { useEffect, useRef, useState, type FC } from "react";
import './accordian.scss';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordian:FC<AccordionProps> = ({items}) => {    
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
        setActiveIndex(null);
        } else {
        setActiveIndex(index);
        }
    };

    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, items.length);
    }, [items]);

  return (
    <div className="accordion-component">
      {items.map((item, index) => (

        <div key={item.id} className={`accordion-item ${activeIndex === index ? 'active' : ''}`} >

          <div  className="accordion-header" onClick={() => toggleAccordion(index)} aria-expanded={activeIndex === index} >
            <span className="accordion-title">{item.title}</span>
            <span className="accordion-icon">
                <p className='arrowdown'>
                    {activeIndex === index ? '−' : '+'}
                </p>
            </span>
          </div>

          <div className="accordion-content" ref={(el) => { contentRefs.current[index] = el;}}  style={{ maxHeight: activeIndex === index  ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }} >
            <div className="accordion-content-inner">
                {item.content.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}<br />
                    </span>
                ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Accordian

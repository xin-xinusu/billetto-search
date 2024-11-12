import { useState } from "react";
import Accordion from '../UI/Accordion';

interface FAQProps {
  questionsArray: {
    question: string;
    answer: string;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ questionsArray }) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      title="FAQ"
    >
      <div className="flow-root">

        <ul className="divide-y divide-gray-600 list-none m-0 p-0">

          {
            questionsArray.length > 0
              ? questionsArray.map(question => <li className="py-5">
                <div className="relative">
                  <h3 className="text-sm font-semibold text-gray-50">
                    
                    {question.question}  
                  </h3>
                </div>
    
                <p className="mt-1 text-sm text-gray-300">
                  {question.answer}
                </p>
              </li>
              ) : <li className="py-5">
                <div className="relative">
                  <h3 className="text-sm font-semibold text-gray-50">
                    We were not able to source any FAQ for this event. 
                  </h3>
                </div>
              </li>
          }
          
          

        </ul>

      </div>
    </Accordion>
  );
};

export default FAQ;

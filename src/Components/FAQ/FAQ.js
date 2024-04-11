import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  // State to manage opened/closed state of each FAQ
  const [openIndexes, setOpenIndexes] = React.useState([]);

  // Function to toggle the visibility of the answer
  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <div>
      <span className="faq-title">Frequently asked questions</span>
      {faqData.map((item, index) => (
        <div key={index}>
          <div
            className="faq-wrapper"
            onClick={() => toggleFAQ(index)}
            style={{ cursor: "pointer" }}
          >
            <div className={openIndexes.includes(index) ? "faq-item-active" : "faq-item-dactive"}>
              <div
                className={openIndexes.includes(index) ? "active" : "question"}
              >
                {item.question}
              </div>
              {openIndexes.includes(index) ? (
                <span className={openIndexes.includes(index) ? "active" : ""}>
                  -
                </span>
              ) : (
                <span>+</span>
              )}
            </div>
            {openIndexes.includes(index) && (
              <div className="answer">{item.answer}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

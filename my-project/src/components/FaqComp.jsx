import React from "react";
const faqs = [
  [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    },
  ],
  [
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change the email address associated with your account by going to account from a laptop or desktop.",
    },
  ],
];
const FaqComp = () => {
  return (
    <div>
      <div className="mt-14 space-y-16 bg-white py-12">
        <div>
          <div className="">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-2xl font-bold leading-10 text-gray-900">
                  FAQS
                </p>
              </div>
              <p className="max-w-xl text-base text-gray-600"></p>
              <hr className="my-8" />
            </div>
          </div>
          {/* faq */}
          {faqs.map((item, index) => (
            <div
              key={`faq-group-${index}`}
              className="grid md:grid-cols-3 md:space-x-8"
            >
              {item.map((faq) => (
                <div key={faq.question} className="my-8 space-y-5">
                  <div className="flex w-full flex-col space-y-2">
                    <p className="w-full text-lg font-semibold text-gray-900">
                      {faq.question}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="mt-10">
            <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4 md:flex-row md:items-center md:p-8 lg:space-x-8">
              <div className="space-y-2">
                <p className="text-xl font-semibold leading-loose text-gray-900">
                  Still have questions?
                </p>
                <p className="text-base text-gray-600 md:text-lg md:leading-7">
                  Can't find the answer you're looking for? Please chat to our
                  friendly team.
                </p>
              </div>
              <button
                type="button"
                className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-0"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComp;

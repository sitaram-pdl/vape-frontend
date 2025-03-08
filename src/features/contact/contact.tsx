import React from 'react';

import ContactDetails from './contact-details';
import ContactForm from './contact-form';

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="mx-auto  w-full md:w-[90%]">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="basis-1/2">
              <ContactForm />
            </div>

            <div className="basis-1/2">
              <ContactDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

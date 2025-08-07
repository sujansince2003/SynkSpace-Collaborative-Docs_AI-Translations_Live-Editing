import React from "react";

const Faq = () => {
  return (
    <section className="bg-white" id="faqs">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-8 text-4xl text-center tracking-tight font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From idea to execution in four simple steps. Experience seamless
            workflow optimization.
          </p>
        </div>

        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                What can I do on this platform?
              </h3>
              <p className="text-gray-500">
                You can create documents, collaborate in real time, chat with
                your document content using AI, and translate documents to other
                languages — all in one place.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Is it free to use?
              </h3>
              <p className="text-gray-500">
                Yes, the platform is completely free to use.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Do I need an account to use it?
              </h3>
              <p className="text-gray-500">
                Yes, you need to sign in to create, edit, or collaborate on
                documents.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Who owns the documents I create?
              </h3>
              <p className="text-gray-500">
                You own all the content you create. It&apos;s safely stored in
                Firebase and accessible only to you and your collaborators.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Are export options available?
              </h3>
              <p className="text-gray-500">
                Not yet. Export options like PDF or DOCX may be added in the
                future.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Is there any usage limit?
              </h3>
              <p className="text-gray-500">
                No, you can create as many documents as you want.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Can I collaborate with others?
              </h3>
              <p className="text-gray-500">
                Yes! Real-time collaboration is one of the core features.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Is this available on mobile?
              </h3>
              <p className="text-gray-500">
                Currently, it&apos;s optimized for desktop use. Mobile support
                may be added later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

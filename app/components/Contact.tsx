"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSend } from "react-icons/io";

function Contact() {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      toast("Please fill in all fields before submitting.");
      return;
    }

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (res.ok) {
      toast("Email sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      const { error } = await res.json();
      toast(`Error: ${error}`);
    }
  };

  return (
    <>
      <Toaster />
      <div className="relative isolate">
        <div className="mx-auto grid grid-cols-1">
          <form onSubmit={handleSubmit} className="px-6 pb-4 pt-4">
            <div className="mx-auto bg-gray-800 border border-gray-700 p-4 rounded-2xl max-w-4xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold leading-6 text-gray-200"
                  >
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-200"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-200"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="flex rounded-md bg-indigo-700 border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let&rsquo;s talk <IoIosSend className="text-xl ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

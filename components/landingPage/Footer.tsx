import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Syncspace™
          </a>
          . All Rights Reserved.
        </span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Developed with ❤️ by{" "}
          <a
            href="https://www.facebook.com/sujansince2003"
            target="_blank"
            className="hover:underline"
          >
            ©Sujan Khatri
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/docs" className="hover:underline me-4 md:me-6">
              Try Now
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/sujansince2003/SynkSpace-Collaborative-Docs_AI-Translations_Live-Editing"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

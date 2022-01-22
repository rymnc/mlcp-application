import type { NextComponentType } from "next";

import Link from "next/link";
const Footer: NextComponentType = () => {
  return (
    <div className="pt-4">
      <footer id="footer" className="relative z-50 dark:bg-gray-800 pt-4 items-center justify-between">
        <div className="py-4">
          <div className="mx-auto container px-4 xl:px-8 2xl:px-8 ">
            <div className="lg:flex md:flex sm:flex xs:flex">
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mb-0 flex">
                <div className="w-full text-center px-6">
                  <ul>
                    <li>
                      <Link href="/enterprise">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Enterprise
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/address">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Address
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/contact">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mb-0 flex">
                <div className="w-full text-center px-6">
                  <ul>
                    <li className="mt-6 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0 sm:mt-0">
                      <Link href="/tos">
                        <a
                          href="/privacypolicy"
                          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        >
                          Privacy policy
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/tos">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Terms of service
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/faq">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          FAQ
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

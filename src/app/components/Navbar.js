import Link from "next/link";

export function Navbar(){
    return(
        <header className="fixed w-full top-0">
            <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="https://istad.co" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ISTAD</span>
                    </Link>
                    <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Final Projects <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            </li>
                            <li>
                                <Link href="/products" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                            </li>
                            <li>
                                <Link href="/faq" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                            <li>
                                <Link href="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="mega-menu-full-dropdown" class="hidden mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                    <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Forum</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Meeting with istad community, to share and discuss about digital technology</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Code Academy</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Learning through video were teached by Khmer People</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Developer Portfolio</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Build your Portfolio in a minute</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Donation</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Donation is sharing platorm to help people in need </span>
                                </a>
                            </li>
                            <li>
                                <a href="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">PhotoStaD</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Automatic generate and edit photo for boost your brand</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">SurveyBox</div>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Revolutionize the way people survey </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
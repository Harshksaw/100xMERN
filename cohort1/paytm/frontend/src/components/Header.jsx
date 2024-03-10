import { Link } from 'react-router-dom';
const HeaderSection = () => {
    return (
        


            <>
                <header>
                    <nav
                        className="relative flex w-full items-center justify-between bg-white py-2 text-green-600 shadow-lg hover:text-green-700 focus:text-green-700 dark:bg-green-600 dark:text-green-200 md:flex-wrap md:green-start"
                        data-te-navbar-ref
                    >
                        <div className="flex w-full flex-wrap items-center justify-between px-3">
                            <div className="flex items-center">
                                <button
                                    className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                                    type="button"
                                    data-te-collapse-init
                                    data-te-target="#navbarSupportedContentY"
                                    aria-controls="navbarSupportedContentY"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="[&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-7 w-7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div
                                className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                                id="navbarSupportedContentY"
                                data-te-collapse-item
                            >
                                <ul
                                    className="mr-auto flex flex-col lg:flex-row"
                                    data-te-navbar-nav-ref
                                >
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link
                                            to="/"
                                            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                            data-te-nav-link-ref
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link
                                            to="/features"
                                            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                            data-te-nav-link-ref
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link
                                            to="/pricing"
                                            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                            data-te-nav-link-ref
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link
                                            to="/about"
                                            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                            data-te-nav-link-ref
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    };
  
  export default HeaderSection;
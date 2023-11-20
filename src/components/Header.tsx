const Header = () => {
    return (
        <>
        <main className="dark:bg-red-500 bg-white relative overflow-hidden ">
            <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <a href="/" className="py-2 px-6 flex">
                                Home
                            </a>
                            <a href="/profile" className="py-2 px-6 flex">
                                ProFile
                            </a>
                            <a href="#" className="py-2 px-6 flex">
                                Singin
                            </a>
                            <a href="/login" className="py-2 px-6 flex">
                                login
                            </a>
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4">
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        </button>
                    </div>
                    <div className="relative">
                        <label className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button
                                type="button"
                                className="text-gray-600 hover:text-gray-700"
                            >
                                <span className="sr-only">Search</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </header>
        </main>
        </>
    );
};

export default Header;
export default function Layout1()
{
    return (<>
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">YS</span>
    </a>
    <div className="flex md:order-2">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
            <a href="" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
            <a href="" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
<div className="container mx-auto mt-5 p-2">

<div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 mt-5">
    <div className="overflow-hidden">
        <img src="https://images.unsplash.com/photo-1629419829914-16f874bb697f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="hover: transition duration-500 hover:scale-125" />
    </div>
    <div className="overflow-hidden">
        <img src="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="hover: transition duration-500 hover:scale-125" />
    </div>
    <div className="overflow-hidden">
        <img src="https://images.unsplash.com/photo-1470596501261-3e4db8613505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="hover: transition duration-500 hover:scale-125" />
    </div>
</div>

<div className="flex flex-wrap -mx-2 -my-2 mt-4">
    <div className="flex flex-auto lg:w-1/4 md:w-1/2 p-2" >
        <div className="flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
                <a href="#">
                    <img className="rounded-t-lg object-cover w-full" src="https://images.unsplash.com/photo-1617204118684-991807fb53da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </a>
            </div>
            <div className="flex-1 p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2018</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin consectetur tristique ligula vel malesuada. Donec in sem fringilla, suscipit orci tempor, molestie leo. Donec vel velit mauris. Nulla ante quam, commodo ac vehicula et, malesuada vel justo. Donec suscipit lorem quis accumsan semper. Ut facilisis convallis congue. In nibh nisl, vulputate eu mi in, rutrum consectetur est. Nunc luctus nisi libero, ac eleifend felis vehicula quis.</p>
            </div>
            <div className="mt-auto p-5">
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Action
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path ß="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
        </div>
    </div>
    <div className="flex flex-auto lg:w-1/4 md:w-1/2 p-2">
        <div className="flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
                <a href="#">
                    <img className="rounded-t-lg object-cover w-full" src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </a>
            </div>
            <div className="flex-1 p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2019</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Integer quis sagittis augue. Aenean interdum lacus et arcu convallis ornare.</p>
            </div>
            <div className="mt-auto p-5">
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Action
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
        </div>
    </div>
    <div className="flex flex-auto lg:w-1/4 md:w-1/2 p-2">
        <div className="flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
                <a href="#">
                    <img className="rounded-t-lg object-cover w-full" src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                </a>
            </div>
            <div className="flex-1 p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2020</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sed vel mi sit amet odio varius interdum et et erat. In placerat accumsan ipsum, a malesuada sem convallis at. Aenean ornare elit vitae leo sagittis luctus.</p>
            </div>
            <div className="mt-auto p-5">
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Action
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
        </div>
    </div>
    <div className="flex flex-auto lg:w-1/4 md:w-1/2 p-2">
        <div className="flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
                <a href="#">
                    <img className="rounded-t-lg object-cover w-full" src="https://images.unsplash.com/photo-1616256605281-c37b1ebdf281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </a>
            </div>
            <div className="flex-1 p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Suspendisse a velit commodo, maximus augue vulputate, viverra nunc. Pellentesque quis mauris lorem. Integer vitae quam ac enim egestas varius at hendrerit ipsum. Nulla ut ligula eu eros finibus cursus. Praesent porttitor, tortor non commodo laoreet, neque diam convallis neque, eget hendrerit lacus dui eu ligula.</p>
            </div>
            <div className="mt-auto p-5">
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Action
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
        </div>
    </div>
</div>

</div></>);
}
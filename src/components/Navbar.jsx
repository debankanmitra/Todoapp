function Navbar() {
	return (
		<nav className="border-gray-200 bg-white ">
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<a
					href="https://flowbite.com/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img src="logo.svg" className="h-8 w-8" alt="todoapp Logo" />
					<span className="self-center whitespace-nowrap text-2xl font-semibold ">
						Todoapp
					</span>
				</a>
				<div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
					<button className="mx-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full">
						Logout
					</button>
					<span
						type="button"
						className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 "
						id="user-menu-button"
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="user photo"
						/>
					</span>
					{/* <!-- Dropdown menu --> */}
					{/* <div
						className={`z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow ${isDropdownVisible ? '' : 'hidden'}`}
        id="user-dropdown"
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-gray-900 ">Bonnie Green</span>
							<span className="block truncate text-sm text-gray-500 ">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
								>
									Sign out
								</a>
							</li>
						</ul>
					</div> */}
					{/* <button
						data-collapse-toggle="navbar-user"
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden "
						aria-controls="navbar-user"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-5 w-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button> */}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

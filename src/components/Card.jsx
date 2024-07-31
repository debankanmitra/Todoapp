function Card() {
	return (
		<div className="flex flex-col items-center justify-center">
			<img
				className="w-4/6 rounded-xl"
				src="illustration2.png"
				alt="Card Image"
			/>
			{/* <div className="p-4 md:p-5"> */}
			<h3 className="text-lg font-bold text-gray-800">
				You&apos;re all done for today,
			</h3>
			<p className="mt-1 text-gray-500 max-w-72">
				Enjoy the rest of your day and create and add task to your list to keep
				track of your day.
			</p>
			{/* <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
        Last updated 5 mins ago
      </p> */}
			{/* </div> */}
		</div>
	);
}

export default Card;

function Loading() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="flex justify-center flex-col items-center gap-10">
				<img src="logo.svg" alt="logo" className="w-20" />
				<div
					className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
					role="status"
					aria-label="loading"
				>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	);
}

export default Loading;

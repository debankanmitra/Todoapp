import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Addtask() {
	const [tasks, setTasks] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newTask, setNewTask] = useState("");
	const [taskDetails, setTaskDetails] = useState("");
	const [dueDate, setDueDate] = useState(new Date());

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleAddTask = () => {
		if (newTask.trim()) {
			setTasks([...tasks, { name: newTask, details: taskDetails, dueDate }]);
			setNewTask("");
			setTaskDetails("");
			setDueDate(new Date());
			toggleModal();
		}
	};
	return (
		<div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
			<button
				type="button"
				className="mt-4 px-6 py-2 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={toggleModal}
			>
				<svg
					viewBox="0 0 512 512"
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 mr-2"
				>
					<line
						x1="256"
						y1="112"
						x2="256"
						y2="400"
						style={{
							fill: "none",
							stroke: "#ffffff",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: "32px",
						}}
					/>
					<line
						x1="400"
						y1="256"
						x2="112"
						y2="256"
						style={{
							fill: "none",
							stroke: "#ffffff",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: "32px",
						}}
					/>
				</svg>
				Add Task
			</button>

			{isModalOpen && (
				<div
					id="popup-modal"
					tabIndex="-1"
					className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
				>
					<div className="relative p-4 w-full max-w-md h-full md:h-auto">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<button
								type="button"
								className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								onClick={toggleModal}
							>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							<div className="p-6 text-center">
								<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
									Add a new task
								</h3>
								<form className="max-w-sm mx-auto">
									<div className="mb-5">
										<label
											htmlFor="base-input"
											className="block mb-2 text-sm font-medium text-gray-900"
										>
											Task
										</label>
										<input
											type="text"
											id="base-input"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											value={newTask}
											onChange={(e) => setNewTask(e.target.value)}
										/>
									</div>
									<div className="mb-5">
										<label
											htmlFor="message"
											className="block mb-2 text-sm font-medium text-gray-900"
										>
											Add Details
										</label>
										<textarea
											id="message"
											rows="4"
											className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
											placeholder="Leave a comment..."
											value={taskDetails}
											onChange={(e) => setTaskDetails(e.target.value)}
										></textarea>
									</div>
									<div className="mb-5">
										<label
											htmlFor="due-date"
											className="block mb-2 text-sm font-medium text-gray-900"
										>
											Due Date
										</label>
										<DatePicker
											selected={dueDate}
											onChange={(date) => setDueDate(date)}
											showTimeSelect
											dateFormat="Pp"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										/>
									</div>
								</form>
								<button
									type="button"
									className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									onClick={handleAddTask}
								>
									Add Task
								</button>
								<button
									type="button"
									className="mt-2 text-sm text-gray-500 dark:text-gray-400 hover:underline"
									onClick={toggleModal}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="mt-8 w-full max-w-md mx-auto">
				{tasks.map((task, index) => (
					<div key={index} className="mb-2 p-4 bg-white rounded-lg shadow">
						<h3 className="font-bold">{task.name}</h3>
						<p>{task.details}</p>
						<p className="text-sm text-gray-500">
							Due: {task.dueDate.toLocaleString()}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Addtask;

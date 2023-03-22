// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	// const [name, setName] = useState("Mario");
	// const [age, setAge] = useState(25);
	// const handleClick = () => {
	// 	setName("Luigi");
	// 	setAge(age + 5);
	// };

	// const handleClickAgain = (name) => {
	// 	console.log("name: " + name);
	// };

	//const [name, setName] = useState("mario");

	//runs on every render
	//adding dependency means it only runs when that specific variable changes
	const {
		blogs: blogs,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs");

	return (
		<div className="home">
			{error && <div className="loading">{error}</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs!" />}
			{isPending && <div className="loading">Loading blogs...</div>}
			{/* <button onClick={() => setName("Luigi")}>Click me</button>
			<p>{name}</p> */}
			{/* <BlogList
				blogs={blogs.filter((blog) => blog.author === "mario")}
				title="Mario's Blogs!"
			/> */}

			{/* <h2>Homepage</h2> */}

			{/* <p>
				{name} is {age} years old
			</p>
			<button onClick={handleClick}>Click Me</button> */}
			{/* we cant use handleClick() bcz it will self invoke
			<button
				onClick={() => {
					handleClickAgain("hi");
				}}
			>
				Click Me too
			</button> */}
		</div>
	);
};

export default Home;

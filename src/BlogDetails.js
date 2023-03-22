import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const {
		blogs: blog,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();
	const handleDelete = () => {
		fetch("http://localhost:8000/blogs/" + blog.id, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};
	return (
		<div className="blog-details">
			{isPending && <div className="loading">Loading blog...</div>}
			{error && <div className="loading">{error}</div>}
			{blog && (
				<article className="blog-final">
					<h2>{blog.title}</h2>
					<p>by: {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete blog</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;

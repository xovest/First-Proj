import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Whoops</h2>
      <p>That page can't be found</p>
      <Link to="/">Back to the beginning...</Link>
    </div>
  );
}

export default NotFound;
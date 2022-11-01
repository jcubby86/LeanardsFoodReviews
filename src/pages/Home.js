import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div id="jumbotron" className="shadow p-5 mb-4 rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-light">Home</h1>
                </div>
            </div>

            <h3 className="p-2">
                <a href='https://www.youtube.com/user/leonardllikespizza' target="_blank" rel="noreferrer">Check out my youtube channel!</a>
            </h3>

            <h3 className="p-2">See my recent reviews here!</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/pizza">Eugenio's Four Cheese frozen pizza</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/chips">Let's Potato chips</Link>
                </li>
            </ul>
        </>
    );
};

export default Home;
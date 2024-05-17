import { useState, useEffect } from "react";
function MoviesPage(){
    const [movies, setMovies] = useState([]);
    useEffect(async () =>{
        const response = await fetch("api/movies");
        const movies = await response.json();
        setMovies(movies);
    }, []);
    return (
        <div>
            <h1 className="tex-2xl text-blue-500 font-blod">Movie List</h1>
            <table className="border-collapse border border-state-600">
                <thead>
                    <tr>
                        <th class="border border-state-300">Movie</th>
                        <th class="border border-state-300">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie =>{
                        return(
                            <tr key={movie.id}>
                            <td class="border border-state-300">{movie.title}</td>
                            <td class="border border-state-300">{movie.releaseYear}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>
    );
}
export default MoviesPage;

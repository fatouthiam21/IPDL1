export default async function handler(req, res){
    const response = awaitfetch ("https://reactnative.dev/movies.json")
    const movies = await response.json();
    res.status(200).json(movies.movies);
    return <MoviesPage />;
}
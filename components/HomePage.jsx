/*export default function HomePage() {
    return(
        <div>
            <h1>Welcome to my website</h1>
            <p>First lab in NextJS</p>
        </div>
    )
}*/
import Link from "next/link";
function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl py-5 text-blue-700">Lab Gamma Final</h1>
            
            <Link 
            className="px-3 transition hover:text-red-500 font-bold"
             href="/product"
             >
                Products
                </Link>
            <Link className="px-3 transition hover:text-red-500 font-bold" href="/movies">Movies</Link>
            <Link className="px-3 transition hover:text-red-500 font-bold" href="/about">About</Link>
        </div>
    );
}
export default Home;
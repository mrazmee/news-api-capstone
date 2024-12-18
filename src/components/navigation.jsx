import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
        <nav className="flex w-full justify-between items-center bg-gray-600 p-5">
            <div className="flex gap-5 items-center">
                <Link to="/">
                 <h1 className="font-bold text-lg text-white cursor-pointer">News API</h1>
                </Link>
             
            <ul >
                <li className="text-white flex gap-5">
                    <Link className="hover:underline ease-in-out trasition-all duration-300 cursor-pointer" to="/indonesia">Indonesia</Link>
                    <Link className="hover:underline ease-in-out trasition-all duration-300 cursor-pointer" to="/programming">Programming</Link>
                    <Link to="/covid">Covid-19</Link>
                    <Link to="/saved">Saved</Link>
                </li>
            </ul>  
            </div>
            
            <div className="flex gap-5">
                <input className="px-5 py-2 rounded-md" type="text" placeholder="Search..."/>
                <button className="bg-yellow-300 text-white rounded-md px-5">Cari berita</button>
            </div>
        </nav>
        </>
    )
}
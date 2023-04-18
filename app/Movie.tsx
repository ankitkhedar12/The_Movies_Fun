import Image from "next/image";
import Link from "next/link";

export default  function Movie({title, id, poster_path, release_date}:any){
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div className="hover:bg-orange-700 rounded-md  mx-2 px-2 py-2 sm-50 md:w-32 lg:w-48" >
            <Link href={`/${id}`}>
                <Image className="rounded" src={imagePath + poster_path} alt={title} width={300} height={300} />
            </Link>
            <h1 className=" antialiased bg-cyan-600 hover:bg-slate-700 rounded-md inline-block my-2 py-2 px-4" >{title}</h1>
            <h2 className=" antialiased rounded-md inline-block my-2 py-2 px-4" >{release_date}</h2>
        </div>
    )
}
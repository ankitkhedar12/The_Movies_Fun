import Image from "next/image";
import Link from "next/link";

export default  function Movie({title, id, poster_path, release_date}:any){
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div className="hover:bg-slate-700 rounded-md  px-9 py-2" >
            <h1 className=" antialiased bg-slate-800 hover:bg-slate-700 rounded-md inline-block my-2 py-2 px-4" >{title}</h1>
            <h2 className=" antialiased bg-slate-900 rounded-md inline-block my-2 py-2 px-4" >{release_date}</h2>
            <Link href={`/${id}`}>
                <Image className="rounded" src={imagePath + poster_path} alt={title} width={300} height={300} />
            </Link>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

export default  function Movie({title, id, poster_path, release_date}:any){
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h1>{title}</h1>
            <h2>Relese date</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} alt={title} width={300} height={300} />
            </Link>
        </div>
    )
}
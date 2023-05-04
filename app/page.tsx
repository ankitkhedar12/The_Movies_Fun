import Movie from "./Movie";
import './globals.css';

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res);
  return (
    <main>
      <h1 className='antialiased text-3xl pb-12 text-center' >Made by Khedar with ❤️ from India</h1>
      <div className="grid gap-2 grid-cols-fluid" >
        {res.results.map((movie: any)=>(
          // eslint-disable-next-line react/jsx-key
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}

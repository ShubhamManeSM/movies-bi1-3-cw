import useFetch from "../useFetch";

const MovieByTitle = ({title}) => {
  const {data, loading} = useFetch(`http://localhost:3001/movies/${title}`)

  // console.log(data)

  return(
     data ? <div>
      <h2>{data.title}</h2>
      <p>Director: {data.director}</p>
      <p>Country: {data.country}</p>
      <p>Release Year: {data.releaseYear}</p>
      <p>Awards: {data.awards}</p>
      <p>Plot: {data.plot}</p>
      <img src="{data.posterUrl}" alt="Poster Image" />
    </div> : loading && <p>Loading...</p>
  ) 
}

export default MovieByTitle;
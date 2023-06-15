
const $ = (id) => document.getElementById(id);
const urlBase = "http://localhost:3031/api/movies/";

window.onload = async () => {
    let query = new URLSearchParams(location.search);
    let id = query.has('id') && query.get('id');

    try {
        let response = await fetch('http://localhost:3031/api/movies/' + id);
        let pelicula = await response.json();
        let {title,awars,rating,length = duration,release_date} = pelicula.data;

        let dataFormat = moment(release_date).format('YYYY-MM-DD');

        console.log(moment(release_date).format('YYYY-MM-DD'))
    } catch (error) {
        console.log(error)
    }
}
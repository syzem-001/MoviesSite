import axios from "axios";

export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500';

const baseURL = 'https://api.themoviedb.org/3'

const api = axios.create({
    baseURL : baseURL,
    params:{
        api_key:import.meta.env.VITE_TMDB_API_KEY,
        language:"hu-HU",
        include_adult:false,
        sort_by:"popularity.desc"
    }
})

export const getTrendings = async () => {
    const rs = await api.get("/trending/all/week")
    return rs.data.results
}


export const getMovies = async () => {
    const rs = await api.get("/discover/movie")
    return rs.data.results
}

export const getTVshows = async () => {
    const rs = await api.get("/discover/tv",)
    return rs.data.results
}

export const getMedia = async (type ,searchText,page) => {
    console.log(type,searchText);
        console.log("ok");

    const rs = await api.get(`/search/${type}?query=${searchText}`,{params:{page}})
    return rs.data
}

export const getVote = (media) => {
    return Math.round(media.vote_average)
}

const pageTitle =[
    {type: 'trending', title:'Popular This Week'},
    {type: 'movie', title:'Movies'},
    {type: 'tv', title:'TV series'},
    {type: 'search', title:'search Media'},
    {type:'actor',title:'Actors'}
]

export const getTitle= (type) => {
    const selected = pageTitle.find(obj => obj.type == type)
    console.log(type);
    
    console.log(selected);
    
    return selected.title
}

export const getCategories = async(type) => {
    const url = `${baseURL}/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    const rs = await axios.get(url)
    return rs.data.genres

}

export const getSelectedMediaByCateg = async(type, selectedCtg ,page=1) => {
    const rs = await api.get(`/discover/${type}?with_genres=${selectedCtg}`,{params:{page}})
    return rs.data.results
}

//const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;

export const getTrailer = async(type, id) => {
    const rs = await api.get(`/${type}/${id}/videos`)

    return rs.data.results
}


export const getCredits = async(type, id) => {
    const rs = await api.get(`/${type}/${id}/credits`)
    return rs.data.cast
}

export const getPopularPeople = async(page) => {
    const rs = await api.get('/person/popular',{params:{page}})
    return rs.data.results
}


export const getPerson = async (searchText,page) => {
    console.log(searchText);
        console.log("ok");

    const rs = await api.get(`/search/person`,{params:{page, query:searchText}})
    return rs.data
}

export const getPersonDetails = async(id) => {
    const rs = await api.get(`/person/${id}`)
    return rs.data
}

export const getPersonCredits = async(id) => {
    const rs = await api.get(`/person/${id}/movie_credits`)
    
    return rs.data.cast
}
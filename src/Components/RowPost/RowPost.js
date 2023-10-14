import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constant/constant'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleMovieTailor = (id) => {
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                seturlId(response.data.results[0])
            } else {
                console.log("Array empty")
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={(() => handleMovieTailor(obj.id))} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}

            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost

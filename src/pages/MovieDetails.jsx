import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {get} from '../data/httppClient.jsx';

export default function MovieDetails() {

    const {movieId} = useParams
    const {movie, setMovie} = useState(null);
    useEffect(() => {
        get("/movie/"+movieId).then((data) => {
            setMovie(data);
        }).catch((error) => {
            console.error('Error fetching movie details:', error);
        });
    }, [movieId, setMovie]);

    return (
        <div>
            <img src="" alt="" />
        </div>
    );
}

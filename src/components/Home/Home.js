import React, { useEffect } from 'react';
import movieApi from '../../shared/apis/MovieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../shared/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText = "Harry";
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`
            )
                .catch((err) => {
                    console.log("Err", err);
                });
            dispatch(addMovies(response.data))
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <div className='banner-img'>
                <MovieListing />
            </div>
        </div>
    );
};

export default Home;
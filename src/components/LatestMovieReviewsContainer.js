import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JyGP9mpdrgX2lqhmiPuJP4tzkhbV6XYR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = { reviews: [] };


    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then((json) => {
            // console.log(json.results)
            this.setState({reviews: json.results})
        })
    }

    render(){
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
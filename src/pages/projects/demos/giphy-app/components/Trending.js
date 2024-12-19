import { useState } from "react"
import axios from 'axios'
import {Button} from "react-bootstrap"


const Trending = (props) => {

    const {setGifs} = props;

    const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search'
    const GIPHY_API_KEY = '43AL10dIQe6L9zoznaWwuQP7ULNFOk0e'

    // http://api.giphy.com/v1/gifs/search?api_key=43AL10dIQe6L9zoznaWwuQP7ULNFOk0e&q=monkey

    const handleSearch = () => {
        axios.get(`${GIPHY_URL}/trending?api_key=${GIPHY_API_KEY}`)
        .then((res) => {
            console.log(res.data.data)
            setGifs(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Button onClick={handleSearch}>Trending</Button>
    )
}

export default Trending;
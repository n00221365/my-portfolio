import {Dropdown} from "react-bootstrap"
import {useState, useEffect} from "react"
import axios from 'axios';
import {useParams} from 'react-router-dom';


const DropdownMenu = (props) => {

    const {setGifs} = props;

    const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search'
    const GIPHY_API_KEY = '43AL10dIQe6L9zoznaWwuQP7ULNFOk0e'

    // http://api.giphy.com/v1/gifs/search?api_key=43AL10dIQe6L9zoznaWwuQP7ULNFOk0e&q=monkey

    const [limit, setLimit] = useState(20)
    useEffect(() => {
        axios.get(`${GIPHY_URL}?apikey=${GIPHY_API_KEY}&limit=${limit}`)
        .then(({ data }) => {
            console.log(data.data)
            setGifs(data.data)
        })
        .catch((res) => {
            console.error(res)
        })

    }, [limit])


    const handleChange = (key) => {
        console.log(key)
    }
    return(
        <Dropdown onClick={handleChange}>
            <Dropdown.Toggle variant="success">
                Result Limit
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey={20}>20</Dropdown.Item>
                <Dropdown.Item eventKey={50}>50</Dropdown.Item>
                <Dropdown.Item eventKey={100}>100</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownMenu
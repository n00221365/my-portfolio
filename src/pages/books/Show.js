import{ useParams} from 'react-router-dom';

const Show = () => {

    let {id} = useParams();

    return (
        <h1>hi from books / Show page, you are looking at book with id: {id}</h1>
    )
}

export default Show;
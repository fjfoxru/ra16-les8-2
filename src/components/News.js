import useJsonFetch from'../hooks/useJsonFetch';
import {useState} from'react';

function News () {
    const [url, setUrl] = useState('http://localhost:7070/data');
    const [data, loading, error] = useJsonFetch(url, {});


    return (
        <>
        <button onClick={() => setUrl('http://localhost:7070/data')}>успешное получение данных</button>
        <button onClick={() => setUrl('http://localhost:7070/error')}>получение 500 ошибки</button>
        <button onClick={() => setUrl('http://localhost:7070/loading')}>индикатор загрузки</button>
        {data && data}
        {loading && 'Загрузка'}
        {error && 'Ошибка'}
        </>
    )
}

export default News;

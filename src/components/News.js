import useJsonFetch from'../hooks/useJsonFetch';


function News () {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {});

    return (
        <>
        </>
    )
}

export default News;
import { useRouter } from "next/router"

const DetailProductPage = () => {
    const { query }= useRouter()
    console.log(query)
    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>Product : {query.id}</p>
        </div>
    );
}

export default DetailProductPage
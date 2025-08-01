import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/init";

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};

const ProductPage = () => {
    // const [products, setProducts] = useState([])
    const [postProducts, setPostProducts] = useState<productType[]>([])
    // const [isLogin, setIsLogin] = useState(false)
    // const  { push } = useRouter()
    // useEffect(() => {
    //     if(!isLogin) {
    //         push("/auth/login")
    //     }    
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // useEffect(() => {
    //     fetch("/api/product")
    //         .then((res) => res.json())
    //         .then((response) => {
    //             setProducts(response.data)
    //         })
    // })

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase.from('ulilProducts').select('*')

            if (error) {
                console.log('fetch error', error.message)
                return
            }

            setPostProducts(data as productType[])
        }

        fetchPosts()
    }, [])

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1>Product Page</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {postProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.size}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductPage
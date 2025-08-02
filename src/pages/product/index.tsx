import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/init";
import ProductView from "@/views/Product/Main";
import { ProductType } from "@/views/Product/Main";


const ProductPage = () => {
    const [products, setProducts] = useState<ProductType[]>([])
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

            setProducts(data as ProductType[])
        }

        fetchPosts()
    }, [])

    return (
        <>
            <ProductView products={products}/>
        </>
    );
}

export default ProductPage
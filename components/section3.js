import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"



export default function section3(){
    const { data, isLoading, isError } = fetcher('api/popular')

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>
    
    return(        
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular Posts</h1>

            {/*스와이퍼*/}
            <Swiper 
            breakpoints = {{
                640:{
                    slidesPerView:2,
                    spaceBetween : 30
                }
            }}
            >
            {
                data.map((value, index) => (
                    <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))}
            </Swiper>
            
        </section>
        )
}


function Post({data}){
    const { id, title, category, img, published, description, author } = data;
    return(
        <div className="grid">
            <div className="images">
                <Link href={`/posts/${id}`}><a><Image src={img||""} width={600} height={400} /></a></Link></div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category||"no category"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published||"no published"}</a></Link></div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title||"no tilte"}</a></Link></div>
                    <p className="text-gray-500 py-3">
                        {description||"no description"}
                    </p>
                    { author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}
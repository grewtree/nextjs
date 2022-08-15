import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"


export default function section4(){
    const { data, isLoading, isError } = fetcher('api/popular')

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

    return(
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">

                {/* 첫번째 라인 */}
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {/* post */}
                        {data[1] ? <Post data={data[1]}></Post>:<></>}
                        {data[2] ? <Post data={data[2]}></Post>:<></>}
                        {data[3] ? <Post data={data[3]}></Post>:<></>}
                    </div>
                </div>

                {/* 두번째 라인 */}
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {data[4] ? <Post data={data[4]}></Post>:<></>}
                        {data[5] ? <Post data={data[5]}></Post>:<></>}
                        {data[2] ? <Post data={data[2]}></Post>:<></>}
                    </div>
                </div>

            </div>

        </section>
    )
}

function Post({data}){
    const { id, title, category, img, published, description, author } = data;

    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}><a><Image src={img||""} className="rounded" width={300} height={250} /></a></Link></div>
            <div className="info flex justify-centger flex-col">
            <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category||"no category"}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published||"no published"}</a></Link></div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title||"no title"}</a></Link></div>
                    { author ? <Author {...author}></Author> : <></>}
            </div>
        </div>

    )

}
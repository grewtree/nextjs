import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/newsletter";

export default function footer(){

    const bg = {
        backgroundImage : "url('/images/footer.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'bottom left'
    }


    return(
      <footer className="bg-gray-50" style={bg}>
        <Newsletter></Newsletter>
        <div className="contatiner mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center">
                    <Link href={"/"}><a><ImFacebook color="#888888"/></a></Link>
                    <Link href={"/"}><a><ImTwitter color="#888888"/></a></Link>
                    <Link href={"/"}><a><ImYoutube color="#888888"/></a></Link>
                    </div>

                    <p className="py-5 text-gray-400">Copyright ©2022 by chris</p>
                
                </div>

            </div>

      </footer>

    )

}
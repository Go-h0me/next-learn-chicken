import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { Post } from '../typings'

interface Props{
  posts:[Post]
}

 export default function Home({posts}:Props) {

// console.log(posts);


  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Run Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div
        className="flex items-center justify-between border-y border-white
      bg-green-400 py-10 lg:py-0
      "
      >
        <div className="space-x-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl text-ellipsis text-red-400">
            <span className="underline decoration-gray-500 decoration-4">
              Rescue
            </span>{' '}
            I want to leave this world full of pain and fear{' '}
          </h1>
          <h2>
            Because this world fascinates and brings people into a world full of
            illusions
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://cdn.pixabay.com/photo/2020/09/06/05/16/f-5548047__340.jpg"
          alt=""
        />
      </div>

      {/* {Post} */}
      <div
        className="grid grid-cols-1 gap-3 rounded-full p-2 sm:grid-cols-2
      md:gap-6 md:p-6 lg:grid-cols-3 border-white
      "
      >
        {/* <h1>im post</h1> */}
        {/* className="h-12 w-12 rounded-full" */}
        <div className="  group cursor-pointer overflow-hidden rounded-lg border-white">
          <img
            className="w-full-cover h-60 transition-transform
          duration-200 ease-in-out group-hover:scale-105 
          "
            src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283__480.jpg"
            alt=""
          />
          <h1 className="text-2xl font-bold text-red-800">Title</h1>
          <p className="text-sm text-violet-400"> Description</p>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          <img
            className="w-full-cover h-60 transition-transform
          duration-200 ease-in-out group-hover:scale-105
          "
            src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283__480.jpg"
            alt=""
          />
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          <img
            className="w-full-cover h-60 transition-transform
          duration-200 ease-in-out group-hover:scale-105
          "
            src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283__480.jpg"
            alt=""
          />
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          <img
            className="w-full-cover h-60 transition-transform
          duration-200 ease-in-out group-hover:scale-105
          "
            src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283__480.jpg"
            alt=""
          />
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          <img
            className="w-full-cover h-60 transition-transform
          duration-200 ease-in-out group-hover:scale-105
          "
            src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283__480.jpg"
            alt=""
          />
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          <img
            className="w-full-cover h-60 transition-transform
          duration-200 ease-in-out group-hover:scale-105
          "
            src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283__480.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

///
{/* <div>
  {postMessage.map(post=> (
    <Link key={post._id} href={'/post/${post.slug.current}'}>
    <div>

      <img src={urlFor(post.mainImage).url()} alt=''/>
      
      <div className="flex justify-between p-5 bg-white">
   <div>
     <p className="text-lg font-bold">{postMessage.title}</p>
     <p className="text-sm">{postMessage.description} by {postMessage.author.name}</p>
   </div>
   <img className="h-12 w-12 rounded-full" src={url(urlFor(post.author.image)).url()} alt=""/>

  
   </div>
      </div>
    </Link>  
  ))}    
</div> */}


// export const getServerSideProps = async () => {
// const query = `*[_type ==="post"]{
//   _id,
//   title,
//   author->{
//     name,
//     image
//   },
//   description,
//   mainImage,
//   slug
// }`
// // const posts = await sanityClient.fetch(query)
// } 
 

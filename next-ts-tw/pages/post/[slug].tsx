//import {sanityClient,urlFor} form '../../sanity'
//cong cu ho tro dummy.data, but i no

import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { addAbortSignal } from 'stream'
import Header from '../../components/Header'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(true)
      })
  }

  return (
    <main>
      <Header />

      <img
        className="h-40 w-full object-cover"
        src="https://cdn.pixabay.com/photo/2022/01/24/17/11/butterfly-6964083__340.jpg"
        alt=""
      />
      {/* < img className="w-full h-40 object-cover" src={urlFor(post.mainImage).url()} alt=""/> */}

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2
          className="mb-2 text-xl font-light
    text-gray-500
    "
        >
          {post.description}
        </h2>

        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={URL(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by
            <span className="text-green-600"> {post.author.name}</span>-
            Published at{''}
            {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATABASE}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="list-disc text-xl" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="mt-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />

      {submitted ? (
        <div
          className="nax-w-2xl my-10 mx-auto flex flex-col bg-yellow-500
       py-10 text-white
       "
        >
          <h3 className="text-3xl font-bold">
            Thank you for submitted your comment
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article</h3>
          <h4 className="text-3xl font-bold">Leave a connect below</h4>
          <hr className="mt-2 py-3" />
          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="mb-5 block" htmlFor="">
            <span className="text-gray-100">Name</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-yellow-500"
              placeholder="Hihi khong chay duoc"
              type="name"
            />
          </label>
          <label className="mb-5 block" htmlFor="">
            <span className="text-gray-100">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-yellow-500"
              placeholder="Hihi khong chay duoc"
              type="email"
            />
          </label>
          <label className="mb-5 block" htmlFor="">
            <span className="text-gray-100">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border
          py-2 px-3 shadow outline-none ring-yellow-500
          focus:ring 
          "
              placeholder="Hihi khong chay duoc"
              rows={8}
            />
          </label>
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">The name field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                The comment field is required
              </span>
            )}
            {errors.email && (
              <span className="text-red-500">The email field is required</span>
            )}
          </div>
          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer
        rounded bg-yellow-500 
        py-2 px-4 font-bold text-white 
        shadow hover:bg-yellow-400 focus:outline-none
        "
          />
        </form>
      )}
      {/* Comment */}
      <div
        className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10
      shadow shadow-yellow-200
      "
      >
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p>
              <span className="text-yellow-500">{comment.name}:</span>
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Post

// export const getStaticPaths =async () => {
// const query=`*[_type =='post']{
//     _id,
//     slug{
//         current
//     }
// }`

// const posts=await sanityClient.fetch(query)

// const paths = posts.map((post:Post) => ({
//     param:{
//         slug:post.slug.current
//     }
// }))
// return {
//     paths,
//     fallback:'blocking'
// }
// }

// export const getStaticProps:GetStaticProps = async ({params}) =>{
//     const query =`
//     *[_type == 'post' && slug.current == $slug] [0]{
//         _id,
//         _createdAt,
//         title,
//         author -> {
//             name,
//             image
//         },
//         'comments': *[
//             _type == 'comment' &&
//             post._ref == 'content' &&
//             approved ==true
//         ],
//         description,
//         mainImage,
//         slug,
//         body
//     }
//     `

//     const post =await sanityClient.fetch(query,{
//         slug: params?.slug
//     })
//     if (!post) {
//         return {
//             notFound: true
//         }

//     }
//     return {
//         props:{
//             post
//         },
//         revalidate:60,
//     }
// }

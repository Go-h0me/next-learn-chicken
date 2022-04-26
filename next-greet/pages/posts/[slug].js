
import { Head } from "next/document";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),

    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);

  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  console.log("[PostPage] render", post);
  return (
    <>
      <Head>
        <title>{post.title}- My Blog</title>
      </Head>

      <main>
        <p>{post.date}</p>
        <h1> {post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}
export default FirstPostPage;

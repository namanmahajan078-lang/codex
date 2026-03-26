import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Naman Mahajan</title>
      </Head>
      <article className="section-pad prose prose-invert max-w-3xl pt-36">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPosts().map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { post: getPostBySlug(params.slug) } };
}

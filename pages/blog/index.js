import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage({ posts }) {
  const [aiText, setAiText] = useState('');

  return (
    <>
      <Head>
        <title>AI Blog CMS | Naman Mahajan</title>
      </Head>
      <div className="section-pad pt-36">
        <h1 className="text-4xl font-bold">AI Blog CMS</h1>
        <p className="mt-3 max-w-3xl text-white/80">
          Markdown-powered publishing with a demo AI assistant for rapid ideation.
        </p>

        <button
          onClick={() =>
            setAiText(
              'AI draft: Brands that blend search intent modeling with cinematic storytelling dominate both rankings and retention. Use topic clusters, emotional hooks, and sharp CTAs.'
            )
          }
          className="btn-primary magnetic mt-6"
        >
          Generate with AI
        </button>

        {aiText && <div className="glass mt-4 rounded-xl p-4 text-white/85">{aiText}</div>}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="glass rounded-2xl p-6">
              <p className="text-sm text-luxeCyan">{post.date}</p>
              <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-white/80">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="btn-secondary magnetic mt-5 inline-flex">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}

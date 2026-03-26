import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, ...data, content };
}

export function getAllPosts() {
  const posts = getPostSlugs().map((slug) => getPostBySlug(slug));
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

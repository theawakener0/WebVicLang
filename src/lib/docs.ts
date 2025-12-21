import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'src/app/docs');

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export function getAllDocs() {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(docsDirectory);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const { meta } = getDocBySlug(slug)!;
      return {
        slug,
        title: meta.title || slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase(),
      };
    });
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '../data'; 

// Server-side function to generate dynamic metadata for /blog/[slug]
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    const post = blogPosts.find((p: BlogPost) => p.slug === slug);
    
    if (!post) {
        notFound();
    }
    
    const canonicalUrl = `https://www.almadinahijamacenter.com/blog/${post.slug}`;

    return {
        title: post.title + " | Al Madina Hijama Center Blog",
        description: post.metaDescription, 
        alternates: {
            canonical: canonicalUrl,
        },
    };
}
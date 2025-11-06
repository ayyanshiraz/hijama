import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '../data'; 

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    const post = blogPosts.find((p: BlogPost) => p.slug === slug);
    
    if (!post) {
        notFound();
    }
    
    const canonicalUrl = `https://www.almadinahijamacenter.com/blog/${post.slug}`;

    return {
        title: post.title + " | Al Madina Hijama Center Blog",
        description: post.excerpt, 
        alternates: {
            canonical: canonicalUrl,
        },
    };
}
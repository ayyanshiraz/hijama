import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data'; 
import BlogPostClient from './BlogPostClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Al Madina Hijama Center`,
        description: post.metaDescription, 
        alternates: {
            canonical: `https://www.almadinahijamacenter.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            url: `https://www.almadinahijamacenter.com/blog/${post.slug}`,
            images: [
                {
                    url: post.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.altText,
                },
            ],
        },
    };
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
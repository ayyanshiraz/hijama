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

    const siteUrl = 'https://www.almadinahijamacenter.com';
    const imageUrl = post.imageUrl.startsWith('http') 
        ? post.imageUrl 
        : `${siteUrl}${post.imageUrl}`;

    return {
        title: `${post.title} | Al Madina Hijama Center`,
        description: post.metaDescription, 
        alternates: {
            canonical: `${siteUrl}/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            url: `${siteUrl}/blog/${post.slug}`,
            siteName: 'Al Madina Hijama Center',
            locale: 'en_PK',
            type: 'article',
            authors: ['Al Madina Hijama Center'],
            images: [
                {
                    url: imageUrl,
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
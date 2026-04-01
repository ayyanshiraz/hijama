import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data'; 
import BlogPostClient from './BlogPostClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
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
        title: post.seoTitle || post.title,
        description: post.metaDescription, 
        // Agar data.tsx me keywords hain to wo yahan utha le ga
        keywords: post.seoKeywords || post.keywords || 'Hijama in Lahore, Cupping Therapy', 
        alternates: {
            canonical: `${siteUrl}/blog/${post.slug}`,
        },
        openGraph: {
            title: post.seoTitle || post.title,
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
                    alt: post.altText || post.title,
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

    const siteUrl = 'https://www.almadinahijamacenter.com';
    const imageUrl = post.imageUrl.startsWith('http') 
        ? post.imageUrl 
        : `${siteUrl}${post.imageUrl}`;

    // Google k liye Article Schema (Indexing Booster)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.seoTitle || post.title,
        description: post.metaDescription,
        image: imageUrl,
        // Agar ap k data.tsx me date h to wo yahan dynamic ho jaye gi
        datePublished: post.date || '2026-01-01', 
        author: {
            '@type': 'Organization',
            name: 'Al Madina Hijama Center',
            url: siteUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'Al Madina Hijama Center',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/icon.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostClient post={post} />
        </>
    );
}
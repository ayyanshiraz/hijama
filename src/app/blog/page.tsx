'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Sample blog post data
const blogPosts = [
  {
    slug: 'the-sunnah-of-hijama',
    title: 'The Sunnah of Hijama: A Timeless Path to Wellness',
    excerpt: 'Explore the historical and spiritual significance of Hijama cupping therapy as practiced and recommended in the Sunnah.',
    imageUrl: '/blogs/b1.png', // Replace with a relevant blog image
    category: 'Sunnah & Healing',
    date: 'October 15, 2025',
  },
  {
    slug: 'benefits-of-wet-cupping',
    title: '5 Proven Benefits of Wet Cupping for Detoxification',
    excerpt: 'Discover how wet cupping (Hijama) can help purify your blood, remove toxins, and boost your overall immune system.',
    imageUrl: '/blogs/b3.png', // Replace with a relevant blog image
    category: 'Health & Wellness',
    date: 'October 10, 2025',
  },
  {
    slug: 'hijama-for-pain-relief',
    title: 'Natural Relief: How Hijama Can Alleviate Chronic Pain',
    excerpt: 'Learn about the mechanisms through which Hijama provides effective, natural relief for conditions like back pain, migraines, and arthritis.',
    imageUrl: '/blogs/b8.png', // Replace with a relevant blog image
    category: 'Pain Management',
    date: 'October 5, 2025',
  },
  // Add more blog posts here
];

const BlogPage = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
    ];
    
    return (
        <main className="bg-white text-gray-800">
            {/* --- Hero Section --- */}
            <section className="relative bg-gray-800 text-white py-32 sm:py-40 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/blogs.jpg')" }} // Using a generic background image
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Insights on Healing, Wellness, and the Sunnah of Hijama
                    </motion.p>
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            {/* --- Blog Grid Section --- */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-8 sm:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <motion.div 
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
                            >
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="relative w-full h-56">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm text-teal-600 font-semibold">{post.category}</p>
                                    <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-3 text-gray-600 text-sm flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <p className="text-xs text-gray-500">{post.date}</p>
                                        <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-teal-600 hover:text-teal-800 flex items-center">
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPage;


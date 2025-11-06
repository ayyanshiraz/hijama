'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { blogPosts, BlogPost } from '../data'; 
import React from 'react'; 
import Head from 'next/head';


const SinglePostPage = () => {
    const params: { slug: string } = useParams() as { slug: string };
    const slug = params.slug;

    const post = blogPosts.find((p: BlogPost) => p.slug === slug);

    if (!post) {
        return (
            <main className="bg-white text-gray-800 py-40 text-center">
                <h1 className="text-4xl font-bold">Post not found</h1>
                <Link href="/blog" className="mt-8 inline-block text-teal-600 hover:underline">
                    &larr; Back to Blog
                </Link>
            </main>
        );
    }
    
    return (
        <React.Fragment> 
            <main className="bg-white text-gray-800">
                
                <section className="relative bg-gray-800 text-white pt-48 pb-24 flex items-center justify-center">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.imageUrl})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative container mx-auto px-6 text-center z-10">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="text-teal-400 font-semibold"
                        >
                            {post.category}
                        </motion.p>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2"
                        >
                            {post.title}
                        </motion.h1>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div 
                            className="prose lg:prose-xl max-w-none text-gray-800"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <Link href="/blog" className="text-teal-600 hover:text-teal-800 font-semibold flex items-center transition-colors">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to All Posts
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default SinglePostPage;
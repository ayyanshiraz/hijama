'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs'; 
import imageLoader from '../../../utils/imageLoader'; 
import { BlogPost } from '../data'; 

interface BlogPostClientProps {
    post: BlogPost;
}

const BlogPostClient: React.FC<BlogPostClientProps> = ({ post }) => {
    // Hydration fix for Framer Motion in Next.js 15
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const breadcrumbItems = [
        { name: `Home`, href: `/` },
        { name: `Blogs`, href: `/blog` },
        { name: post.title ?? `Blog Post`, href: `/blog/${post.slug}` }
    ];

    // Jab tak client mount nahi hota, simple version dikhayen gay
    if (!mounted) {
        return (
            <main className={`bg-white text-gray-800 font-inter mt-10`}>
                <div className={`max-w-5xl mx-auto p-6`}>Loading content...</div>
            </main>
        );
    }

    return (
        <main className={`bg-white text-gray-800 font-inter mt-10`}>
            <Breadcrumbs items={breadcrumbItems} />

            <div className={`pt-4 pb-12 sm:pt-6 sm:pb-16 px-4 md:px-8`}>
                <motion.section
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`relative max-w-5xl mx-auto mt-4 md:mt-10 rounded-xl overflow-hidden shadow-2xl h-[500px]`} 
                >
                    <Image
                        loader={imageLoader} 
                        src={post.imageUrl}
                        alt={post.altText}
                        width={1000}    
                        height={500}    
                        priority
                        className={`object-cover w-full h-full z-10`} 
                    />
                    <div className={`absolute inset-0 bg-black/10 z-20`} />
                </motion.section>

                <div className={`max-w-5xl mx-auto mt-8 `}>
                     <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-lg text-black-600 font-bold uppercase tracking-wider mb-2 text-center`}
                    >
                        {post.category}
                    </motion.p>
                    
                </div>

                <div className={`max-w-5xl mx-auto mt-10`}>
                    <div className={`bg-gray-50 rounded-lg p-6 sm:p-10 shadow-lg border border-gray-200`}>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 0.5 }}
                            className={`prose prose-lg lg:prose-xl max-w-none text-gray-800 `}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>

                <div className={`max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-200 px-4`}>
                    <Link href={`/blog`} className={`text-teal-600 hover:text-teal-800 font-semibold flex items-center transition-colors`}>
                        <ArrowLeft className={`w-5 h-5 mr-2`} />
                        Back to All Posts
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default BlogPostClient;
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

    // MAGIC TRICK: Ye line data.tsx k content se hardcoded purany H1/H2 ko remove kar de gi ta k title double na ho
    const cleanContent = post.content.replace(/<h[12][^>]*>[\s\S]*?<\/h[12]>/i, ``);

    return (
        <main className={`bg-white text-gray-800 font-inter mt-10`}>
            <Breadcrumbs items={breadcrumbItems} />

            <div className={`pt-4 pb-12 sm:pt-6 sm:pb-16 px-4 md:px-8`}>
                <motion.section
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    // FIX: h-[500px] ko md:h-[500px] kar diya taake mobile par height auto adjust ho
                    className={`relative max-w-5xl mx-auto mt-4 md:mt-10 rounded-xl overflow-hidden shadow-2xl md:h-[500px] bg-gray-50`} 
                >
                    <Image
                        loader={imageLoader} 
                        src={post.imageUrl}
                        alt={post.altText}
                        width={1000}    
                        height={500}    
                        priority
                        // FIX: mobile k liye object-contain h-auto, aur desktop k liye md:object-cover md:h-full
                        className={`w-full h-auto object-contain md:object-cover md:h-full z-10`} 
                    />
                    <div className={`absolute inset-0 bg-black/10 z-20`} />
                </motion.section>

                <div className={`max-w-5xl mx-auto mt-10 px-4`}>
                     <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-lg text-teal-600 font-bold uppercase tracking-wider mb-3 text-center`}
                    >
                        {post.category}
                    </motion.p>
                    
                    {/* YAHAN HUM NE PERMANENT H1 LAGA DIYA H JO AHREFS KO KHUSH KAR DE GA */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-6 leading-tight`}
                    >
                        {post.title}
                    </motion.h1>
                </div>

                <div className={`max-w-5xl mx-auto mt-8`}>
                    <div className={`bg-gray-50 rounded-lg p-6 sm:p-10 shadow-lg border border-gray-200`}>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 0.4 }}
                            className={`prose prose-lg lg:prose-xl max-w-none text-gray-800`}
                            // Yahan hum ne saaf kiya hua content pass kar diya h
                            dangerouslySetInnerHTML={{ __html: cleanContent }}
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
'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample blog post data (This should be in a shared file in a real app)
const blogPosts = [
  {
    slug: 'the-sunnah-of-hijama',
    title: 'The Sunnah of Hijama: A Timeless Path to Wellness',
    excerpt: 'Explore the historical and spiritual significance of Hijama cupping therapy as practiced and recommended in the Sunnah.',
    imageUrl: '/blogs/b1.jpg',
    category: 'Sunnah & Healing',
    date: 'October 15, 2025',
    content: `
      <p>Hijama, also known as wet cupping, is a therapeutic practice with deep roots in Islamic tradition and prophetic medicine. It is a highly recommended Sunnah of the Prophet Muhammad (peace be upon him), who not only practiced it himself but also advised his followers to use it as a means of healing.</p>
      <img src="/blogs/b2.jpg" alt="Illustration of ancient cupping tools" class="rounded-lg my-8 shadow-md" />
      <p>The term "Hijama" is derived from the Arabic word 'hajm', which means 'sucking'. The procedure involves creating suction on the skin using cups and then making small, superficial incisions to draw out a small amount of stagnant, toxic blood from the body.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Spiritual and Physical Benefits</h3>
      <p>The practice is not just about physical detoxification; it is an act of faith, following the guidance of the Prophet (pbuh). It is reported in numerous hadiths that Hijama is a cure for a wide range of ailments.</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li><strong>Detoxification:</strong> It helps in the removal of metabolic waste and toxins from the bloodstream.</li>
        <li><strong>Pain Relief:</strong> By improving circulation and reducing inflammation, it provides effective relief from chronic pain.</li>
        <li><strong>Immune Boost:</strong> The practice stimulates the body’s natural defense mechanisms.</li>
      </ul>
      <blockquote class="border-l-4 border-teal-500 pl-4 italic my-6">
        The Messenger of Allah (pbuh) said, "Indeed, the best of remedies you have is Hijama." (Sahih al-Bukhari)
      </blockquote>
      <p>By reviving this Sunnah, we not only seek physical well-being but also connect with a timeless tradition of prophetic healing, embracing a holistic approach to health that balances the body, mind, and soul.</p>
    `
  },
  {
    slug: 'benefits-of-wet-cupping',
    title: '5 Proven Benefits of Wet Cupping for Detoxification',
    excerpt: 'Discover how wet cupping (Hijama) can help purify your blood, remove toxins, and boost your overall immune system.',
    imageUrl: '/blogs/b3.jpg',
    category: 'Health & Wellness',
    date: 'October 10, 2025',
    content: `
      <p>Wet cupping, known as Hijama, is one of the most effective natural detoxification methods available. It directly targets and removes stagnant blood and metabolic waste that can accumulate in the body over time. Here are five key benefits of this powerful therapy:</p>
      <img src="/blogs/b4.jpg" alt="Close-up of cupping therapy on a patient's back" class="rounded-lg my-8 shadow-md" />
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Enhanced Blood Circulation</h3>
      <p>The suction from the cups draws blood to the surface, breaking up blockages and stimulating fresh, oxygenated blood flow to areas that may be suffering from poor circulation. This helps nourish tissues and accelerate healing.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">2. Removal of Toxins and Waste</h3>
      <p>Unlike other detox methods that rely on the digestive system, Hijama physically removes toxins and inflammatory substances directly from the interstitial fluid just beneath the skin. This can significantly reduce the load on your liver and kidneys.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Reduction in Inflammation and Pain</h3>
      <p>Many chronic pain conditions are linked to inflammation. By removing the pro-inflammatory agents present in stagnant blood, Hijama can provide immediate and lasting relief from conditions like arthritis, migraines, and sciatica.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">4. Boosted Immune System Function</h3>
      <p>The process of Hijama creates a sterile inflammation, which triggers the immune system to produce more white blood cells, cytokines, and other defense agents. This strengthens your body’s ability to fight off infections and disease.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">5. Rejuvenated Skin Health</h3>
      <p>By improving local circulation and removing toxins that can contribute to skin issues, Hijama can help improve conditions like acne, eczema, and psoriasis, leading to clearer and healthier-looking skin.</p>
    `
  },
  {
    slug: 'hijama-for-pain-relief',
    title: 'Natural Relief: How Hijama Can Alleviate Chronic Pain',
    excerpt: 'Learn about the mechanisms through which Hijama provides effective, natural relief for conditions like back pain, migraines, and arthritis.',
    imageUrl: '/blogs/b8.jpg',
    category: 'Pain Management',
    date: 'October 5, 2025',
    content: `
      <p>For millions of people suffering from chronic pain, Hijama (cupping therapy) offers a powerful, medication-free alternative. Its effectiveness lies in its ability to address pain from multiple angles.</p>
      <img src="/blogs/b7.jpg" alt="Anatomical drawing showing back muscles targeted for pain relief" class="rounded-lg my-8 shadow-md" />
      <h3 class="text-2xl font-bold mt-8 mb-4">Releasing Muscle Tension</h3>
      <p>The negative pressure from the cups lifts and separates soft tissue layers. This action releases deep muscle knots, trigger points, and fascial adhesions that are often the source of chronic stiffness and pain, particularly in the back, neck, and shoulders.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Reducing Inflammation</h3>
      <p>Chronic pain is often fueled by inflammation. Wet cupping physically removes inflammatory mediators and toxins from the affected area, providing direct relief and allowing the tissue to begin healing. This is especially beneficial for joint pain caused by conditions like arthritis.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Stimulating Natural Painkillers</h3>
      <p>The process of Hijama is believed to stimulate the nervous system, encouraging the release of the body’s own natural painkillers, such as endorphins. This creates a sense of well-being and reduces the perception of pain.</p>
      <p>Whether you suffer from persistent migraines, debilitating lower back pain, or sciatica, a targeted Hijama session can help break the cycle of chronic pain and restore your quality of life.</p>
    `
  },
];


const SinglePostPage = () => {
    const params = useParams();
    const slug = params.slug;

    const post = blogPosts.find((p) => p.slug === slug);

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

    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: post.title, href: `/blog/${post.slug}` },
    ];
    
    return (
        <main className="bg-white text-gray-800">
            {/* --- Hero Section --- */}
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
                     {/* The "Posted on" date has been removed from here */}
                </div>
            </section>

            <Breadcrumbs items={breadcrumbItems} />

            {/* --- Blog Content Section --- */}
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
    );
};

export default SinglePostPage;


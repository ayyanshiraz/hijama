'use client';

import Link from 'next/link';

// Define the type for a single breadcrumb item
type BreadcrumbItem = {
  name: string;
  href: string;
};

// Define the props for the Breadcrumbs component
type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    // Updated styling to match the screenshot
    <nav aria-label="Breadcrumb" className="bg-white py-4">
      <div className="container mx-auto px-8 sm:px-16">
        <ol className="flex items-center text-sm">
          {items.map((item, index) => (
            <li key={item.name} className="flex items-center">
              {/* Add a slash separator for all items except the first one */}
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              
              {/* Check if it's the last item in the array */}
              {index < items.length - 1 ? (
                // If not the last, render a styled link
                <Link href={item.href} className="text-gray-600 hover:text-teal-600 transition-colors">
                  {item.name}
                </Link>
              ) : (
                // If it is the last, render as bold, darker text (the current page)
                <span className="font-semibold text-gray-900" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;


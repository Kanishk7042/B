import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const BlogItem = ({ title, description, category, image, id }) => {
  // Function to truncate the description while preserving HTML tags
  const truncateDescription = (desc, maxLength) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = desc;
    const text = tempDiv.textContent || tempDiv.innerText || '';

    // Return plain text truncated to maxLength
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Max length for the display
  const maxLength = 170;

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col'>
      <Link href={`/blogs/${id}`}>
        <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
          <Image 
            src={image} 
            alt="" 
            layout="fill" 
            objectFit="cover" 
            className='border-b border-black transition-transform duration-300 transform hover:scale-105' 
          />
        </div>
      </Link>
      <p className='w-full bg-black text-white text-sm text-center py-1 mt-3'>
        {category}
      </p>
      <div className='p-5 flex-grow'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700 h-20 overflow-hidden'>
          {truncateDescription(description, maxLength)}
        </p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center text-blue-600 hover:text-blue-800'>
          Read more <Image src={assets.arrow} alt='' width={12} className='ml-2' />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;

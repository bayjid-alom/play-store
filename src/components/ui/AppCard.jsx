import { Download, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const AppCard = ({ app }) => {

    const { id, image, title, downloads, ratingAvg } = app;

    return (


        <Link href={`/app-details/${id}`}
            className="app-card group rounded-xl bg-white p-4 shadow-[0_5px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(99,46,227,0.15)]">

            {/* App Image - Next.js fill requires a relative parent container */}
            {/* App Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
            </div>

            {/* App Title */}
            <h3 className="mt-4 line-clamp-1 text-lg font-medium text-[#001931] md:text-xl">
                {title}
            </h3>

            {/* Download & Rating */}
            <div className="mt-4 flex items-center justify-between">

                {/* Downloads */}
                <div className="inline-flex items-center gap-2 rounded-md bg-[#F1F8E8] px-3 py-2 text-[#00D390]">
                    <Download size={17} strokeWidth={2.2} />
                    <span className="text-sm font-semibold">{downloads}</span>
                </div>

                {/* Rating */}
                <div className="inline-flex items-center gap-2 rounded-md bg-[#FFF0E1] px-3 py-2 text-[#FF8811]">
                    <Star size={19} fill="currentColor" />
                    <span className="text-sm font-semibold">{ratingAvg}</span>
                </div>

            </div>

        </Link>
    );
};

export default AppCard;
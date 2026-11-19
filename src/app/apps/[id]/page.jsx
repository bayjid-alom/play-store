import { Download, MessageSquare, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const appsPromise = async function () {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}


const AppDetailsPage = async ({ params }) => {
    const { id } = await params;
    const apps = await appsPromise();

    const app = apps.find(app => app.id === Number(id));

    const {
        image,
        title,
        companyName,
        description,
        size,
        reviews,
        ratingAvg,
        downloads,
        ratings
    } = app;
    // const chartReversedData = [...ratings].reverse();





    return (
        <div className="mx-auto my-8 w-[94%] md:my-10 md:w-[92%] lg:w-[90%]">

            {/* App Information Section */}
            <section className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">

                {/* App Image */}
                <div className="flex shrink-0 items-center h-ful justify-center md:w-[135px] lg:w-[170px]">
                    <Image
                        src={image}
                        alt={title}
                        width={176}
                        height={176}
                        className="h-32 w-32 rounded-2xl object-cover md:h-36 md:w-36 lg:h-44 lg:w-44"
                    />
                </div>

                {/* App Information */}
                <div className="min-w-0 flex-1">

                    {/* App Title */}
                    <div className="border-b border-slate-200 pb-3 text-center md:text-left">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-lg lg:text-xl">
                            {title}
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            Developed by{' '}
                            <span className="font-medium text-violet-600">
                                {companyName}
                            </span>
                        </p>
                    </div>

                    {/* App Statistics */}
                    <div className="grid grid-cols-3 gap-3 py-4 md:max-w-[330px] md:gap-5">

                        {/* Downloads */}
                        <div>
                            <Download
                                size={19}
                                strokeWidth={2.5}
                                className="mb-1 text-emerald-500"
                            />
                            <p className="text-[11px] text-slate-500">
                                Downloads
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">
                                {downloads}
                            </h3>
                        </div>

                        {/* Average Rating */}
                        <div>
                            <Star
                                size={19}
                                fill="currentColor"
                                className="mb-1 text-orange-500"
                            />
                            <p className="text-[11px] text-slate-500">
                                Average Ratings
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">
                                {ratingAvg}
                            </h3>
                        </div>

                        {/* Total Reviews */}
                        <div>
                            <MessageSquare
                                size={19}
                                fill="currentColor"
                                className="mb-1 text-violet-500"
                            />
                            <p className="text-[11px] text-slate-500">
                                Total Reviews
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">
                                {reviews}
                            </h3>
                        </div>

                    </div>

                    {/* Install Button */}
                    <button
                        className="rounded-sm bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-emerald-600">
                        Install Now ({size} MB)
                    </button>

                </div>
            </section>




            {/* Ratings Section */}
            <section className="mt-7 border-t border-slate-200 pt-4">

                <h3 className="mb-3 text-base font-semibold text-slate-800">
                    Ratings
                </h3>

                <div className="flex flex-col gap-2">

                    {[...ratings].reverse().map((rating, index) => (

                        <div
                            key={index}
                            className="group relative flex items-center gap-3 rounded-md transition-colors duration-200 hover:bg-orange-50"
                        >

                            {/* Rating Name */}
                            <p className="w-[50px] shrink-0 pl-1 text-xs text-slate-500">
                                {rating.name}
                            </p>

                            {/* Rating Bar */}
                            <div className="relative h-[17px] flex-1">

                                <div
                                    className="h-full bg-[#ff850e] transition-all duration-300"
                                    style={{
                                        width: `${(rating.count / Math.max(...ratings.map(item => item.count))) * 100}%`
                                    }}
                                />

                                {/* Tooltip */}
                                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-[10px] border border-[#fed7aa] bg-white px-[14px] py-[10px] opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-opacity duration-200 group-hover:opacity-100">

                                    <p className="mb-1 text-[13px] font-semibold text-[#334155]">
                                        {rating.name}
                                    </p>

                                    <p className="whitespace-nowrap text-[13px] font-semibold text-[#ff850e]">
                                        {rating.count.toLocaleString()} Ratings
                                    </p>

                                </div>

                            </div>

                            {/* Rating Count */}
                            <p className="w-12 shrink-0 text-right text-xs text-slate-500">
                                {rating.count === 0
                                    ? '0'
                                    : `${Math.round(rating.count / 1000000)}M`}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* Description Section */}
            <section className="mt-7 border-t border-slate-200 pt-4">

                <h3 className="mb-3 text-base font-semibold text-slate-800">
                    Description
                </h3>

                <div className="px-0 py-2 text-justify text-xs leading-[1.8] text-slate-500 md:text-[13px]">

                    <p>
                        {description}
                    </p>

                </div>

            </section>

        </div>
    );
};

export default AppDetailsPage;
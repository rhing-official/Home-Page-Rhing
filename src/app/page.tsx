"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 導線カード用
const menuCards = [
    { title: "団体概要", en: "ABOUT", href: "/about", desc: "Rhingの理念と組織について" },
    { title: "サービス紹介", en: "SERVICES", href: "/services", desc: "kuwa / DaiDai" },
    { title: "収支報告", en: "FINANCIAL", href: "/financial", desc: "月次・年次の財務状況" },
    { title: "協力者募集", en: "COMM", href: "/community", desc: "エンジニア・広報など各職種" },
    //{ title: "daidai横丁", en: "STORE", href: "/store", desc: "ペタピタ等のECサイト" },
];

import { newsList } from "@/data/newsData";

export default function Home() {
    return (
        <div className="w-full">
            {/* ヒーローエリア*/}
            <section className="h-[70vh] flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-widest text-[#111] leading-relaxed">
                        ここでは、誰も商品にしない。<br className="md:hidden" /><br></br>
                        隠さず、繋ぐ。
                    </h1>
                </motion.div>
            </section>

            {/* 導線エリア：max-w-4xl から max-w-6xl に広げ、左右に余白を活かして配置します */}
            <section className="container mx-auto px-6 py-16 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* 🌟 gap-6 を gap-8 にしてゆとりを持たせます */}
                    {menuCards.map((card, index) => (
                        /* 🌟 h-64 を h-72 に変更して、ブロックを縦にも大きくします */
                        <Link
                            key={index}
                            href={card.href}
                            className="group block h-72 bg-[#f8f8f8] hover:bg-[#111] transition-all duration-500 rounded-2xl overflow-hidden relative p-10"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h2 className="text-sm font-bold tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {card.en}
                                    </h2>
                                    <p className="text-3xl font-bold mt-3 text-gray-900 group-hover:text-white transition-colors">
                                        {card.title}
                                    </p>
                                </div>
                                <div className="flex items-end justify-between">
                                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                        {card.desc}
                                    </span>
                                    {/* 矢印アイコン */}
                                    <div className="w-12 h-12 rounded-full border border-gray-300 group-hover:border-white flex items-center justify-center group-hover:bg-white text-gray-900 transition-all duration-300 transform group-hover:translate-x-2">
                                        <ArrowRight className="w-6 h-6 group-hover:text-black" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-24 max-w-7xl">
                {/* 見出しと「すべてのニュース」ボタン */}
                <div className="flex flex-col items-center mb-16">
                    <p className="text-sm font-bold text-gray-400 tracking-[0.2em] mb-2 uppercase">NEWS</p>
                    <h2 className="text-3xl font-bold tracking-widest text-gray-900 mb-8">最新情報</h2>

                    <a
                        href="https://note.com/rhing_official/all"
                        className="px-6 py-2 border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-300"
                    >
                        すべてのニュース →
                    </a>
                </div>

                {/* グリッドレイアウト（6つまで表示） */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {newsList.slice(0, 6).map((news) => (
                        <a href={news.url} key={news.id} className="group flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <div className="flex justify-between items-center">
                                    <time className="text-[10px] font-bold text-gray-400 tracking-wider">{news.date}</time>
                                    <span className="text-[9px] font-bold bg-gray-50 text-gray-500 px-3 py-1 rounded-full uppercase tracking-wider border border-gray-200">
                                        {news.category}
                                    </span>
                                </div>
                                <h2 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                                    {news.title}
                                </h2>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                                    {news.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
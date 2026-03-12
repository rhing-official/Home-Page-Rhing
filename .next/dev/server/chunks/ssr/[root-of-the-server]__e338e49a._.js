module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/legal/charter/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharterPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const metadata = {
    title: "Rhing憲章 | Rhing",
    description: "Rhingが掲げる運営理念とユーザーとの誓いを記した憲章です。"
};
// 条文を配列で管理することで、コードをスッキリさせます
const articles = [
    {
        title: "前文",
        content: "Rhingは、ユーザー一人ひとりの自由と尊厳を守り、表現者が正当な対価を得られる、透明で持続可能なデジタル空間を創造します。私たちは、広告やデータ売却に依存せず、ユーザーとの信頼関係に基づくサブスクリプションモデルを採用し、すべてのステークホルダーに誠実であることを誓います。"
    },
    {
        title: "第一条：ユーザーの自由と尊厳",
        content: "Rhingは、いかなる権力や資本からもユーザーの自由を守る。運営による発言の不当な削除や改ざんは、これを永久に禁ずる。ユーザーは自らの意思で情報を発信し、交流し、表現する権利を有する。"
    },
    {
        title: "第二条：情報の独立",
        content: "ユーザーのプライバシーは、国家や企業による情報の独占・買収から死守する。国との連携においても、個人情報の開示や管理権限の譲渡には、未来永劫応じない。マイナンバー、電話番号、住所の登録・連携は、これを一切行わない。"
    },
    {
        title: "第三条：クリエイターの正当な利益",
        content: "「守る」という言葉は、表現者の権利と生活、そして利益も守ることを意味する。巨大なプラットフォームによる搾取を排除し、クリエイターに正当な対価が届く仕組みを維持する。手数料は最小限に抑え、透明性を保つ。"
    },
    {
        title: "第四条：個人情報の不保持",
        content: "マイナンバー、電話番号、住所、メールアドレス、位置情報の登録・連携は、これを一切行わない。ユーザーは匿名性を保ちながら、信頼できるID（Rhing seed）を持つ権利を有する。"
    },
    {
        title: "第五条：美学としての「整う」",
        content: "広告や過剰な機能を排除し、情報の視認性と使い心地を最優先する。ユーザーの時間を奪う「ごちゃごちゃ感」を許さない。シンプルで美しく、本質的な価値を提供する。"
    },
    {
        title: "第六条：透明性と説明責任",
        content: "運営方針、収益構造、データの取り扱いについて、ユーザーに対して常に透明であることを約束する。重要な変更については事前に説明し、ユーザーの意見を尊重する。"
    },
    {
        title: "第七条：買収と売却の禁止",
        content: "Rhingは、いかなる買収や事業売却にも応じない。ユーザーとの信頼関係を守るため、この憲章に反する資本や権力の介入を拒否する。"
    }
];
function CharterPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-6 py-32 max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-24 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold tracking-widest text-gray-900 mb-4",
                        children: "CHARTER"
                    }, void 0, false, {
                        fileName: "[project]/src/app/legal/charter/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 tracking-wider text-sm",
                        children: "Rhing憲章"
                    }, void 0, false, {
                        fileName: "[project]/src/app/legal/charter/page.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/legal/charter/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-12",
                children: articles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white p-8 md:p-12 border-l-4 border-gray-900 shadow-sm rounded-r-2xl hover:shadow-md transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-gray-900 mb-6 tracking-wide border-b border-gray-100 pb-4",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/legal/charter/page.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 leading-loose text-lg font-medium",
                                children: article.content
                            }, void 0, false, {
                                fileName: "[project]/src/app/legal/charter/page.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/legal/charter/page.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/legal/charter/page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/legal/charter/page.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/legal/charter/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/legal/charter/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e338e49a._.js.map
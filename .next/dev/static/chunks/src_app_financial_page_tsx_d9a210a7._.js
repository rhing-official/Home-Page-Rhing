(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/financial/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinancialPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// ============================================================
// 年度ごとのデータ定義
// 金額が未確定の場合は "-" のままにしてください。
// 実績が確定したら数値（例: 1200000）に書き換えてください。
// ============================================================
const months = [
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月"
];
const tabs = [
    ...months,
    "年次"
];
// ============================================================
// 2026年度データ（すべてハイフン）
// ============================================================
const data2026 = {
    "4月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "5月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "6月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "7月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "8月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "9月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "10月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "11月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "12月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "1月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "2月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    },
    "3月": {
        currentIncome: "-",
        prevIncome: "-",
        currentExpense: "-",
        prevExpense: "-",
        currentIncomeDetail: {
            subscription: "-",
            other: "-"
        },
        currentExpenseDetail: {
            server: "-",
            payment: "-",
            labor: "-",
            marketing: "-",
            legal: "-",
            other: "-"
        }
    }
};
// ============================================================
// 年度を追加するときは allYearData にキーを追記してください。
// 最大5年度まで登録できます。それ以上は古い年度を削除してください。
//
// 追加手順:
//   1. const data20XX: YearData = { ... }; を上に定義する
//   2. allYearData に "20XX年度": data20XX を追記する
// ============================================================
const allYearData = {
    // ↓ 最大5件まで登録可能
    "2026年度": data2026
};
const availableYears = Object.keys(allYearData);
// ============================================================
// ヘルパー関数
// ============================================================
// 金額を「¥ -」または「¥1,200,000」形式で表示する
const formatCurrency = (amount)=>{
    if (amount === "-") return "¥ -";
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
    }).format(amount);
};
// 前年比（%）を計算する
const calculateRatio = (current, prev)=>{
    if (current === "-" || prev === "-" || prev === 0) return null;
    const ratio = (current - prev) / prev * 100;
    return ratio > 0 ? `+${ratio.toFixed(1)}%` : `${ratio.toFixed(1)}%`;
};
// 前年比が改善しているか判定する（支出は減少が改善）
const isPositive = (current, prev, isExpense = false)=>{
    if (current === "-" || prev === "-") return null;
    return isExpense ? current <= prev : current >= prev;
};
function FinancialPage() {
    _s();
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(availableYears[0]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("4月");
    const monthlyData = allYearData[activeYear];
    // ★ 修正ポイント：activeTab が "年次" のときは monthlyData["年次"] を参照しない
    const isAnnualTab = activeTab === "年次";
    const currentMonthData = isAnnualTab ? null : monthlyData[activeTab];
    // 年次グラフ用データ（"-" は 0 として扱う）
    const chartData = {
        labels: months,
        datasets: [
            {
                label: `${activeYear} 収入`,
                data: months.map((m)=>{
                    const v = monthlyData[m].currentIncome;
                    return v === "-" ? 0 : v;
                }),
                backgroundColor: "#111111"
            },
            {
                label: "前年度 収入",
                data: months.map((m)=>{
                    const v = monthlyData[m].prevIncome;
                    return v === "-" ? 0 : v;
                }),
                backgroundColor: "#cccccc"
            }
        ]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: false
            }
        }
    };
    // 月次タブ用の計算（currentMonthData が null のときは使われない）
    const ratio = currentMonthData ? calculateRatio(currentMonthData.currentIncome, currentMonthData.prevIncome) : null;
    const isIncomePositive = currentMonthData ? isPositive(currentMonthData.currentIncome, currentMonthData.prevIncome) : null;
    const isExpensePositive = currentMonthData ? isPositive(currentMonthData.currentExpense, currentMonthData.prevExpense, true) : null;
    const expenseRatio = currentMonthData ? calculateRatio(currentMonthData.currentExpense, currentMonthData.prevExpense) : null;
    const netProfit = currentMonthData && currentMonthData.currentIncome !== "-" && currentMonthData.currentExpense !== "-" ? currentMonthData.currentIncome - currentMonthData.currentExpense : "-";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-6 py-24 max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold tracking-widest text-gray-900 mb-4",
                        children: "FINANCIAL"
                    }, void 0, false, {
                        fileName: "[project]/src/app/financial/page.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 tracking-wider text-sm",
                        children: "収支報告"
                    }, void 0, false, {
                        fileName: "[project]/src/app/financial/page.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/financial/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-sm",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: activeYear,
                                    onChange: (e)=>setActiveYear(e.target.value),
                                    // 🌟 appearance-none でブラウザ標準の矢印を消去
                                    className: "w-full appearance-none bg-white border-2 border-gray-300 rounded-full px-8 py-4 text-lg font-bold tracking-widest text-gray-900 shadow-sm cursor-pointer outline-none transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
                                    children: availableYears.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: year,
                                            children: year
                                        }, year, false, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/financial/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute inset-y-0 right-6 flex items-center text-gray-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2.5,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/financial/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/financial/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/financial/page.tsx",
                            lineNumber: 243,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/financial/page.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center border-b border-gray-200 overflow-x-auto scrollbar-hide pb-0",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                className: `px-4 py-5 text-base font-bold tracking-widest transition-colors whitespace-nowrap ${activeTab === tab ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-400 hover:text-gray-600"}`,
                                children: tab
                            }, tab, false, {
                                fileName: "[project]/src/app/financial/page.tsx",
                                lineNumber: 269,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/financial/page.tsx",
                        lineNumber: 267,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/financial/page.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f8f8f8] p-8 md:p-12 rounded-2xl min-h-[500px]",
                children: isAnnualTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-8 tracking-widest text-gray-900 text-center",
                            children: [
                                activeYear,
                                " 年間収支推移（前年度比）"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/financial/page.tsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            data: chartData,
                            options: chartOptions
                        }, void 0, false, {
                            fileName: "[project]/src/app/financial/page.tsx",
                            lineNumber: 290,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/financial/page.tsx",
                    lineNumber: 286,
                    columnNumber: 21
                }, this) : currentMonthData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-10 tracking-widest text-gray-900 border-b border-gray-200 pb-4",
                            children: [
                                activeYear,
                                " ",
                                activeTab,
                                " 収支報告"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/financial/page.tsx",
                            lineNumber: 294,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold tracking-widest text-gray-500 block mb-2",
                                            children: "INCOME / 収入"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: formatCurrency(currentMonthData.currentIncome)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg p-4 mb-4 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-gray-400 tracking-widest mb-3",
                                                    children: "BREAKDOWN / 内訳"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "サブスクリプション"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentIncomeDetail.subscription)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "その他"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentIncomeDetail.other)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-sm border-t border-gray-100 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: [
                                                        "前年同月: ",
                                                        formatCurrency(currentMonthData.prevIncome)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 37
                                                }, this),
                                                ratio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold ${isIncomePositive ? "text-green-600" : "text-red-600"}`,
                                                    children: ratio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 font-bold",
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/financial/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold tracking-widest text-gray-500 block mb-2",
                                            children: "EXPENSE / 支出"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: formatCurrency(currentMonthData.currentExpense)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg p-4 mb-4 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-gray-400 tracking-widest mb-3",
                                                    children: "BREAKDOWN / 内訳"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "サーバー費用"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentExpenseDetail.server)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "決済手数料"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentExpenseDetail.payment)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "人件費"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentExpenseDetail.labor)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "マーケティング"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentExpenseDetail.marketing)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "法務・税務"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentExpenseDetail.legal)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "その他"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formatCurrency(currentMonthData.currentExpenseDetail.other)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/financial/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-sm border-t border-gray-100 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: [
                                                        "前年同月: ",
                                                        formatCurrency(currentMonthData.prevExpense)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 37
                                                }, this),
                                                expenseRatio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold ${isExpensePositive ? "text-green-600" : "text-red-600"}`,
                                                    children: expenseRatio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 font-bold",
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/financial/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/financial/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/financial/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/financial/page.tsx",
                            lineNumber: 298,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 bg-gray-900 text-white p-8 rounded-xl flex flex-col md:flex-row justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold tracking-widest mb-2 md:mb-0",
                                    children: "当月純利益"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/financial/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-bold",
                                    children: formatCurrency(netProfit)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/financial/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/financial/page.tsx",
                            lineNumber: 383,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/financial/page.tsx",
                    lineNumber: 293,
                    columnNumber: 21
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/app/financial/page.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/financial/page.tsx",
        lineNumber: 230,
        columnNumber: 9
    }, this);
}
_s(FinancialPage, "/oPtGwaZtZexs9mPA7a82geI7SQ=");
_c = FinancialPage;
var _c;
__turbopack_context__.k.register(_c, "FinancialPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_financial_page_tsx_d9a210a7._.js.map
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Activity, Archive, Beaker, Boxes, Building2, ChevronRight, Clock, Coins, Cpu, FileText, FlaskConical, LayoutDashboard, Leaf, Plus, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region src/lib/concrete.ts
var defaultMix = {
	targetGrade: "M30",
	targetStrength: 30,
	maxAggregate: 20,
	wcRatio: .45,
	slump: 100,
	cementDensity: 3.15,
	silicaPct: 8,
	silicaDensity: 2.2,
	fine: 720,
	coarse: 1080,
	water: 170,
	spDosage: 1.2,
	spDensity: 1.1,
	plasticPct: 10,
	plasticDensity: .95,
	plasticReplaces: "fine"
};
var curingAges = [
	3,
	7,
	14,
	28,
	56,
	90
];
function calculate(mix) {
	const binder = mix.water / Math.max(.25, mix.wcRatio);
	const silica = binder * mix.silicaPct / 100;
	const cement = binder - silica;
	const plastic = (mix.plasticReplaces === "fine" ? mix.fine : mix.coarse) * mix.plasticPct / 100;
	return {
		binder,
		silica,
		cement,
		water: mix.water,
		fineNatural: mix.fine - (mix.plasticReplaces === "fine" ? plastic : 0),
		coarseNatural: mix.coarse - (mix.plasticReplaces === "coarse" ? plastic : 0),
		plastic,
		sp: binder * mix.spDosage / 100,
		waterBinder: mix.water / binder
	};
}
function predict(mix, age) {
	const calc = calculate(mix);
	const base = 18 + calc.binder * .035 - calc.waterBinder * 11 + mix.silicaPct * .18 - mix.plasticPct * .055 + mix.spDosage * .9;
	return Math.max(8, base * (age <= 3 ? .42 : age <= 7 ? .65 : age <= 14 ? .84 : age <= 28 ? 1 : age <= 56 ? 1.08 : 1.12));
}
function predictCurve(mix) {
	const prediction = predict(mix, 28);
	return curingAges.map((age) => ({
		age: `${age}d`,
		sustainable: Number(predict(mix, age).toFixed(1)),
		conventional: Number((prediction * (age === 28 ? 1.05 : 1.05 + (age / 28 - 1) * .04)).toFixed(1))
	}));
}
//#endregion
//#region src/components/engineering-ui.tsx
function PageHeading({ eyebrow, title, description, action }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "animate-slide-in",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
					children: [
						/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
						/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary/50" }),
						eyebrow
					]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-2xl font-semibold tracking-tight sm:text-[2rem] sm:leading-[1.15]",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground",
					children: description
				})
			]
		}), action && /* @__PURE__ */ jsx("div", {
			className: "shrink-0 animate-fade-in",
			children: action
		})]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ jsx("section", {
		className: `rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${className}`,
		children
	});
}
function CardHeader({ icon: Icon, title, subtitle, action }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-5 flex items-start justify-between gap-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-2.5",
			children: [Icon && /* @__PURE__ */ jsx("div", {
				className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "font-semibold leading-tight",
				children: title
			}), subtitle && /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: subtitle
			})] })]
		}), action]
	});
}
function Metric({ label, value, detail, tone = "default", icon: Icon }) {
	return /* @__PURE__ */ jsxs(Card, {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: `absolute left-0 top-0 h-full w-1 ${{
			default: "bg-border",
			green: "bg-accent",
			amber: "bg-chart-3",
			blue: "bg-primary"
		}[tone]}` }), /* @__PURE__ */ jsxs("div", {
			className: "relative pl-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs font-medium text-muted-foreground",
						children: label
					}), Icon && /* @__PURE__ */ jsx("div", {
						className: `flex h-7 w-7 items-center justify-center rounded-lg ${{
							default: "bg-muted text-muted-foreground",
							green: "bg-accent/10 text-accent",
							amber: "bg-chart-3/15 text-chart-3",
							blue: "bg-primary/8 text-primary"
						}[tone]}`,
						children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-2.5 font-mono text-[1.75rem] font-semibold leading-none tracking-tight",
					children: value
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
					children: detail
				})
			]
		})]
	});
}
function Button({ children, variant = "primary", size = "md", onClick, className = "", type = "button" }) {
	return /* @__PURE__ */ jsx("button", {
		type,
		onClick,
		className: `inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 ${{
			primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98]",
			secondary: "border border-border bg-card text-foreground hover:bg-muted active:scale-[0.98]",
			ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
			destructive: "border border-destructive/20 bg-destructive/8 text-destructive hover:bg-destructive/12 active:scale-[0.98]"
		}[variant]} ${{
			sm: "h-8 px-3 text-xs gap-1.5 rounded-lg",
			md: "h-9 px-4 text-sm gap-2 rounded-lg",
			lg: "h-11 px-5 text-sm gap-2 rounded-xl"
		}[size]} ${className}`,
		children
	});
}
function Badge({ children, tone = "default" }) {
	return /* @__PURE__ */ jsx("span", {
		className: `inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${{
			default: "bg-muted text-muted-foreground border-border",
			accent: "bg-primary/8 text-primary border-primary/15",
			amber: "bg-chart-3/15 text-chart-3 border-chart-3/20",
			green: "bg-accent/10 text-accent border-accent/15",
			destructive: "bg-destructive/8 text-destructive border-destructive/15"
		}[tone]}`,
		children
	});
}
var chartTooltipStyle = {
	background: "var(--card)",
	border: "1px solid var(--border)",
	borderRadius: "10px",
	fontSize: "12px",
	boxShadow: "var(--shadow-lg)",
	padding: "8px 12px"
};
var chartAxisStyle = { fontSize: 11 };
function ScoreBar({ score, max = 100, tone = "primary" }) {
	return /* @__PURE__ */ jsx("div", {
		className: "h-2 overflow-hidden rounded-full bg-border",
		children: /* @__PURE__ */ jsx("div", {
			className: `h-full rounded-full ${{
				primary: "bg-primary",
				accent: "bg-accent",
				amber: "bg-chart-3"
			}[tone]} transition-all duration-500 ease-out`,
			style: { width: `${Math.min(100, score / max * 100)}%` }
		})
	});
}
//#endregion
//#region src/routes/app/index.tsx?tsr-split=component
var sampleProjects = [
	{
		id: "1",
		name: "M30 Sustainable Concrete",
		grade: "M30",
		status: "Active",
		created: "2026-09-12",
		progress: 75
	},
	{
		id: "2",
		name: "M40 High-Rise Columns",
		grade: "M40",
		status: "Active",
		created: "2026-09-10",
		progress: 45
	},
	{
		id: "3",
		name: "M25 Residential Slab",
		grade: "M25",
		status: "Completed",
		created: "2026-09-05",
		progress: 100
	},
	{
		id: "4",
		name: "M35 Bridge Deck",
		grade: "M35",
		status: "Draft",
		created: "2026-09-14",
		progress: 15
	}
];
var activityItems = [
	{
		icon: Beaker,
		text: "Mix design calculated for M30",
		time: "2 hours ago",
		tone: "primary"
	},
	{
		icon: TrendingUp,
		text: "Strength prediction updated — 34.2 MPa at 28 days",
		time: "3 hours ago",
		tone: "green"
	},
	{
		icon: Boxes,
		text: "Material comparison: OPC vs PPC vs PSC",
		time: "5 hours ago",
		tone: "amber"
	},
	{
		icon: Coins,
		text: "Cost analysis saved — ₹4,250/m³ sustainable",
		time: "1 day ago",
		tone: "primary"
	},
	{
		icon: Leaf,
		text: "Sustainability score: 82/100",
		time: "1 day ago",
		tone: "green"
	}
];
function DashboardHome() {
	const [projects, setProjects] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem("concrete-projects") || "null") || sampleProjects;
		} catch {
			return sampleProjects;
		}
	});
	const [savedMixes, setSavedMixes] = useState(0);
	useEffect(() => {
		try {
			setSavedMixes(JSON.parse(localStorage.getItem("concrete-mixes") || "[]").length);
		} catch {
			setSavedMixes(0);
		}
	}, []);
	const calc = calculate(defaultMix);
	const prediction = predict(defaultMix, 28);
	const curve = predictCurve(defaultMix);
	const stats = [
		{
			label: "Active Projects",
			value: String(projects.filter((p) => p.status === "Active").length),
			detail: `${projects.length} total projects`,
			icon: LayoutDashboard,
			tone: "blue"
		},
		{
			label: "Mix Designs",
			value: String(savedMixes),
			detail: "Saved locally",
			icon: Beaker,
			tone: "green"
		},
		{
			label: "Material Searches",
			value: "0",
			detail: "This session",
			icon: Boxes,
			tone: "amber"
		},
		{
			label: "Strength Predictions",
			value: "1",
			detail: `${prediction.toFixed(1)} MPa current`,
			icon: TrendingUp,
			tone: "green"
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 p-4 sm:p-6 lg:p-8",
		children: [
			/* @__PURE__ */ jsx(PageHeading, {
				eyebrow: "Engineering Dashboard",
				title: "Project Overview",
				description: "Track your engineering projects, mix designs, material selections, and analysis in one workspace.",
				action: /* @__PURE__ */ jsx(Link, {
					to: "/app/build-advisor",
					children: /* @__PURE__ */ jsxs(Button, {
						size: "lg",
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " New Project"]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ jsx(Metric, { ...s }, s.label))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-5 xl:grid-cols-[1.5fr_1fr]",
				children: [/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
					icon: Archive,
					title: "Recent Projects",
					subtitle: "Engineering project workspace",
					action: /* @__PURE__ */ jsx(Link, {
						to: "/app/saved",
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "sm",
							children: ["View all ", /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: projects.map((p) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary",
								children: /* @__PURE__ */ jsx(FlaskConical, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-medium",
								children: p.name
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [
									p.grade,
									" · Created ",
									p.created
								]
							})] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "hidden w-24 sm:block",
								children: /* @__PURE__ */ jsx(ScoreBar, {
									score: p.progress,
									tone: p.status === "Completed" ? "accent" : "primary"
								})
							}), /* @__PURE__ */ jsx(Badge, {
								tone: p.status === "Active" ? "green" : p.status === "Completed" ? "accent" : "default",
								children: p.status
							})]
						})]
					}, p.id))
				})] }), /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
					icon: Activity,
					title: "Recent Activity",
					subtitle: "Engineering workflow events"
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-3",
					children: activityItems.map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${{
									primary: "bg-primary/8 text-primary",
									green: "bg-accent/10 text-accent",
									amber: "bg-chart-3/15 text-chart-3"
								}[item.tone]}`,
								children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-sm leading-snug",
									children: item.text
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-0.5 flex items-center gap-1 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }), item.time]
								})]
							})]
						}, i);
					})
				})] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-5 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxs(Card, { children: [
						/* @__PURE__ */ jsx(CardHeader, {
							icon: TrendingUp,
							title: "Strength Prediction",
							subtitle: "Current mix · 28-day prediction"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-baseline gap-2",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-mono text-3xl font-semibold",
									children: prediction.toFixed(1)
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-sm text-muted-foreground",
									children: "MPa"
								}),
								/* @__PURE__ */ jsx(Badge, {
									tone: "green",
									children: prediction >= 30 ? "Meets target" : "Below target"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "h-[180px]",
							children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(BarChart, {
								data: curve.slice(0, 4),
								margin: {
									left: -20,
									right: 5,
									top: 5,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ jsx(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--border)",
										vertical: false
									}),
									/* @__PURE__ */ jsx(XAxis, {
										dataKey: "age",
										tick: chartAxisStyle,
										stroke: "var(--muted-foreground)",
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ jsx(YAxis, {
										tick: chartAxisStyle,
										stroke: "var(--muted-foreground)",
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ jsx(Tooltip, { contentStyle: chartTooltipStyle }),
									/* @__PURE__ */ jsx(Bar, {
										dataKey: "sustainable",
										name: "Strength",
										fill: "var(--chart-1)",
										radius: [
											4,
											4,
											0,
											0
										],
										barSize: 24
									})
								]
							}) })
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/app/strength",
							className: "mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80",
							children: ["View full prediction ", /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					] }),
					/* @__PURE__ */ jsxs(Card, { children: [
						/* @__PURE__ */ jsx(CardHeader, {
							icon: Coins,
							title: "Cost Overview",
							subtitle: "Sustainable vs conventional"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-muted/40 p-3.5",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground",
										children: "Conventional mix"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-1 font-mono text-xl font-semibold",
										children: ["₹", (calc.binder * 8 + 720 * 1.2 + 1080 * 1.1 + 170 * .05 + calc.binder * 1.2 / 100 * 95).toFixed(0)]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-[11px] text-muted-foreground",
										children: "per m³"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-primary/15 bg-primary/[0.04] p-3.5",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-xs text-primary",
										children: "Sustainable mix"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-1 font-mono text-xl font-semibold text-primary",
										children: ["₹", (calc.cement * 8 + calc.silica * 18 + calc.fineNatural * 1.2 + calc.coarseNatural * 1.1 + 170 * .05 + calc.sp * 95 + calc.plastic * 4).toFixed(0)]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-[11px] text-muted-foreground",
										children: "per m³"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/app/cost",
							className: "mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80",
							children: ["Full cost analysis ", /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					] }),
					/* @__PURE__ */ jsxs(Card, { children: [
						/* @__PURE__ */ jsx(CardHeader, {
							icon: Leaf,
							title: "Sustainability Score",
							subtitle: "Environmental impact assessment"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-baseline gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-3xl font-semibold text-accent",
								children: Math.min(98, Math.round(80.6))
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm text-muted-foreground",
								children: "/ 100"
							})]
						}),
						/* @__PURE__ */ jsx(ScoreBar, {
							score: Math.min(98, 80.6),
							tone: "accent"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 space-y-2 text-xs",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Plastic diverted"
									}), /* @__PURE__ */ jsxs("span", {
										className: "font-mono font-semibold",
										children: [calc.plastic.toFixed(1), " kg/m³"]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "Cement replaced"
									}), /* @__PURE__ */ jsxs("span", {
										className: "font-mono font-semibold",
										children: [calc.silica.toFixed(1), " kg/m³"]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "CO₂ reduction"
									}), /* @__PURE__ */ jsxs("span", {
										className: "font-mono font-semibold",
										children: [(calc.silica * .02 + 10 * .15 + calc.cement * .08 * .82).toFixed(1), " kg/m³"]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/app/sustainability",
							className: "mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80",
							children: ["Full analysis ", /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					] })
				]
			}),
			/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
				icon: Cpu,
				title: "Engineering Workflow",
				subtitle: "Guided project workflow from concept to report"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					{
						icon: Cpu,
						label: "Build Advisor",
						to: "/app/build-advisor"
					},
					{
						icon: Building2,
						label: "Structural",
						to: "/app/structural"
					},
					{
						icon: Beaker,
						label: "Mix Design",
						to: "/app/mix-design"
					},
					{
						icon: TrendingUp,
						label: "Strength",
						to: "/app/strength"
					},
					{
						icon: FileText,
						label: "Reports",
						to: "/app/reports"
					}
				].map((step, i) => {
					const Icon = step.icon;
					return /* @__PURE__ */ jsx(Link, {
						to: step.to,
						children: /* @__PURE__ */ jsxs("div", {
							className: "group rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary transition-colors group-hover:bg-primary/12",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs font-semibold text-muted-foreground",
									children: String(i + 1).padStart(2, "0")
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold",
								children: step.label
							})]
						})
					}, step.label);
				})
			})] })
		]
	});
}
//#endregion
export { DashboardHome as component };

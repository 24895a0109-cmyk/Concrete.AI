import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Beaker, Boxes, Building2, Calculator, ChevronRight, CircleCheck, Coins, Cpu, FileText, FlaskConical, GraduationCap, HardHat, Layers, Leaf, MapPin, Network, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function LandingPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Capabilities, {}),
			/* @__PURE__ */ jsx(Workflow, {}),
			/* @__PURE__ */ jsx(MaterialIntelligence, {}),
			/* @__PURE__ */ jsx(AIPrediction, {}),
			/* @__PURE__ */ jsx(StructuralIntelligence, {}),
			/* @__PURE__ */ jsx(Sustainability, {}),
			/* @__PURE__ */ jsx(Audiences, {}),
			/* @__PURE__ */ jsx(FinalCTA, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
						children: /* @__PURE__ */ jsx(FlaskConical, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "text-[15px] font-semibold tracking-tight",
						children: ["CONCRETE", /* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: ".AI"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#capabilities",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: "Capabilities"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#workflow",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: "Workflow"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#audiences",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: "For Teams"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#sustainability",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: "Sustainability"
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2.5",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/app",
						className: "inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]",
						children: ["Launch Platform", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "AI-Powered Civil Engineering & Construction Intelligence Platform"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]",
						children: [
							"Build smarter.",
							/* @__PURE__ */ jsx("br", {}),
							"Design stronger.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "Analyze better."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "CONCRETE.AI combines AI-assisted engineering, concrete mix design, material intelligence, structural concepts, supplier discovery, cost analysis, and sustainability analysis in one professional platform."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/app",
							className: "inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]",
							children: ["Start Engineering Project", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/app",
							className: "inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted active:scale-[0.98]",
							children: ["Explore Platform", /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })]
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6",
				children: [
					{
						icon: Beaker,
						label: "Mix Design",
						value: "IS 10262:2019"
					},
					{
						icon: TrendingUp,
						label: "Strength Prediction",
						value: "3–90 day curve"
					},
					{
						icon: Boxes,
						label: "Material Database",
						value: "15+ materials"
					},
					{
						icon: MapPin,
						label: "Supplier Discovery",
						value: "Location-aware"
					}
				].map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold",
								children: item.label
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: item.value
							})
						]
					}, item.label);
				})
			})]
		})]
	});
}
function Capabilities() {
	return /* @__PURE__ */ jsx("section", {
		id: "capabilities",
		className: "border-b border-border py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }), "Platform Capabilities"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Everything you need for concrete engineering"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: "A unified workspace for mix design, material selection, structural concepts, cost analysis, and sustainability — built on transparent engineering principles."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Beaker,
						title: "Concrete Mix Design",
						desc: "Transparent mix calculations following IS 10262:2019 principles with silica fume and recycled plastic aggregate support."
					},
					{
						icon: Cpu,
						title: "AI Build Advisor",
						desc: "Preliminary recommendations for concrete grade, structural system, and materials based on building parameters."
					},
					{
						icon: Boxes,
						title: "Material Intelligence",
						desc: "Comprehensive database of cement, aggregates, SCMs, admixtures, and sustainable alternatives with properties and standards."
					},
					{
						icon: TrendingUp,
						title: "Strength Prediction",
						desc: "Model-based compressive strength estimates across curing ages from 3 to 90 days with confidence indicators."
					},
					{
						icon: Building2,
						title: "Structural Concept",
						desc: "Preliminary structural layout with column grid, beam, slab, and footing concepts for planning and education."
					},
					{
						icon: Calculator,
						title: "Cost Analysis",
						desc: "Compare conventional vs sustainable mix costs with editable local material prices and transportation estimates."
					},
					{
						icon: Leaf,
						title: "Sustainability Analysis",
						desc: "Quantify plastic waste diversion, CO₂ reduction, and natural aggregate savings with assumption-based scoring."
					},
					{
						icon: MapPin,
						title: "Nearby Material Finder",
						desc: "Search for suppliers by material type and location with filters for distance, rating, and delivery options."
					},
					{
						icon: FileText,
						title: "Engineering Reports",
						desc: "Generate comprehensive project reports covering mix design, strength, materials, cost, and sustainability."
					}
				].map((cap) => {
					const Icon = cap.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary/12",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-base font-semibold",
								children: cap.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: cap.desc
							})
						]
					}, cap.title);
				})
			})]
		})
	});
}
function Workflow() {
	const steps = [
		{
			icon: Building2,
			label: "Create Project",
			desc: "Define building parameters"
		},
		{
			icon: Cpu,
			label: "AI Build Advisor",
			desc: "Get preliminary recommendations"
		},
		{
			icon: Building2,
			label: "Structural Concept",
			desc: "Column grid and foundation"
		},
		{
			icon: Boxes,
			label: "Material Selection",
			desc: "Compare and select materials"
		},
		{
			icon: Beaker,
			label: "Mix Design",
			desc: "Calculate mix proportions"
		},
		{
			icon: TrendingUp,
			label: "Strength Prediction",
			desc: "Estimate compressive strength"
		},
		{
			icon: Coins,
			label: "Cost Analysis",
			desc: "Compare cost per m³"
		},
		{
			icon: Leaf,
			label: "Sustainability",
			desc: "Assess environmental impact"
		},
		{
			icon: MapPin,
			label: "Nearby Suppliers",
			desc: "Find material sources"
		},
		{
			icon: FileText,
			label: "Engineering Report",
			desc: "Generate project report"
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "workflow",
		className: "border-b border-border bg-muted/30 py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }), "Engineering Workflow"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "From concept to report in one platform"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: "A guided workflow that takes you from project creation to a complete engineering report."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: steps.map((step, i) => {
					const Icon = step.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-xl border border-border bg-card p-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs font-semibold text-muted-foreground",
									children: String(i + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold",
								children: step.label
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: step.desc
							}),
							i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute -right-2 top-1/2 hidden h-px w-4 bg-border lg:block" })
						]
					}, step.label);
				})
			})]
		})
	});
}
function MaterialIntelligence() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }), "Material Intelligence"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Know your materials before you pour"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "Access a comprehensive database of cement types, aggregates, supplementary cementitious materials, admixtures, and sustainable alternatives. Compare properties, costs, and suitability for your specific project."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-3",
						children: [
							"Properties, density, strength contribution, and durability for each material",
							"Search and filter by category, building type, or structural element",
							"Side-by-side comparison of 2–4 materials with scoring",
							"Sustainability ratings and relevant Indian standards"
						].map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), item]
						}, item))
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						{
							icon: Layers,
							label: "Cement",
							count: "3 types"
						},
						{
							icon: Boxes,
							label: "Aggregates",
							count: "4 types"
						},
						{
							icon: Sparkles,
							label: "SCMs",
							count: "3 types"
						},
						{
							icon: Beaker,
							label: "Admixtures",
							count: "2 types"
						},
						{
							icon: Building2,
							label: "Blocks",
							count: "3 types"
						},
						{
							icon: Network,
							label: "Recycled",
							count: "2 types"
						}
					].map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card p-4 shadow-sm",
							children: [
								/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ jsx("div", {
									className: "mt-3 text-sm font-semibold",
									children: item.label
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: item.count
								})
							]
						}, item.label);
					})
				})]
			})
		})
	});
}
function AIPrediction() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-muted/30 py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "order-2 grid grid-cols-2 gap-3 lg:order-1",
					children: [
						{
							label: "28-day prediction",
							value: "34.2",
							unit: "MPa"
						},
						{
							label: "Confidence",
							value: "87",
							unit: "%"
						},
						{
							label: "Target grade",
							value: "M30",
							unit: ""
						},
						{
							label: "Curing ages",
							value: "6",
							unit: "points"
						}
					].map((item) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-5 shadow-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: item.label
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-2 font-mono text-2xl font-semibold",
							children: [item.value, /* @__PURE__ */ jsx("span", {
								className: "ml-1 text-sm font-normal text-muted-foreground",
								children: item.unit
							})]
						})]
					}, item.label))
				}), /* @__PURE__ */ jsxs("div", {
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
							children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }), "AI Strength Prediction"]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "Predict strength before you pour"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base leading-relaxed text-muted-foreground",
							children: "Estimate compressive strength development from 3 to 90 days using a transparent model that accounts for binder content, water-binder ratio, silica fume benefit, and plastic replacement penalty."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 rounded-xl border border-primary/15 bg-primary/[0.03] p-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ jsx("p", {
									className: "text-xs leading-relaxed text-muted-foreground",
									children: "Labeled as a prototype model-based estimate — not a trained ML model. The interface is prepared for future ML model integration. All predictions require laboratory validation."
								})]
							})
						})
					]
				})]
			})
		})
	});
}
function StructuralIntelligence() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }), "Structural Intelligence"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Visualize your structure before you build"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "Generate a preliminary structural concept with column grid layout, beam and slab arrangement, foundation type, and seismic considerations based on your building parameters."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-3",
						children: [
							"Column grid based on spacing and building dimensions",
							"Foundation type recommendation based on soil conditions",
							"Seismic zone considerations per IS 1893:2016",
							"Element inspection: columns, beams, slabs, footings, shear walls"
						].map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), item]
						}, item))
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-md",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center gap-2 text-sm font-semibold",
							children: [/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-primary" }), "Structural Concept Preview"]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-4 gap-2",
							children: Array.from({ length: 16 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square rounded border-2 border-primary/20 bg-primary/5" }, i))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 grid grid-cols-3 gap-2 text-xs",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg bg-muted p-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-muted-foreground",
										children: "Columns"
									}), /* @__PURE__ */ jsx("div", {
										className: "font-mono font-semibold",
										children: "16"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg bg-muted p-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-muted-foreground",
										children: "Grid"
									}), /* @__PURE__ */ jsx("div", {
										className: "font-mono font-semibold",
										children: "4×4"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg bg-muted p-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-muted-foreground",
										children: "Height"
									}), /* @__PURE__ */ jsx("div", {
										className: "font-mono font-semibold",
										children: "12.0m"
									})]
								})
							]
						})
					]
				})]
			})
		})
	});
}
function Sustainability() {
	return /* @__PURE__ */ jsx("section", {
		id: "sustainability",
		className: "border-b border-border bg-muted/30 py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-accent" }), "Sustainability"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Engineer for a greener future"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: "Quantify the environmental impact of your concrete mix. Track plastic waste diversion, CO₂ reduction, and natural aggregate savings with transparent, assumption-based scoring."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Leaf,
						label: "Plastic diverted",
						value: "10.2 kg/m³"
					},
					{
						icon: Layers,
						label: "Aggregate reduction",
						value: "10%"
					},
					{
						icon: Beaker,
						label: "Cement replaced",
						value: "30.2 kg/m³"
					},
					{
						icon: TrendingUp,
						label: "CO₂ reduction",
						value: "12.5 kg/m³"
					}
				].map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-5 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: item.label
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-1.5 font-mono text-xl font-semibold",
								children: item.value
							})
						]
					}, item.label);
				})
			})]
		})
	});
}
function Audiences() {
	return /* @__PURE__ */ jsx("section", {
		id: "audiences",
		className: "border-b border-border py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 max-w-2xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
					children: [/* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }), "For Engineering Teams"]
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Built for the entire construction ecosystem"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: HardHat,
						title: "Civil Engineers",
						desc: "Transparent mix design, strength prediction, and structural concepts for project planning and analysis."
					},
					{
						icon: Building2,
						title: "Contractors",
						desc: "Cost analysis, material comparison, and supplier discovery to optimize procurement and construction."
					},
					{
						icon: Users,
						title: "Construction Companies",
						desc: "Project management, standardized workflows, and comprehensive reporting for multiple projects."
					},
					{
						icon: GraduationCap,
						title: "Researchers & Students",
						desc: "Educational tool for understanding concrete technology, sustainable materials, and engineering principles."
					}
				].map((aud) => {
					const Icon = aud.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-5 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-base font-semibold",
								children: aud.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: aud.desc
							})
						]
					}, aud.title);
				})
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-primary py-20 text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-serif text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Start your engineering project today"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80",
					children: "Launch the platform and access mix design, material intelligence, structural concepts, cost analysis, and sustainability tools — all in one workspace."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/app",
						className: "inline-flex h-12 items-center gap-2 rounded-xl bg-primary-foreground px-6 text-sm font-semibold text-primary shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]",
						children: ["Launch Platform", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ jsx("a", {
						href: "#capabilities",
						className: "inline-flex h-12 items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 active:scale-[0.98]",
						children: "Explore Capabilities"
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "py-12",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center justify-between gap-4 sm:flex-row",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
						children: /* @__PURE__ */ jsx(FlaskConical, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsx("div", {
						className: "text-sm font-semibold",
						children: "CONCRETE.AI"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground",
					children: "AI-Powered Civil Engineering & Construction Intelligence Platform. Preliminary engineering tool — requires validation by qualified professionals."
				})]
			})
		})
	});
}
//#endregion
export { LandingPage as component };

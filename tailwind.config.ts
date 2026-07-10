import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				tertiary: {
					DEFAULT: "hsl(var(--tertiary))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					"1": "hsl(var(--accent-1))",
					"2": "hsl(var(--accent-2))",
					"3": "hsl(var(--accent-3))",
					"4": "hsl(var(--accent-4))",
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				// AWS Next Gen Hacks design tokens (scoped via .aws-root)
				canvas: "rgb(var(--aws-canvas) / <alpha-value>)",
				surface: "rgb(var(--aws-surface) / <alpha-value>)",
				ebony: "rgb(var(--aws-surface) / <alpha-value>)",
				panel: "rgb(var(--aws-panel) / <alpha-value>)",
				line: "rgb(var(--aws-line) / <alpha-value>)",
				hair: "rgb(var(--aws-hair) / <alpha-value>)",
				heading: "rgb(var(--aws-heading) / <alpha-value>)",
				body: "rgb(var(--aws-body) / <alpha-value>)",
				ash: "rgb(var(--aws-ash) / <alpha-value>)",
				orange: "#FF9900",
				rust: "#B8422E",
				gold: "#FFD394",
				ink: "#0B0C0E",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"sponsor-scroll": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				cycleText: {
					"0%, 4%": {
						opacity: "0",
						transform: "translate(-50%, 5px) rotate(-3deg)",
					},
					"4%, 33%": {
						opacity: "1",
						transform: "translate(-50%, 0) rotate(-3deg)",
					},
					"34%, 66%": {
						opacity: "0",
						transform: "translate(-50%, 20px)",
					},
					"67%, 100%": {
						opacity: "0",
						transform: "translate(-50%, -20px)",
					},
				},
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"sponsor-scroll": "sponsor-scroll 45s linear infinite",
				fade1: "cycleText 3s ease-in-out infinite 0s",
				fade2: "cycleText 3s ease-in-out infinite -2s",
				fade3: "cycleText 3s ease-in-out infinite -1s",
			},
			fontFamily: {
				title: ["var(--font-mono)", ...fontFamily.mono],
				body: ["var(--font-sans)", ...fontFamily.sans],
			},
			transitionDuration: {
				slow: "12000ms",
			},
			boxShadow: {
				secondaryNav: "inset 0 -2px 0 hsl(var(--primary))",
				"custom-hard": "2px 2px 0px 0px rgba(0, 0, 0, 1)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

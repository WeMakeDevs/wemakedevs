import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// H1 Component
		h1: ({ children, ...props }) => (
			<h3
				{...props}
				className="text-2xl md:text-3xl font-medium tracking-wide mt-8 mb-4 uppercase"
			>
				{children}
			</h3>
		),

		// H2 Component
		h2: ({ children, ...props }) => (
			<h4
				{...props}
				className="text-xl md:text-2xl font-medium tracking-wide mt-6 mb-3"
			>
				{children}
			</h4>
		),

		// H3 Component
		h3: ({ children, ...props }) => (
			<h5
				{...props}
				className="text-base md:text-lg font-medium tracking-wide mt-4 mb-2"
			>
				{children}
			</h5>
		),

		// Paragraph Component
		p: ({ children, ...props }) => (
			<p {...props} className="my-4">
				{children}
			</p>
		),

		// Unordered List Component
		ul: ({ children, ...props }) => (
			<ul {...props} className="my-4 list-disc list-inside">
				{children}
			</ul>
		),

		// Ordered List Component
		ol: ({ children, ...props }) => (
			<ol {...props} className="my-4 list-decimal list-inside">
				{children}
			</ol>
		),

		// List Item Component
		li: ({ children, ...props }) => (
			<li {...props} className="my-2">
				{children}
			</li>
		),

		// Anchor Component
		a: ({ children, ...props }) => (
			<a
				{...props}
				className="text-blue-700 hover:underline"
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		),

		// Spread additional components
		...components,
	};
}

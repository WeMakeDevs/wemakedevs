import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import type {
	AnchorHTMLAttributes,
	ClassAttributes,
	HTMLAttributes,
	JSX,
	LiHTMLAttributes,
	OlHTMLAttributes,
} from "react";

const components = {
	h1: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLHeadingElement> &
			HTMLAttributes<HTMLHeadingElement>,
	) => (
		<h3
			{...props}
			className="text-2xl md:text-3xl font-medium tracking-wide mt-8 mb-4 uppercase"
		>
			{props.children}
		</h3>
	),

	h2: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLHeadingElement> &
			HTMLAttributes<HTMLHeadingElement>,
	) => (
		<h4
			{...props}
			className="text-xl md:text-2xl font-medium tracking-wide mt-6 mb-3"
		>
			{props.children}
		</h4>
	),

	h3: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLHeadingElement> &
			HTMLAttributes<HTMLHeadingElement>,
	) => (
		<h5
			{...props}
			className="text-base md:text-lg font-medium tracking-wide mt-4 mb-2"
		>
			{props.children}
		</h5>
	),

	p: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLParagraphElement> &
			HTMLAttributes<HTMLParagraphElement>,
	) => (
		<p {...props} className="my-4">
			{props.children}
		</p>
	),

	ul: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLUListElement> &
			HTMLAttributes<HTMLUListElement>,
	) => (
		<ul {...props} className="my-4 list-disc list-inside">
			{props.children}
		</ul>
	),

	ol: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLOListElement> &
			OlHTMLAttributes<HTMLOListElement>,
	) => (
		<ol {...props} className="my-4 list-decimal list-inside">
			{props.children}
		</ol>
	),

	li: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLLIElement> &
			LiHTMLAttributes<HTMLLIElement>,
	) => (
		<li {...props} className="my-2">
			{props.children}
		</li>
	),

	a: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLAnchorElement> &
			AnchorHTMLAttributes<HTMLAnchorElement>,
	) => (
		<a
			{...props}
			className="text-blue-700 hover:underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.children}
		</a>
	),
};

export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}

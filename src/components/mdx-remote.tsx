import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props) => (
    <h3 {...props} className="text-2xl md:text-3xl font-medium tracking-wide mt-8 mb-4">{props.children}</h3>
  ),

  h2: (props) => (
    <h4 {...props} className="text-xl md:text-2xl font-medium tracking-wide mt-6 mb-3">{props.children}</h4>
  ),

  h3: (props) => (
    <h5 {...props} className="text-base md:text-lg font-medium tracking-wide mt-4 mb-2">{props.children}</h5>
  ),

  p: (props) => (
    <p {...props} className="my-4">{props.children}</p>
  ),

  ul: (props) => (
    <ul {...props} className="my-4 list-disc list-inside">{props.children}</ul>
  ),

  ol: (props) => (
    <ol {...props} className="my-4 list-decimal list-inside">{props.children}</ol>
  ),

  li: (props) => (
    <li {...props} className="my-2">{props.children}</li>
  ),

  a: (props) => (
    <a {...props} className="bg-yellow-100/20 inline px-1 py-0.5 hover:bg-yellow-100/0">{props.children}</a>
  ),
}

export function CustomMDX(props) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  )
}

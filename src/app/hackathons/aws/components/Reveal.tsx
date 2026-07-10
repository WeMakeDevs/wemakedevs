"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "0px 0px -8% 0px" }}
			transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
		>
			{children}
		</motion.div>
	);
}

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NavContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavContainer = forwardRef<HTMLDivElement, NavContainerProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"box-border mx-auto",
					"w-[1400px] max-2xl:w-[95%] max-xl:w-[95%] max-lg:w-[95%] max-md:w-[95%] max-sm:w-[95%] px-5 lg::px-8",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

NavContainer.displayName = "NavContainer";

export { NavContainer };

export type { NavContainerProps };

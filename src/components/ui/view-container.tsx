import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ViewContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ViewContainer = forwardRef<HTMLDivElement, ViewContainerProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"box-border mx-auto",
					"w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

ViewContainer.displayName = "ViewContainer";

export { ViewContainer };

export type { ViewContainerProps };

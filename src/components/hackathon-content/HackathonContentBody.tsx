"use server";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";

const HackathonContentBody = ({
	className,
	children,
	...props
}: GeneralComponent) => {
	return (
		<div className={cn(className, "my-5 font-medium")} {...props}>
			{children}
		</div>
	);
};

export default HackathonContentBody;

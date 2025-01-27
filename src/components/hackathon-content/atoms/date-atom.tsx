import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";

interface DateAtomProps extends GeneralComponent {
	date: string;
}

const DateAtom = ({ className, date, ...props }: DateAtomProps) => {
	const options = {
		day: "numeric" as const,
		month: "short" as const,
		hour12: true,
	};

	return (
		<span className={cn("", className)} {...props}>
			{new Date(date).toLocaleString("en-GB", options)}
		</span>
	);
};

export default DateAtom;

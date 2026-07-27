"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { CheckCircle2 } from "lucide-react";
import { type FormEvent, useState } from "react";

const RegistrationForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [org, setOrg] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!name.trim() || !email.trim() || !org.trim()) return;
		setSubmitted(true);
	};

	const fieldClass =
		"w-full rounded-lg border border-[#2f3441] bg-[#101116] px-4 py-3.5 text-[15px] text-[#f5f7fa] placeholder:text-[#4d5462] focus:border-[#8b93a7] focus:outline-none";
	const labelClass =
		"mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-[#8b93a7]";

	return (
		<div className="py-20 border-y border-[#3c4152]/60 bg-[#0b0c0e]/60">
			<ViewContainer>
				<div className="mx-auto max-w-2xl text-center">
					<span className="sz-eyebrow">Apply</span>

					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa]">
						Apply to attend
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						The venue holds a fixed number of people, so places are
						reviewed rather than sold. Tell us who you are and what
						you work on, and we will email you either way.
					</p>

					{submitted ? (
						<div className="mt-10 rounded-2xl border border-[#2be38b]/40 bg-[#2be38b]/[0.06] p-8 text-left">
							<div className="flex items-start gap-4">
								<CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-[#2be38b]" />
								<div>
									<h3 className="text-xl font-extrabold text-[#2be38b]">
										Application received, {name.trim()}
									</h3>
									<p className="mt-2.5 leading-relaxed text-[#c0c1c3]">
										We have your details and will come back
										to{" "}
										<span className="font-semibold text-[#f5f7fa]">
											{email.trim()}
										</span>{" "}
										once we have reviewed this batch.
										Nothing to check back on.
									</p>
									<p className="mt-3 text-sm text-[#8b93a7]">
										In the meantime, main-stage talks from
										Edition 1 are on the WeMakeDevs YouTube
										channel.
									</p>
								</div>
							</div>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="mt-10 mx-auto max-w-md text-left"
						>
							<div className="grid gap-4">
								<div>
									<label
										htmlFor="register-name"
										className={labelClass}
									>
										Full name
									</label>
									<input
										id="register-name"
										name="name"
										type="text"
										required
										autoComplete="name"
										value={name}
										onChange={e => setName(e.target.value)}
										placeholder="Ada Lovelace"
										className={fieldClass}
									/>
								</div>
								<div>
									<label
										htmlFor="register-email"
										className={labelClass}
									>
										Email address
									</label>
									<input
										id="register-email"
										name="email"
										type="email"
										required
										autoComplete="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										placeholder="you@company.com"
										className={fieldClass}
									/>
								</div>
								<div>
									<label
										htmlFor="register-org"
										className={labelClass}
									>
										Organisation
									</label>
									<input
										id="register-org"
										name="organisation"
										type="text"
										required
										autoComplete="organization"
										value={org}
										onChange={e => setOrg(e.target.value)}
										placeholder="Company, university or independent"
										className={fieldClass}
									/>
								</div>
								<button
									type="submit"
									className="agent-btn mt-1 justify-center text-center"
								>
									Apply Now
								</button>
							</div>
							<p className="mt-4 text-center text-[13px] text-[#62687c]">
								We will only use this to contact you about a
								seat at Edition II.
							</p>
						</form>
					)}
				</div>
			</ViewContainer>
		</div>
	);
};

export default RegistrationForm;

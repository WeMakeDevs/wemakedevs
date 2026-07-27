"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { CheckCircle2, Users } from "lucide-react";
import { type FormEvent, useState } from "react";

const WaitlistForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!name.trim() || !email.trim()) return;
		setSubmitted(true);
	};

	return (
		<div className="py-24 border-t border-[#3c4152]/60 bg-gradient-to-b from-[#0b0c0e] to-[#08090b]">
			<ViewContainer>
				<div className="mx-auto max-w-2xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-[#ffcd56]/30 bg-[#ffcd56]/10 px-5 py-2 text-sm font-semibold text-[#ffcd56]">
						<Users className="h-4 w-4" />
						All 300 seats are taken
					</span>

					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa] glow-orange">
						Join the waitlist
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						The Loft caps out at 300 people and registration is now
						full. Leave your details and we&apos;ll email you the
						moment a spot opens up &mdash; places do come back as
						plans change.
					</p>

					{submitted ? (
						<div className="mt-10 rounded-2xl border border-[#2be38b]/40 bg-[#2be38b]/8 p-8 text-left">
							<div className="flex items-start gap-4">
								<CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-[#2be38b]" />
								<div>
									<h3 className="text-xl font-extrabold text-[#2be38b]">
										You&apos;re on the waitlist,{" "}
										{name.trim()}
									</h3>
									<p className="mt-2.5 leading-relaxed text-[#c0c1c3]">
										The conference has reached its
										300-person capacity, so we&apos;ve added
										you to the waitlist. If a spot opens up
										we&apos;ll email{" "}
										<span className="font-semibold text-[#f5f7fa]">
											{email.trim()}
										</span>{" "}
										straight away &mdash; no need to check
										back.
									</p>
									<p className="mt-3 text-sm text-[#8b93a7]">
										In the meantime, main-stage talks will
										be published on the WeMakeDevs YouTube
										channel after the event.
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
										htmlFor="waitlist-name"
										className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-[#8b93a7]"
									>
										Full name
									</label>
									<input
										id="waitlist-name"
										name="name"
										type="text"
										required
										autoComplete="name"
										value={name}
										onChange={e => setName(e.target.value)}
										placeholder="Ada Lovelace"
										className="w-full rounded-xl border border-[#3c4152] bg-[#101116] px-4 py-3.5 text-[15px] text-[#f5f7fa] placeholder:text-[#4d5462] focus:border-[#5fe9ff] focus:outline-none"
									/>
								</div>
								<div>
									<label
										htmlFor="waitlist-email"
										className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-[#8b93a7]"
									>
										Email address
									</label>
									<input
										id="waitlist-email"
										name="email"
										type="email"
										required
										autoComplete="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										placeholder="you@company.com"
										className="w-full rounded-xl border border-[#3c4152] bg-[#101116] px-4 py-3.5 text-[15px] text-[#f5f7fa] placeholder:text-[#4d5462] focus:border-[#5fe9ff] focus:outline-none"
									/>
								</div>
								<button
									type="submit"
									className="agent-btn mt-1 justify-center text-center text-lg"
								>
									Add me to the waitlist
								</button>
							</div>
							<p className="mt-4 text-center text-[13px] text-[#62687c]">
								We&apos;ll only use this to contact you about a
								seat at Edition 2.
							</p>
						</form>
					)}
				</div>
			</ViewContainer>
		</div>
	);
};

export default WaitlistForm;

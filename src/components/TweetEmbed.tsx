"use client";

export function TweetEmbed({ tweetUrl }: { tweetUrl: string }) {
	return (
		<blockquote
			className="twitter-tweet"
			data-dnt="true"
			data-theme="dark"
		>
			<a href={tweetUrl} />
		</blockquote>
	);
}

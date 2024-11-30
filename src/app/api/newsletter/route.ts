import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const email = await request.json();

	try {
		const response = await fetch("https://gql.hashnode.com/graphql", {
			method: "POST",
			headers: {
				Authorization: process.env.HASHNODE_AUTH_TOKEN ?? "",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
                    mutation {
                        subscribeToNewsletter(input: {
                            publicationId: "61c2dc628614531beb60b0f5"
                            email: "${email}"
                        }) {
                            status
                        }
                    }
                `,
			}),
		});

		const result = await response.json();
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(
			{ message: "Failed to subscribe", error },
			{ status: 500 },
		);
	}
}

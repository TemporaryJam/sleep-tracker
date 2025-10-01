import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function HomePage() {
    const user = await currentUser();
    console.log("user", user);

    if (!user) {
        return <Guest />;
    }

    return (
        <>
            <h1 className="text-4xl">Sleep tracker</h1>
            <div className="text-red-500">HomePage</div>
        </>
    );
}

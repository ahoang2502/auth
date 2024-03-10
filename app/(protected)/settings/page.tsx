"use client";

import { useTransition } from "react";
import { useSession } from "next-auth/react";

import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SettingsPage = () => {
	const [isPending, startTransition] = useTransition();

	const { update } = useSession();

	const onClick = () => {
		startTransition(() => {
			settings({
				name: "New name",
			}).then(() => {
				update();
			});
		});
	};

	return (
		<Card className="w-[600px]">
			<CardHeader>
				<p className="text-2xl font-semibold text-center">⚙️ Settings</p>
			</CardHeader>

			<CardContent>
				<Button onClick={onClick} disabled={isPending}>
					Update name
				</Button>
			</CardContent>
		</Card>
	);
};

export default SettingsPage;

"use client";

import { UserInfo } from "@/components/UserInfo";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
	const user = useCurrentUser();

	return (
		<div>
			<UserInfo user={user} label="📲 Client component" />
		</div>
	);
};

export default ClientPage;

import { auth } from "@/auth";
import { UserInfo } from "@/components/UserInfo";
import { currentUser } from "@/lib/auth";
import React from "react";

const ServerPage = async () => {
	const user = await currentUser();

	return (
		<div>
			<UserInfo user={user} label="💻 Server component" />
		</div>
	);
};

export default ServerPage;

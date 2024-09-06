import React from "react";

interface Props {
  username: string;
}

function UserIcon({ username }: Props) {
  return <div className="user-icon">{username.charAt(0).toUpperCase()}</div>;
}

export default UserIcon;

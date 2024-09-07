import React from "react";

interface Props {
  username: string;
}

function UserIcon({ username }: Props) {
  return (
    <div className="size-10 aspect-square rounded-full bg-black text-white text-center text-xl">
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

export default UserIcon;

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="h-10 w-10 rounded-full bg-secondary">
                <Image
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                  width={40}
                  height={40}
                />
              </div>
            </label>
          ) : (
            <button className="btn-sm btn" onClick={() => void signIn()}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

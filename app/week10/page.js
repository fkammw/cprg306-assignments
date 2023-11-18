"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = () => {
    firebaseSignOut();
  };

  return (


    <div>
        <div>
        <h1 className="font-bold text-xl ml-2 mt-2">Shopping List App 📱</h1>
        {!user && <button className="bg-blue-500 rounded-md p-4 ml-4 mt-2 mb-2 py-2 px-2  text-white" onClick={handleSignIn}>Sign In with GitHub</button>}
        </div>
        <div>
            {user && (
                <>
                    <h3 className="ml-2 mt-2">Welcome, User: {user.displayName} ({user.email})</h3>
                    <Link className="ml-2 mt-2" class="underline underline-offset-1 ml-2" href="/week8/shopping-list">Here is your Shopping List</Link>
                    <div>
                        <button className="bg-blue-500 rounded-md p-4 ml-4 mt-2 mb-2 py-2 px-2  text-white" onClick={handleSignOut}>Sign Out</button>
                    </div>
                    <div className="mt-2">
                        <Link className="bg-blue-500 rounded-md p-4 ml-4 mt-2 mb-2 py-2 px-2  text-white" href="/">Home</Link>
                    </div>
                </>
                )       
            }
  
        </div>
    </div>

  );
}
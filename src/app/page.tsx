import dynamic from "next/dynamic";
import { Suspense } from "react";
import WithAuth from "./components/auth/with-auth";
import Users from "./components/users/users";

export default function Home() {
  return (
    <WithAuth>
      <main>
        <Suspense fallback={<AppLoader />}>
          <Users />
        </Suspense>
      </main>
    </WithAuth>
  );
}

const AppLoader = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

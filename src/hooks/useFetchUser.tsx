import { useEffect, useState } from "react";

import { getUsers, searchForUser } from "@/lib/api/user";
import { UserPayload } from "@/lib/types";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<UserPayload[]>([]);
  const [loading, setLoading] = useState(false);

  const pullData = async () => {
    setLoading(true);
    const users = await getUsers();
    setLoading(false);
    setUsers(users);
  };

  const userSearch = async (userName: string) => {
    setLoading(true);
    const users = await searchForUser(userName);
    setLoading(false);
    setUsers(users);
  };
  useEffect(() => {
    pullData();
  }, []);

  return { users, loading, userSearch };
};

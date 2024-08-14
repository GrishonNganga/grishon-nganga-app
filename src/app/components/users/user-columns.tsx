import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { UserPayload } from "@/lib/types";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription } from "@/components/ui/card";

export const columns: ColumnDef<UserPayload>[] = [
  {
    accessorKey: "name",
    header: "Users",
    size: 80,
    cell: ({ row }) => (
      <Link
        shallow
        className="flex gap-x-2 items-center"
        href={"/groups/" + row.original.usrId}
      >
        <Avatar>
          <AvatarImage src={""} alt={`${name} photo`} />
          <div className="w-full uppercase py-2 bg-[#0D2B4D] text-xl rounded-md tracking-wide flex items-center justify-center text-white">
            {row.original.usrFirstname[0]}
            {row.original.usrLastname[0]}
          </div>
        </Avatar>
        <div>
          <div className="capitalize">
            {row.original.usrFirstname} {row.original.usrLastname}
          </div>
          <CardDescription className="text-xs">
            {row.original.usrUsername}
          </CardDescription>
        </div>
      </Link>
    ),
  },
];

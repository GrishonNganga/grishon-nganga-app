"use client";
import { useEffect, useState } from "react";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { columns } from "@/app/components/users/user-columns";

import UsersTable from "./users-table";
import Pagination from "@/app/components/users/pagination";
import { useFetchUsers } from "@/hooks/useFetchUser";
import Actions from "./actiom";
import { searchForUser } from "@/lib/api/user";

export default function Users() {
  const [filterValue, setFilterValue] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const { users, loading, userSearch } = useFetchUsers();

  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    if (filterValue !== "") {
      console.log(filterValue);
      userSearch(filterValue);
    }
  }, [filterValue]);
  return (
    <div className="w-full lg:container mt-5">
      <Actions
        filterValue={filterValue}
        handleChange={(val: string) => {
          setFilterValue(val);
        }}
      />
      <UsersTable
        headerGroups={table.getHeaderGroups()}
        rows={table.getRowModel().rows}
        loading={loading}
        columns={columns}
      />
      <Pagination
        filteredRows={table.getFilteredSelectedRowModel().rows}
        previousPage={() => {
          table.previousPage();
        }}
        nextPage={() => {
          table.nextPage();
        }}
      />
    </div>
  );
}

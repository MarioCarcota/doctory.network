"use client";

import { DataTableColumnHeader } from "./data-table-column-header";
import { statuses } from "./dataScheme";
import { DataTableRowActions } from "./data-table-row-actions";
import { MapPin } from "lucide-react";

export const columns = [
  {
    accessorKey: "full_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
    cell: ({ row }) => (
      <div className="w-full font-light">{row.getValue("full_name")}</div>
    ),
  },
  {
    accessorKey: "nucc_classification",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Classification" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[300px] truncate font-medium">
          {row.getValue("nucc_classification")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "individual_place",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
    cell: ({ row }) => (
      <div className="flex w-fit items-center">
        {row.getValue("individual_place") && <MapPin size={16} />}
        <span className="ml-1 max-w-[100px] truncate">
          {row.getValue("individual_place")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div
          className={`flex w-fit ${status.bg} items-center px-2 py-1 rounded-full text-white`}
        >
          {status.icon && <status.icon size={20} />}
          <span className="ml-1">{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

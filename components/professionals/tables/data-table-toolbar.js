import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { statuses } from "./dataScheme";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { Save } from "lucide-react";

export function DataTableToolbar({ table, data }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  // Extract unique classification from the nucc_classification column data
  const uniqueClass = Array.from(
    new Set(data.map((item) => item.nucc_classification).filter(Boolean))
  ).map((place) => ({ label: place, value: place }));

  // Extract unique locations from the individual_place column data
  const uniqueLocations = Array.from(
    new Set(data.map((item) => item.individual_place).filter(Boolean))
  ).map((place) => ({ label: place, value: place }));

  //FAKE LOCATION PULL THAT TAKES TOO MUCH MEMORY, WITH DB WILL BE OPTIMIZED TO DO INFINITE SCROLLING ON THE DATA
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center  flex-wrap gap-2">
        <Input
          placeholder="Search candidates..."
          value={table.getColumn("full_name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("full_name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("nucc_classification") && (
          <DataTableFacetedFilter
            column={table.getColumn("nucc_classification")}
            title="Classification"
            options={uniqueClass}
          />
        )}
        {table.getColumn("individual_place") && (
          <DataTableFacetedFilter
            column={table.getColumn("individual_place")}
            title="Location"
            options={uniqueLocations}
          />
        )}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}

        {isFiltered && (
          <Button onClick={() => {}} className="h-8 px-2 lg:px-3">
            Save Research Parameters
            <Save className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}

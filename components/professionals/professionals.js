import { dataDoctory } from "@/public/data/dataFile";
import { columns } from "./tables/columns";
import { DataTable } from "./tables/data-table";

function ProfDashboard() {
  return (
    <div className="w-full h-full mt-8 mb-36">
      <DataTable data={dataDoctory} columns={columns} />
    </div>
  );
}

export default ProfDashboard;

import { dataDoctory } from "@/public/data/dataFile";
import { columns } from "../professionals/columns";
import { DataTable } from "../professionals/data-table";

function ProfDashboard() {
  return (
    <div className="w-full h-full mt-8 mb-36">
      <DataTable data={dataDoctory} columns={columns} />
    </div>
  );
}

export default ProfDashboard;

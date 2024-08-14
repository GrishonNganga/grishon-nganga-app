import { Input } from "@/components/ui/input";

type ActionsProps = {
  filterValue: string;
  handleChange: (filterValue: string) => void;
};

export default function Actions({
  filterValue,
  handleChange,
}: ActionsProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-3 lg:gap-y-0 py-4">
      <Input
        placeholder="Search for user..."
        value={filterValue}
        onChange={(event) => handleChange(event.target.value)}
        className="max-w-sm"
      />
    </div>
  );
}

import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

function TodoHeader() {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-3xl">Taskify</h1>
      <Button className="flex cursor-pointer items-center bg-green-600 text-white hover:bg-green-700">
        <PlusIcon size={48} />
        <span>Add Todo</span>
      </Button>
    </div>
  );
}

export default TodoHeader;

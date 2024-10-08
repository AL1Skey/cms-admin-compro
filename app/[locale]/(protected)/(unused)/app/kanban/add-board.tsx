import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

const AddBoard = () => {
  const t = useTranslations("KanbanApp")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 me-1" />
          {t("addBoard")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new board</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="board-name">Board Name</Label>
            <Input id="board-name" placeholder="Board Name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="board-color">Board Color</Label>
            <Input id="board-color" type="color" placeholder="Board Name" className="p-0 border-0 shadow-none" />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBoard;
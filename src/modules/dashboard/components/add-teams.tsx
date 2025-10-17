import { Users } from "lucide-react";
import {
  Button,
  buttonVariants,
} from "../../../shared/components/shadcnui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shared/components/shadcnui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../shared/components/shadcnui/form";
import { Input } from "../../../shared/components/shadcnui/input";
import useAddTeams from "../hooks/use-add-teams";

const AddTeams = () => {
  const { form, loading, onAddTeam, open, setOpen } = useAddTeams();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Adicionar Time</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Time</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={onAddTeam} className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Ex:. Claro MasterTelecom"
                      disabled={loading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end gap-4">
              <DialogClose
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Cancelar
              </DialogClose>
              <Button disabled={loading} size="sm">
                Criar Time
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddTeams;

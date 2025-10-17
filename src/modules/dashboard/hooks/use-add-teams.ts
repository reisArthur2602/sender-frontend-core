import { useState } from "react";
import { useForm } from "react-hook-form";
import z4 from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const addTeamSchema = z4.object({
  name: z4.string().min(2, "O nome do time é um campo obrigatório"),
});

const useAddTeams = () => {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(addTeamSchema),
    defaultValues: { name: "" },
  });

  const loading = form.formState.isSubmitting;
  const onAddTeam = form.handleSubmit(() => {});

  return { loading, form, onAddTeam, open, setOpen };
};

export default useAddTeams;

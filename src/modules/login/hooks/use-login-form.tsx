import { useForm } from "react-hook-form";

export const UseLoginForm = () => {
  const form = useForm();
  const loading = form.formState.isSubmitting;

  const onLogin = form.handleSubmit(() => {});

  return { form, loading, onLogin };
};

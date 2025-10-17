import { KeySquare, MailIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shared/components/shadcnui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../../shared/components/shadcnui/input-group";
import UseLoginForm from "../hooks/use-login-form";

import { Button } from "../../../shared/components/shadcnui/button";

const LoginForm = () => {
  const { form, loading, onLogin } = UseLoginForm();
  return (
    <Form {...form}>
      <form onSubmit={onLogin} className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupInput
                    placeholder="email@email.com"
                    {...field}
                    disabled={loading}
                  />
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupInput
                    type="password"
                    placeholder="******"
                    {...field}
                    disabled={loading}
                  />
                  <InputGroupAddon>
                    <KeySquare />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading}>Acesse sua conta</Button>
      </form>
    </Form>
  );
};

export default LoginForm;

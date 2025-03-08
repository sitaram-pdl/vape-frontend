'use client';

import { z } from 'zod';

import { useLoginWithEmailAndPasswordMutation } from '@/api';
import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { Spinner } from '@/components/ui/spinner';
import { useAuthCookies } from '@/lib/auth-helper';
import { loginInputSchema } from '@/schema/auth.schema';

type LoginFormProps = {
  onSuccess: () => void;
};

type LoginInput = z.infer<typeof loginInputSchema>;

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { loginHelper } = useAuthCookies();
  const [login, { isLoading }] = useLoginWithEmailAndPasswordMutation();

  const handleLogin = async (loginData: LoginInput) => {
    const response = await login(loginData);

    if ('data' in response && response.data) {
      loginHelper(response.data.user, response.data.token);
      onSuccess();
    }
  };

  return (
    <div>
      <Form
        onSubmit={(values) => {
          handleLogin(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="email"
              label="Email Address"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div>
              <Button type="submit">
                {isLoading && <Spinner size="sm" className="text-current" />}
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

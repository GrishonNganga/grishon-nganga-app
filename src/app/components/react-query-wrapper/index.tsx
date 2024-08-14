"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type WithReactQueryProps = {
  children: React.ReactNode;
};
export default function WithReactQuery({ children }: WithReactQueryProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

import React, {FC, ReactElement} from 'react';
import {render} from '@testing-library/react-native';

import {QueryClient, QueryClientProvider} from 'react-query';

type Options = Parameters<typeof render>[1];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: false,
    },
  },
});
const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};

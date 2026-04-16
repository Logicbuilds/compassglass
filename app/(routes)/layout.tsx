'use client';

import { BasicLayout } from '@/components/layouts/BasicLayout/BasicLayout';
import { ReactNode } from 'react';

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return <BasicLayout>{children}</BasicLayout>;
}

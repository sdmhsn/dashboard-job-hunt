'use client';

import TitleForm from '@/components/atoms/TitleForm';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { overViewFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = ({}) => {
  const form = useForm<z.infer<typeof overViewFormSchema>>({
    resolver: zodResolver(overViewFormSchema),
  });

  const onSubmit = (val: z.infer<typeof overViewFormSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <TitleForm
        title={'Basic Information'}
        subtitle={'This is company information that you can update anytime.'}
      />

      <Separator />
    </div>
  );
};

export default OverviewForm;

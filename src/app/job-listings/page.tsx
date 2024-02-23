import React, { FC } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { JOB_LISTINGS_COLUMN, JOB_LISTINGS_DATA } from '@/constants';
import { Badge } from '@/components/ui/badge';
import ButtonActionTable from '@/components/organisms/ButtonActionTables';

interface JobListingsProps {}

const JobListings: FC<JobListingsProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold">Job Listings</div>

      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTINGS_COLUMN.map((item: string, i: number) => {
                return <TableHead key={item + i}>{item}</TableHead>;
              })}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTINGS_DATA.map((item: any, i: number) => {
              return (
                <TableRow key={item.roles + i}>
                  <TableCell>{item.roles}</TableCell>
                  <TableCell>
                    <Badge>{item.status}</Badge>
                  </TableCell>
                  <TableCell>{item.datePosted}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.jobType}</Badge>
                  </TableCell>
                  <TableCell>{item.applicants}</TableCell>
                  <TableCell>
                    {item.applicants} / {item.needs}
                  </TableCell>
                  <TableCell>
                    <ButtonActionTable url="/job-detail/1" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobListings;

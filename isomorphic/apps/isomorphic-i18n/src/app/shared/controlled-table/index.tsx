"use client";

import React from "react";
import dynamic from "next/dynamic";
import isEmpty from "lodash/isEmpty";
import { Title, Loader } from "rizzui";
import cn from "@utils/class-names";
import type { TableFilterProps } from "@/app/shared/controlled-table/table-filter";
import type { TablePaginationProps } from "@/app/shared/controlled-table/table-pagination";
import { i18nextLanguages } from "@utils/i18next-lang";
import Table, { TableProps } from "@/app/shared/table";
const TableFilter = dynamic(() => import("@/app/shared/controlled-table/table-filter"), {
  ssr: false,
});
const TablePagination = dynamic(
  () => import("@/app/shared/controlled-table/table-pagination"),
  { ssr: false }
);

type ControlledTableProps = {
  isLoading?: boolean;
  showLoadingText?: boolean;
  filterElement?: React.ReactElement;
  filterOptions?: TableFilterProps;
  paginatorOptions?: TablePaginationProps;
  tableFooter?: React.ReactNode;
  className?: string;
  paginatorClassName?: string;
  t?: (key: string) => string | undefined;
} & TableProps;

export default function ControlledTable({
  isLoading,
  filterElement,
  filterOptions,
  paginatorOptions,
  tableFooter,
  showLoadingText,
  paginatorClassName,
  className,
  t,
  ...tableProps
}: ControlledTableProps) {
  if (isLoading) {
    const i18next = i18nextLanguages;
    return (
      <div className="grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center">
        <Loader variant="spinner" size="xl" />
        {showLoadingText ? (
          <Title as="h6" className="-me-2 mt-4 font-medium text-gray-500">
            {i18next ? t?.("text-loading") : "Loading..."}
          </Title>
        ) : null}
      </div>
    );
  }

  return (
    <>
      {!isEmpty(filterOptions) && (
        <TableFilter {...filterOptions}>{filterElement}</TableFilter>
      )}

      <div className="relative">
        <Table
          scroll={{ x: 1300 }}
          rowKey={(record) => record.id}
          className={cn(className)}
          {...tableProps}
        />

        {tableFooter ? tableFooter : null}
      </div>

      {!isEmpty(paginatorOptions) && (
        <TablePagination
          t={t}
          paginatorClassName={paginatorClassName}
          {...paginatorOptions}
        />
      )}
    </>
  );
}

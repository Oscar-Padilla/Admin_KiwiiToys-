'use client';

import React from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  PaginationState,
  RowPinningState,
  SortingState,
  TableOptions,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

interface ExtendTableOptions<T extends Record<string, unknown>>
  extends Omit<
    TableOptions<T>,
    'data' | 'columns' | 'getCoreRowModel' | 'state'
  > {}

export function useTanStackTable<T extends Record<string, any>>({
  options,
  tableData,
  columnConfig,
}: {
  tableData: T[];
  options?: ExtendTableOptions<T>;
  columnConfig: ColumnDef<T, any>[];
}) {
  const [data, setData] = React.useState<T[]>([...tableData]);
  const [columns] = React.useState(() => [...columnConfig]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() =>
    columns.map((c) => c.id!)
  );
  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id),
    [data]
  );
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowPinning, setRowPinning] = React.useState<RowPinningState>({
    top: [],
    bottom: [],
  });

  // ===================================================================================================
  // these are custom functions dependent on dnd kit and react-table to handle Drag and Drop events
  const handleDragEndColumn = React.useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);
        return arrayMove(columnOrder, oldIndex, newIndex);
      });
    }
  }, []);

  const handleDragEndRow = React.useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );
  // these are custom functions dependent on dnd kit and react-table to handle Drag and Drop events
  // =========================================================================================

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      expanded,
      rowPinning,
      columnOrder,
      globalFilter,
      columnFilters,
    },
    ...options,
    getRowCanExpand: () => true,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onRowPinningChange: setRowPinning,
    onColumnOrderChange: setColumnOrder,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return {
    table,
    dataIds,
    setData,
    sensors,
    tableData: data,
    rowPinning,
    columnOrder,
    globalFilter,
    setRowPinning,
    setColumnOrder,
    setGlobalFilter,
    handleDragEndRow,
    handleDragEndColumn,
  };
}

"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    quantity: 316,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "678678",
  },
  {
    id: "3u1reuv4",
    quantity: 242,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "345345",
  },
  {
    id: "derv1ws0",
    quantity: 837,
    color: 'Đỏ',
    size: '300',
    status: "Đang xử lý",
    container: "567567",
  },
  {
    id: "5kma53ae",
    quantity: 874,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "798789",
  },
  {
    id: "bhqecj4p",
    quantity: 721,
    color: 'Đỏ',
    size: '300',
    status: "Bị từ chối",
    container: "345345",
  },
  {
    id: "m5gr84i9",
    quantity: 316,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "678678",
  },
  {
    id: "3u1reuv4",
    quantity: 242,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "345345",
  },
  {
    id: "derv1ws0",
    quantity: 837,
    color: 'Đỏ',
    size: '300',
    status: "Đang xử lý",
    container: "567567",
  },
  {
    id: "5kma53ae",
    quantity: 874,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "798789",
  },
  {
    id: "bhqecj4p",
    quantity: 721,
    color: 'Đỏ',
    size: '300',
    status: "Bị từ chối",
    container: "345345",
  },
  {
    id: "m5gr84i9",
    quantity: 316,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "678678",
  },
  {
    id: "3u1reuv4",
    quantity: 242,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "345345",
  },
  {
    id: "derv1ws0",
    quantity: 837,
    color: 'Đỏ',
    size: '300',
    status: "Đang xử lý",
    container: "567567",
  },
  {
    id: "5kma53ae",
    quantity: 874,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "798789",
  },
  {
    id: "bhqecj4p",
    quantity: 721,
    color: 'Đỏ',
    size: '300',
    status: "Bị từ chối",
    container: "345345",
  },
  {
    id: "m5gr84i9",
    quantity: 316,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "678678",
  },
  {
    id: "3u1reuv4",
    quantity: 242,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "345345",
  },
  {
    id: "derv1ws0",
    quantity: 837,
    color: 'Đỏ',
    size: '300',
    status: "Đang xử lý",
    container: "567567",
  },
  {
    id: "5kma53ae",
    quantity: 874,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "798789",
  },
  {
    id: "bhqecj4p",
    quantity: 721,
    color: 'Đỏ',
    size: '300',
    status: "Bị từ chối",
    container: "345345",
  },
  {
    id: "m5gr84i9",
    quantity: 316,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "678678",
  },
  {
    id: "3u1reuv4",
    quantity: 242,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "345345",
  },
  {
    id: "derv1ws0",
    quantity: 837,
    color: 'Đỏ',
    size: '300',
    status: "Đang xử lý",
    container: "567567",
  },
  {
    id: "5kma53ae",
    quantity: 874,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "798789",
  },
  {
    id: "bhqecj4p",
    quantity: 721,
    color: 'Đỏ',
    size: '300',
    status: "Bị từ chối",
    container: "345345",
  },
  {
    id: "m5gr84i9",
    quantity: 316,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "678678",
  },
  {
    id: "3u1reuv4",
    quantity: 242,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "345345",
  },
  {
    id: "derv1ws0",
    quantity: 837,
    color: 'Đỏ',
    size: '300',
    status: "Đang xử lý",
    container: "567567",
  },
  {
    id: "5kma53ae",
    quantity: 874,
    color: 'Đỏ',
    size: '300',
    status: "Thành công",
    container: "798789",
  },
  {
    id: "bhqecj4p",
    quantity: 721,
    color: 'Đỏ',
    size: '300',
    status: "Bị từ chối",
    container: "345345",
  },
]

export type Payment = {
  id: string
  quantity: number
  status: "Đang xử lý" | "Thành công" | "Bị từ chối"
  container: string
  color: string,
  size: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === 'Đang xử lý' ? 'outline' : row.getValue("status") === 'Thành công' ? "default" : "destructive"}>{row.getValue("status")}</Badge>
    ),
  },
  {
    accessorKey: "container",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Container
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("container")}</div>,
  },
  {
    accessorKey: "size",
    header: () => <div className="text-right">Size</div>,
    cell: ({ row }) => <div className="text-right lowercase">{row.getValue("size")}</div>,
  },
  {
    accessorKey: "color",
    header: () => <div className="text-right">Color</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("color")}</div>
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Quantity</div>,
    cell: ({ row }) => {


      return <div className="text-right font-medium">{row.getValue("quantity")}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function ImportList() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (

    <div className="w-full">
      <div className="flex items-center py-4">

        <Input
          placeholder="Tìm kiện hàng"
          value={(table.getColumn("container")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("container")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-full"
        />
        <Dialog>
          <DialogTrigger asChild className="ml-3">
            <Button variant="default">Tạo đơn</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tạo đơn</DialogTitle>
              <DialogDescription>
                Tạo đơn nhập hàng
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Tên
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="size" className="text-right">
                  Kích thức
                </Label>
                <Input id="size" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Số lượng
                </Label>
                <Input id="quantity" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">
                  Màu sắc
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn màu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="blue">Xanh</SelectItem>
                      <SelectItem value="red">Đỏ</SelectItem>
                      <SelectItem value="black">Đen</SelectItem>
                      <SelectItem value="yellow">Vàng</SelectItem>
                      <SelectItem value="white">Trắng</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Xác nhận</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Hiển thị cột <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Không có kết quả..
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} hàng đã chọn.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Trước
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Sau
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus, CircleX, Edit, TicketCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TicketType } from "@prisma/client";
import {
  createTicketTypeAction,
  deleteTicketTypeAction,
  updateTicketTypeAction,
} from "@/app/actions/ticket-type";

const TicketTable = ({ data }: { data: TicketType[] }) => {
  // state show dialog
  const [show, setShow] = useState(false);
  // state show delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  //state form
  const [formData, setFormData] = useState<{
    id?: number;
    name: string;
    isActive?: boolean;
    note?: string | null;
  }>({
    id: undefined,
    name: "",
    isActive: true,
    note: "",
  });
  //   create id
  function makeid(length: number) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  function resetForm() {
    setFormData({ name: "", note: "", id: undefined, isActive: true });
  }
  function handleSubmit() {
    let newData = [...data];
    //logic update
    if (formData.id) {
      let indexExistTicket = newData.findIndex((item: TicketType) => {
        return item.id === formData.id;
      });
      if (indexExistTicket !== -1) {
        updateTicketTypeAction(formData as TicketType);
      } else {
        alert("Không tìm thấy ticket");
      }
    } else {
      let newItem: Partial<TicketType> = {
        ...formData,
        isActive: formData.isActive || true,
      };
      createTicketTypeAction(newItem);
    }
    setShow(false);
    resetForm();
  }
  function handleEdit(item: TicketType) {
    setShow(true);
    setFormData(item);
  }
  function handleDelete() {
    deleteTicketTypeAction(formData as TicketType);
    // setData(newData);
    resetForm();
  }
  return (
    <>
      <div className="hidden sm:flex justify-center items-center w-full gap-2 my-2">
        <TicketCheckIcon strokeWidth={2.5} size={30} className="text-primary" />
        <h1 className="text-primary font-bold text-xl">List Ticket Type</h1>
      </div>
      <Dialog
        open={show}
        onOpenChange={(show) => {
          resetForm();
          setShow(show);
        }}
      >
        <DialogTrigger asChild>
          <Button type="button" className="my-1 sm:my-4">
            <CirclePlus className="mr-0 sm:mr-2" />
            <span className="hidden sm:inline">Create New</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {formData.id ? formData.name : "Create New Ticket Type"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                onChange={(e) => {
                  let value = e.target.value;
                  setFormData({
                    ...formData,
                    name: value,
                  });
                }}
                value={formData.name}
                id="name"
                placeholder="Type name ticket type here."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="note" className="text-right">
                Note
              </Label>
              <Textarea
                value={formData.note || undefined}
                onChange={(e) => {
                  let value = e.target.value;
                  setFormData({
                    ...formData,
                    note: value,
                  });
                }}
                className="col-span-3"
                id="note"
                placeholder="Type your note here."
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isActive" className="text-right">
                {" "}
                Active
              </Label>
              <Checkbox
                onCheckedChange={(e: boolean) => {
                  setFormData({
                    ...formData,
                    isActive: e,
                  });
                }}
                checked={formData.isActive}
                id="isActive"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">STT</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                {/* <TableCell>{item.id}</TableCell> */}
                <TableCell
                  className="font-semibold text-primary hover:cursor-pointer"
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  {item.name}
                </TableCell>
                <TableCell className="italic">{item.note}</TableCell>
                <TableCell
                  className={item.isActive ? "text-primary" : "text-red-500"}
                >
                  {item.isActive ? "Active" : "Not Active"}
                </TableCell>
                <TableCell className="flex justify-center items-center gap-2">
                  <Edit
                    onClick={() => {
                      handleEdit(item);
                    }}
                    size={14}
                    className="text-primary hover:cursor-pointer"
                  />
                  <CircleX
                    onClick={() => {
                      setShowDeleteAlert(true);
                      setFormData(item);
                    }}
                    size={14}
                    className="text-red-500 hover:cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <AlertDialog
        open={showDeleteAlert}
        onOpenChange={() => {
          setShowDeleteAlert(false);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Do you want to delete ticket{" "}
              <span className="font-semibold italic text-primary">
                {formData.name}{" "}
              </span>
              ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleDelete();
              }}
              className="text-white bg-red-500"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TicketTable;

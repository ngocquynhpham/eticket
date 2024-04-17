'use client'
import { actionCreateStatusTicket, actionDeleteStatusTicket, actionUpdateStatusTicket } from '@/app/actions/ticket-status';
import { AlertDialogHeader, AlertDialogFooter } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogHeader, DialogFooter, DialogTrigger, Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { StatusTicket } from '@prisma/client'
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@radix-ui/react-alert-dialog';
import { CirclePlus, CircleX, Edit, Orbit } from 'lucide-react';
import React, { useState } from 'react'

const TickerStatusTable = ({data}:{data:StatusTicket[]}) => {
    // show popup add.
  const [show, setShow] = useState(false);

  // state show delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  //  state form
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


  // reset form
  function resetForm() {
    setFormData({ name: "", note: "", id: undefined, isActive: true });
  }

  function handleSubmit() {
    
    if(formData.id){
      actionUpdateStatusTicket(formData as StatusTicket);
    }
    else{
      actionCreateStatusTicket(formData);
    }
    resetForm();
    setShow(false);
  }
  function handleEdit(item: StatusTicket) {
    setShow(true);
    setFormData(item);
  }
  function handleDelete (){
    actionDeleteStatusTicket(formData as StatusTicket);
    resetForm();
  }
  return (
    <>
    <div className="flex justify-center items-center w-full gap-2 my-2">
      <Orbit strokeWidth={2.5} size={30} className="text-primary" />
      <h1 className="text-primary font-bold text-xl">List Status Ticket</h1>
    </div>
    <Dialog
      open={show}
      onOpenChange={(show) => {
        resetForm();
        setShow(show);
      }}
    >
      <DialogTrigger asChild>
        <Button type="button" className="my-4">
          <CirclePlus className="mr-2" />
          Create New
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {formData.id ? formData.name : "Create New Department"}
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
              placeholder="Type name department here."
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
            Do you want to delete department{" "}
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
  )
}

export default TickerStatusTable
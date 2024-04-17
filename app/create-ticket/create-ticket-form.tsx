"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./create-ticket.scss";

import { TicketCheckIcon, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Category, Department, TicketType } from "@prisma/client";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { actionCreateTicket } from "../actions/ticket";
import { toast } from "sonner";
const formSchema = z.object({
  department: z.string(),
  ticketType: z.string(),
  category: z.string(),
  subject: z.string().max(200,{message:"Subject's length should be less than 200 characters"}).min(1, {message:"Subject can't be blank"}),
  content: z.string(),
  terms: z.boolean(),
});
type dataSource = {
  department: Department[];
  category: Category[];
  ticketType: TicketType[];
};
const CreateTicketForm = ({ dataSource }: { dataSource: dataSource }) => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    let postData = {
      subject: values.subject,
      term: values.terms,
      content: values.content,
      departmentID: parseInt(values.department),
      categoryID: parseInt(values.category),
      ticketTypeID: parseInt(values.ticketType),
      statusID: 1,
    };
    try {
      await actionCreateTicket(postData);
      router.push("/tickets");
      toast.success("Successfully !!");
    } catch (error) {
      toast.error("Unsuccessfully !!");
    }
  }
  // handleSaveAndNew
  async function handleSaveAndNew(values: z.infer<typeof formSchema>) {
    console.log(values);
    let postData = {
      subject: values.subject,
      term: values.terms,
      content: values.content,
      departmentID: parseInt(values.department),
      categoryID: parseInt(values.category),
      ticketTypeID: parseInt(values.ticketType),
      statusID: 1,
    };
    try {
      // await actionCreateTicket(postData);
      toast.success("Successfully !!");
      onReset();
    } catch (error) {
      toast.error("Unsuccessfully !!");
    }
  }
  // Define a reset form
  const onReset = () => {
    form.reset({
      department: "",
      ticketType: "",
      category: "",
      subject: undefined,
      content: undefined,
      terms: false,
    });
  };
  // Define a back handler
  const onBack = () => {
    router.push("/");
  };
  
  console.log(form.getValues())

  return (
    <div className="p-4 container-form">
      <div className="flex justify-center items-center w-full gap-2 my-10">
        <TicketCheckIcon strokeWidth={2.5} size={30} className="text-primary" />
        <h1 className="text-primary font-bold text-xl">New Ticket</h1>
      </div>{" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={field.value || ""}
                    onChange={(e) => {
                      console.log("subject", e);
                      field.onChange(e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Support Content</FormLabel>
                <FormControl>
                  <Textarea
                    id="content"
                    value={field.value || ""}
                    onChange={(e) => {
                      let value = e.target.value;
                      field.onChange(value);
                      console.log("content", e);
                    }}
                    className="col-span-3"
                    placeholder="Type your content here."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(e) => {
                        console.log("department", e);
                        field.onChange(e);
                      }}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {dataSource.department.map((item) => {
                          return (
                            <SelectItem
                              key={`department_${item.id}`}
                              value={`${item.id}`}
                            >
                              {item.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Ticket Type</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(e) => {
                        console.log("ticketType", e);
                        field.onChange(e);
                      }}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        {dataSource.ticketType.map((item) => {
                          return (
                            <SelectItem
                              key={`type_${item.id}`}
                              value={`${item.id}`}
                            >
                              {item.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(e) => {
                        console.log("category", e);
                        field.onChange(e);
                      }}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {dataSource.category.map((item) => {
                          return (
                            <SelectItem
                              key={`category_${item.id}`}
                              value={`${item.id}`}
                            >
                              {item.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(e) => {
                        field.onChange(e);
                      }}
                      id="terms"
                    />
                    <Label htmlFor="terms">I accept with the </Label>
                    <Link className="text-primary" href="/terms-conditions">
                      terms and conditions
                    </Link>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex justify-end gap-4">
            <Button
              onClick={() => {
                onBack();
              }}
              type="button"
              className="gap-2"
              variant={"ghost"}
            >
              <ArrowLeft /> <Label>Back to home</Label>
            </Button>
            <Button
              variant={"outline"}
              onClick={form.handleSubmit(handleSaveAndNew)}
              type="button"
            >
              Save & Create New
            </Button>
            <Button type="submit">Save Ticket</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateTicketForm;

import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";

export function DialogForm({
  children,
  trigger,
  title,
  footer,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  footer: React.ReactNode;
  title: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="min-w-full">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>{footer}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

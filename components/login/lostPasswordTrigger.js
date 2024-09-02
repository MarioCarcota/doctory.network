"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { motion } from "framer-motion";
import { CheckCircle, TriangleAlert } from "lucide-react";

export function DialogForgotPassword({ mail }) {
  const [email, setEmail] = useState(mail);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setError(""); // Clear the error when user starts typing
  };

  const handleClose = () => {
    setEmail("");
    setError("");
    setIsLoading(false);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (email !== "info@doctory.com") {
      setError("Invalid email address. Please use info@doctory.com.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 2000); // Simulate the API call
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer justify-end text-muted-foreground hover:underline text-sm">
          Forgot your password?
        </p>
      </DialogTrigger>
      <DialogContent
        onCloseAutoFocus={handleClose}
        className="sm:max-w-lg w-[90%]"
      >
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DialogHeader>
              <DialogTitle>Recover your password</DialogTitle>
              <DialogDescription>
                You don't remember your password? No worries, insert your email
                below and we will send you a new one!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-1">
                <Label htmlFor="email" className="text-right mr-3">
                  Your Email
                </Label>
                <Input
                  id="email"
                  placeholder="info@email.com"
                  onChange={handleChangeEmail}
                  value={email}
                  className={`col-span-3 ${error ? "border-red-500" : ""}`}
                  required
                  autoComplete="email"
                />
                {error && (
                  <div className="ml-auto flex col-span-4 items-center gap-2">
                    <TriangleAlert size={30} className="text-red-500" />
                    <p className=" text-red-500 leading-snug text-sm">
                      {error}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className={isLoading ? "cursor-not-allowed" : ""}
              >
                {isLoading
                  ? "Searching for your profile..."
                  : "Recover password💡"}
              </Button>
            </DialogFooter>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DialogHeader>
              <DialogTitle>Email sent successfully!</DialogTitle>
              <DialogDescription className="flex items-center">
                <CheckCircle size={60} className="mr-2 text-green-500" />
                We've sent you an email with instructions to reset your
                password. Please check your inbox.
              </DialogDescription>
            </DialogHeader>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}

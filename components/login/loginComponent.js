"use client";
import Image from "next/image";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import React, { useState } from "react";
import { FadeAn } from "../transitions/FadeTransition";
import { DialogForgotPassword } from "./lostPasswordTrigger";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isButtonDisabled = !email || !password || isLoading;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleChangePsw = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const LoginUser = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Reset previous errors
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    let valid = true;

    if (email !== "info@doctory.com") {
      setEmailError("Invalid email address. Please use info@doctory.com.");
      valid = false;
    }

    if (password !== "PSWDoctory2024!") {
      setPasswordError(
        "The password you entered is wrong. Try: PSWDoctory2024!"
      );
      valid = false;
    }

    if (!valid) {
      setIsLoading(false);
      return;
    }

    // Simulate the API call
    setTimeout(() => {
      router.replace("/dashboard");
    }, 2000);
  };

  return (
    <FadeAn>
      <div className="w-full md:grid md:min-h-[600px] md:grid-cols-2 xl:min-h-[90vh] my-0 md:my-10">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-full md:w-4/5 gap-6">
            <div className="grid gap-2 text-center mb-4 md:mb-6">
              <h1 className="md:text-5xl text-4xl leading-[0.80] text-balance font-semibold">
                Welcome to the{" "}
                <strong className="text-primary font-bold">
                  doctory network!
                </strong>
              </h1>
              <p className="md:mt-3 mt-1 text-balance text-muted-foreground">
                Login now to enter your new HR experience in the health world
              </p>
            </div>
            <form onSubmit={LoginUser} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Insert your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="info@email.com"
                  onChange={handleChangeEmail}
                  value={email}
                  required
                  autoComplete="email"
                  className={emailError ? "border-red-500" : ""}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-end justify-between">
                  <Label htmlFor="password">Password</Label>
                  <DialogForgotPassword mail={email} />
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={isPasswordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Your password..."
                    onChange={handleChangePsw}
                    value={password}
                    className={passwordError ? "border-red-500" : ""}
                  />
                  <div
                    className="cursor-pointer absolute inset-y-0 top-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              <Button
                disabled={isButtonDisabled}
                type="submit"
                className="w-full dark:text-white"
              >
                {isLoading
                  ? "Searching for your profile..."
                  : "Enter the platform now!🚀"}
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-muted rounded-lg block">
          <Image
            src="/images/loginImage.jpg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full rounded-lg w-full object-cover dark:brightness-[0.6]"
          />
        </div>
      </div>
    </FadeAn>
  );
}

export default LoginPage;

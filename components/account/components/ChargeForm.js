"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { CreditCard, Lock, Coins } from "lucide-react";
import { toast } from "sonner";

const PackageCard = ({ tokens, freeTokens, price, isSelected, onClick }) => (
  <Card
    className={`cursor-pointer transition-all hover:bg-accent/10 ${
      isSelected
        ? "ring-2 ring-accent shadow-lg bg-accent/10"
        : "hover:shadow-md"
    }`}
    onClick={onClick}
  >
    <CardHeader>
      <CardTitle className="flex items-center">
        <Coins className="mr-2 h-5 w-5 text-yellow-500" />
        {tokens} Tokens
      </CardTitle>
      {freeTokens && (
        <CardDescription className="font-semibold text-accent text-lg">
          + {freeTokens} Free Tokens
        </CardDescription>
      )}
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">€{price}</p>
    </CardContent>
  </Card>
);

const PaymentFormTokens = () => {
  const [selectedPackage, setSelectedPackage] = useState(null); // Changed to null initially
  const [paymentMethod, setPaymentMethod] = useState("card");

  const packages = {
    100: { tokens: 100, price: 20 },
    1000: { tokens: 1000, freeTokens: 250, price: 180 },
    5000: { tokens: 5000, freeTokens: 1000, price: 500 },
  };

  const selectedPrice = selectedPackage ? packages[selectedPackage].price : 0;

  function onSubmit() {
    const { freeTokens = 0 } = packages[selectedPackage];

    toast.success(
      "We filled up your profile with " +
        selectedPackage +
        " Tokens + " +
        freeTokens +
        " free tokens!"
    );
  }

  return (
    <div className="min-h-screen w-full">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Token Purchase</h2>
        <p>Select a package </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(packages).map(([key, pack]) => (
          <PackageCard
            key={key}
            tokens={pack.tokens}
            freeTokens={pack.freeTokens}
            price={pack.price}
            isSelected={selectedPackage === key}
            onClick={() => setSelectedPackage(key)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <Tabs
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
                <TabsTrigger value="klarna">Klarna</TabsTrigger>
              </TabsList>
              <TabsContent value="card">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="pl-10"
                      />
                      <CreditCard
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expDate">Expiration Date</Label>
                      <Input id="expDate" placeholder="MM / YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedPackage && (
        <Button onClick={onSubmit} className="w-full mt-5">
          <Lock className="mr-2 h-4 w-4" />
          {selectedPackage &&
            paymentMethod === "card" &&
            `Pay €${selectedPrice}`}
          {selectedPackage &&
            paymentMethod === "paypal" &&
            `Pay €${selectedPrice} with PayPal`}
          {selectedPackage &&
            paymentMethod === "klarna" &&
            `Pay €${selectedPrice} with Klarna`}
        </Button>
      )}
    </div>
  );
};

export default PaymentFormTokens;

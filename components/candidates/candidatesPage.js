"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Separator } from "../ui/Separator";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseMedical,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { dataDoctory } from "@/public/data/dataFile";
import { toast } from "sonner";

function CandidatesPage() {
  //FAKE CHANGING PAGE (TOO MUCH OF A HASSLE)
  function resend() {
    toast.warning("Not finished!");
  }
  //FAKE RETRIEVING OF THE DATA
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      title: "Hired",
      quantity: 0,
      profiles: [],
      bg: "bg-green-900",
    },
    {
      id: 2,
      title: "Offers Sent",
      quantity: 103,
      profiles: dataDoctory.slice(0, 6),
      bg: "bg-yellow-800",
    },
    {
      id: 3,
      title: "Starred Professionals",
      quantity: 63,
      profiles: dataDoctory.slice(20, 24),
      bg: "bg-amber-600",
    },
    {
      id: 4,
      title: "Declined",
      quantity: 230,
      profiles: [],
      profiles: dataDoctory.slice(60, 66),
    },
  ]);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2 mt-4 mb-32">
        {cardsData.map((card) => (
          <Card key={card.id}>
            <CardHeader
              className={`${card.bg} flex flex-row items-center justify-between text-white`}
            >
              <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
              <p>{card.quantity}</p>
            </CardHeader>
            <Separator />
            <CardContent className="grid gap-4 md:gap-8 mt-6 pb-2">
              {card.profiles.length === 0 ? (
                <p className="text-muted-foreground pb-4">
                  No profiles available.
                </p>
              ) : (
                <>
                  {card.profiles.slice(0, 4).map((user, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="grid">
                        <p className="text-sm mb-1 font-medium leading-none">
                          {user.full_name}
                        </p>
                        <p className="flex gap-1 items-center  text-sm text-muted-foreground">
                          <BriefcaseMedical className="h-4 w-4" />
                          <span className="line-clamp-1 text-ellipsis">
                            {user.nucc_classification}
                          </span>
                        </p>
                        <p className="flex gap-1 items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {user.individual_place}
                        </p>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="ml-auto gap-1"
                      >
                        <Link href={`/professionals/${user.npi}`}>
                          Discover Profile
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}

                  {card.profiles.length > 4 && (
                    <div>
                      <Separator />
                      <Button
                        variant="ghost"
                        className="w-full text-primary mt-2 gap-1"
                        onClick={resend}
                      >
                        Show More <ArrowRight size={20} />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CandidatesPage;

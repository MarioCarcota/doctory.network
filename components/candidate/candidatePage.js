"use client";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Button, buttonVariants } from "../ui/Button";
import { Textarea } from "../ui/TextArea";
import { MobileMenu } from "../layout/mobileMenu";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import {
  MapPin,
  Calendar,
  User,
  Briefcase,
  Globe,
  GraduationCap,
  Building,
} from "lucide-react";
import { statuses } from "../professionals/tables/dataScheme";

function CandidatePage({ user }) {
  const offer = () => {
    toast.success("Offer sent to " + user.full_name, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const draft = () => {
    toast.info("Draft Saved", {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full mt-8">
        <Link
          href={`/professionals/`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-fit h-fit flex justify-between items-center gap-1 text-lg cursor-pointer"
          )}
        >
          <ArrowLeft fontSize={20} /> Go back
        </Link>
        <div className="flex flex-row flex-nowrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 text-xl font-medium">
                Send an offer <ArrowUpRight size={30} />{" "}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>Send an offer to the candidate</DialogTitle>
                <DialogDescription>
                  State what you want to propose such as pay, location, and more
                  relavant information
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Textarea placeholder="Type your message here..." />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button onClick={draft} variant="ghost">
                    Save draft
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button onClick={offer} type="submit">
                    Send offer!
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="md:hidden block">
            <MobileMenu />
          </div>
        </div>
      </div>
      <ProfileData profile={user} />
    </div>
  );
}

export default CandidatePage;

const ProfileData = ({ profile }) => {
  const renderField = (label, value) => {
    if (value === null || value === undefined) return null;
    return (
      <p>
        <strong>{label}:</strong> {value}
      </p>
    );
  };

  const renderStatus = (status) => {
    const statusConfig = statuses.find((s) => s.value === status);
    if (!statusConfig) return null;

    const Icon = statusConfig.icon;
    return (
      <Badge
        className={`${statusConfig.bg} text-white flex items-center gap-1`}
      >
        <Icon className="w-3 h-3" />
        {statusConfig.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen my-4">
      <div className="mx-auto space-y-6">
        <Card className="w-full">
          <CardHeader className="bg-primary/10 border-b">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">
                  {profile.full_name}
                </CardTitle>
                {renderStatus(profile.status)}
              </div>
              {renderField("Other Name", profile.full_name_other)}
              {renderField("Classification", profile.nucc_classification)}
              {renderField("Specialization", profile.nucc_specialization)}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-blue-600" />
                <span className="text-sm">NPI: {profile.npi}</span>
              </div>
              {profile.npi_replacement && (
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">
                    NPI Replacement: {profile.npi_replacement}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Tenure: {profile.tenure} years</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-sm">
                  Since: {profile.enumeration_date}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Code: {profile.taxon_code}</span>
              </div>
              {profile.graduation_year && (
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">
                    Graduated: {profile.graduation_year}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {renderField("NUCC Group", profile.nucc_group)}
              {renderField("NUCC Classification", profile.nucc_classification)}
              {renderField("NUCC Specialization", profile.nucc_specialization)}
              {renderField(
                "Sole Proprietor",
                profile.sole_proprietor ? "Yes" : "No"
              )}
              {renderField("Telehealth", profile.telehealth ? "Yes" : "No")}
              {renderField("Medicare Specialty", profile.medicare_specialty)}
              {renderField("Medicare ID", profile.medicare_id)}
              {renderField("Medical School", profile.medical_school)}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {renderField("Gender", profile.gender)}
              {renderField("County Code", profile.county_code)}
              {renderField("Geo ID", profile.geo_id)}
              {renderField("DNI", profile.dni)}
              {renderField("Last Update", profile.last_update_date)}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Location Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Individual Address</h3>
                  {renderField("Place", profile.individual_place)}
                  {renderField("County", profile.individual_county)}
                  {renderField("State", profile.individual_state)}
                  {renderField("ZIP", profile.individual_zip5)}

                  {(profile.facility_name ||
                    profile.facility_place ||
                    profile.facility_zip5 ||
                    profile.facility_state) && (
                    <>
                      <Separator className="my-2" />
                      <h3 className="font-semibold">Facility Address</h3>
                      {renderField("Facility Name", profile.facility_name)}
                      {renderField("Place", profile.facility_place)}
                      {renderField("State", profile.facility_state)}
                      {renderField("ZIP", profile.facility_zip5)}
                    </>
                  )}
                </div>
                {/* IN NEED OF API KEY TO SHOW MAP
                 <div className="aspect-square w-full sm:aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${profile.lat},${profile.long}`}
                  ></iframe>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

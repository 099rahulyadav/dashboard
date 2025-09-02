import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header2 from "./Header2";
import {
  House,
  CaretRight,
  Buildings,
  Globe,
  MapPin,
  Envelope,
  Phone,
  Calendar,
  ShieldCheckered,
  Sparkle,
} from "phosphor-react";
import image from "../assets/image.png";

export default function EditOrganizationDetails() {
  const [formData, setFormData] = useState({
    organizationName: "",
    website: "",
    address: "",
    email: "",
    phone: "",
  });

  return (
    <div className="min-h-screen bg-[#F5F3F2] overflow-x-hidden">
      {/* Header */}
      <Header2 />

      {/* Main Content */}
      <main className="p-2 ">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-3 flex flex-row gap-1 items-center">
            <House size={18} className="text-gray-700" />
            <CaretRight size={16} className="text-gray-700" /> Profile
            <CaretRight size={16} className="text-gray-700" /> Organization Detail
          </div>

          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#ED8A09]">
              Edit Organization Details
            </h1>
            <p className="text-gray-600">
              Update your organization details and information. Changes will be
              saved immediately.
            </p>
          </div>

          <Card className="rounded-3xl shadow-sm bg-white border-none">
            <CardContent className="p-8">
              {/* Organization Header */}
              <div className="flex items-center gap-6 mb-8 justify-between">
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="w-18 h-18 bg-[#EBEBEB] rounded-full flex items-center justify-center">
                    <img src={image} alt="buildings-icon" className="h-12 w-12" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      Jai Laxmi Narayan Seva Trust
                    </h2>
                    <Badge className="bg-[#ED8A09] text-white rounded-2xl px-3 py-2 mt-2  items-center gap-1">
                      <ShieldCheckered className="w-5 h-5" />
                      Administrator access
                    </Badge>
                  </div>
                </div>

                {/* Info Box */}
                <div className="flex flex-row rounded-2xl bg-[#FEC89A33] text-sm text-gray-700">
                  <div className="px-6 py-3 border-r border-gray-200">
                    <span className="font-medium text-[#ED8A09] block">
                      Organization ID
                    </span>
                    <span>3</span>
                  </div>
                  <div className="px-6 py-3 border-r border-gray-200">
                    <span className="font-medium text-[#ED8A09] block">
                      Your Role
                    </span>
                    <span>Administrator</span>
                  </div>
                  <div className="px-6 py-3 flex-row items-center gap-1">
                    <span className="font-medium text-[#ED8A09]">Created</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} /> August 24, 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Organization Name and Website Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Organization Name */}
                  <div className="space-y-1">
                    <Label
                      htmlFor="orgName"
                      className="font-semibold text-lg flex items-center"
                    >
                      Organization Name *
                    </Label>
                    <div className="relative">
                      <Buildings className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="orgName"
                        value={formData.organizationName}
                        placeholder="Jai Laxmi Narayan Seva Trust"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organizationName: e.target.value,
                          })
                        }
                        className="pl-10 rounded-xl border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                  </div>

                  {/* Company Website */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="website" className="font-semibold text-lg">
                        Company Website
                      </Label>
                      <Badge className="bg-[#ED8A09] text-white text-xs rounded-2xl flex items-center gap-1">
                        <Sparkle className="h-3 w-3 text-white" /> AI Enhanced
                      </Badge>
                    </div>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="website"
                        value={formData.website}
                        placeholder="https://your-company.com"
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="pl-10 rounded-xl border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="font-semibold">
                    Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <textarea
                      id="address"
                      value={formData.address}
                      placeholder="B26, Laxmi Deep Building, District Center, Laxmi Nagar, Delhi"
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:border-orange-300  focus:ring-orange-300"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Contact Information</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Envelope className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="pl-10 rounded-xl border-gray-300 focus:border-orange-300  focus:ring-orange-300"
                          placeholder="johndoe46@gmail.com"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">or</span>
                    <div className="flex-1">
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="pl-10 rounded-xl border-gray-300 focus:border-orange-300  focus:ring-orange-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 pt-4 justify-between">
                  <Button variant="outline" className="px-6 py-2 text-sm mx-2">
                    Cancel
                  </Button>
                  <Button className="px-6 py-2 mx-2 text-sm bg-black text-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

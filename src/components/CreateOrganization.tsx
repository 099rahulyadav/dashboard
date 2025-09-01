import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Mail, Phone, MapPin, Globe } from 'lucide-react';

const MegapolisLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
      <Building2 className="w-5 h-5 text-white" />
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-lg text-gray-900">Megapolis</span>
      <span className="text-sm text-gray-500">Advisory</span>
    </div>
  </div>
);

const UserAvatar = () => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
      <span className="text-white text-sm font-medium">JD</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-medium">John Doe</span>
      <span className="text-xs text-gray-500">john35@gmail.com</span>
    </div>
  </div>
);

const ProgressIndicator = ({ currentStep }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="flex items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
        1
      </div>
      <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-orange-500' : 'text-gray-500'}`}>Organization Setup</span>
    </div>
    <div className="w-12 h-px bg-gray-200"></div>
    <div className="flex items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
        2
      </div>
      <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-orange-500' : 'text-gray-500'}`}>Platform Access</span>
    </div>
  </div>
);

export default function CreateOrganization() {
  const [formData, setFormData] = useState({
    website: 'https://your-company.com',
    organizationName: '',
    address: '',
    email: 'johndoe46@gmail.com',
    phone: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <MegapolisLogo />
        <UserAvatar />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-orange-500">Create Your Organization</CardTitle>
            <CardDescription className="text-base">
              Set up your organization to get started with the platform. You need an organization to access all features and collaborate with your team.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <ProgressIndicator currentStep={1} />

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Organization Details</h3>
                <p className="text-sm text-gray-600 mb-6">Provide information about your organization. Our AI will help auto-complete field where possible.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website">Company Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      className="pl-10"
                    />
                    <Badge variant="secondary" className="absolute right-2 top-2 bg-orange-100 text-orange-700">AI Enhanced</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name *</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="organizationName"
                      placeholder="Enter Company Name"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="address"
                    placeholder="Enter Company Name"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm text-gray-500">or</span>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1">
                  Back to Sign-In
                </Button>
                <Button className="flex-1 bg-black hover:bg-gray-800">
                  Create Organization
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
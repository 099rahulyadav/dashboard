import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
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

export default function EditOrganizationDetails() {
  const [formData, setFormData] = useState({
    organizationName: 'Jai Laxmi Narayan Seva Trust',
    website: 'https://your-company.com',
    address: 'B26, Laxmi Deep Building, District Center, Laxmi Nagar, Delhi',
    email: 'johndoe46@gmail.com',
    phone: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <MegapolisLogo />
        <UserAvatar />
      </header>

      {/* Breadcrumb */}
      <div className="px-6 py-3 text-sm text-gray-500">
        Profile › Organization Detail
      </div>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-orange-500">Edit Organization Details</h1>
            <p className="text-gray-600">Update your organization details and information. Changes will be saved immediately.</p>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Jai Laxmi Narayan Seva Trust</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge className="bg-orange-500 hover:bg-orange-600">Administrator access</Badge>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Organization ID:</span> 3
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Your Role:</span> Administrator
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Created:</span> August 24, 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name *</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="orgName"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

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
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="mt-6">
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

              <div className="flex gap-4 mt-8">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1 bg-black hover:bg-gray-800">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
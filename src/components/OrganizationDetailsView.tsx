import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Phone, MapPin, Globe, Calendar, Edit, MoreVertical, Users, FileText, Settings } from 'lucide-react';

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

export default function OrganizationDetailsView() {
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
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Jai Laxmi Narayan Seva Trust</h2>
                    <Badge className="bg-green-100 text-green-700 mt-2">Active Organization</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-orange-500 hover:bg-orange-600">Administrator</Badge>
                <span className="text-sm text-gray-500">Created on</span>
                <span className="text-sm font-medium">August 24, 2025</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Company Website</h3>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Globe className="w-4 h-4" />
                      <span>https://your-company.com</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Organization Address</h3>
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 mt-1" />
                      <span>B26, Laxmi Deep Building, District Center, Laxmi Nagar, Delhi</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+91 98170/384</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Last Updated</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>August 24, 2025</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Users className="w-4 h-4 mr-2" />
                      View Accounts
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Setting
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
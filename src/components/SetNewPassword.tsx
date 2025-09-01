import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Building2 } from 'lucide-react';

export default function SetNewPassword() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false
  });

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-orange-500 mb-2">Set New Password</h1>
          <p className="text-gray-600 mb-8">
            Enter your e-mail address and we will send you a link to reset your password
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password *</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPassword.new ? "text" : "password"}
                  placeholder="Password"
                  value={passwords.newPassword}
                  onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword({...showPassword, new: !showPassword.new})}
                >
                  {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-gray-500">Password must be 6 character long.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="Password"
                  value={passwords.confirmPassword}
                  onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword({...showPassword, confirm: !showPassword.confirm})}
                >
                  {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button className="w-full bg-black hover:bg-gray-800">
              Update Password
            </Button>

            <Button variant="outline" className="w-full">
              Back to sign-in
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex-1 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center p-8">
        <div className="relative">
          {/* Illustration representing password security */}
          <div className="w-80 h-80 relative">
            {/* Phone/Device Frame */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border-4 border-gray-200 flex flex-col">
              {/* Screen */}
              <div className="flex-1 m-4 bg-orange-100 rounded-xl flex flex-col items-center justify-center p-4">
                {/* Password dots */}
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-black rounded-full" />
                  ))}
                </div>
                {/* Keypad */}
                <div className="grid grid-cols-4 gap-2 w-32">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-orange-200 rounded" />
                  ))}
                </div>
              </div>
              {/* Home button */}
              <div className="w-8 h-8 bg-black rounded mx-auto mb-2" />
            </div>
          </div>

          {/* Security Icons */}
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-orange-500 rounded" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 -left-8 w-6 h-6 border-2 border-gray-300 rounded-full" />
          <div className="absolute top-16 -left-12 w-3 h-3 bg-gray-300 rounded-full" />
          <div className="absolute -top-4 left-1/2 w-4 h-4 border border-gray-300" style={{transform: 'rotate(45deg)'}} />
        </div>

        {/* Character illustration */}
        <div className="absolute bottom-1/4 right-1/3">
          <div className="w-24 h-32 relative">
            {/* Person silhouette */}
            <div className="w-full h-full bg-black rounded-full opacity-80" style={{clipPath: 'ellipse(40% 30% at 50% 25%)'}} />
            <div className="absolute bottom-0 w-full h-16 bg-black rounded-b-full opacity-80" />
            {/* Arm pointing */}
            <div className="absolute top-1/3 right-0 w-8 h-2 bg-black transform rotate-12 origin-left" />
          </div>
        </div>
      </div>
    </div>
  );
}
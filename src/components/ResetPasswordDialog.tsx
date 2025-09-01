import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EnvelopeSimple } from "phosphor-react";

export function ResetPasswordDialog() {
  return (
    <Dialog>
      {/* Trigger: "Forgot Password?" link */}
      <DialogTrigger asChild>
        <button className="text-[#ED8A09] hover:underline text-sm font-semibold">
          Forgot Password?
        </button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="sm:max-w-md bg-white !rounded-3xl items-center justify-center p-8">
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#ED8A09] text-center">
            Reset your password
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Enter your e-mail address and we will send you a link to reset your password
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Email Input */}
          <div className="space-y-5">
            <Label htmlFor="reset-email">Email *</Label>
            <div className="relative">
              <EnvelopeSimple
                size={20}
                weight="regular"
                className="absolute left-2 top-2 text-gray-800"
              />
              <Input
                id="reset-email"
                type="email"
                placeholder="johndoe46@gmail.com"
                className="pl-10 mt-2 border-[#ED8A09] rounded-xl focus:border-[#ED8A09] focus:ring-0"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3">
            <Button className="w-full bg-[#0F0901] text-white rounded-lg">
              Send reset link
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-lg"
            >
              Back to sign-in
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

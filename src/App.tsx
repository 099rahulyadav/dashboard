// import React from 'react';
import CreateOrganization from "./components/CreateOrganization";
import Dashboard from "./components/Dashboard";
import EditOrganizationDetails from "./components/EditOrganizationDetails";
import OrganizationDetailsView from "./components/OrganizationDetailsView";
import { ResetPasswordDialog } from "./components/ResetPasswordDialog";
import SetNewPassword from "./components/SetNewPassword";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <div>
      {/* <Dashboard />
      <CreateOrganization/>
      <EditOrganizationDetails/>
      <OrganizationDetailsView/> */}
      <SetNewPassword/>
      {/* <SignInPage/> */}
      {/* <ResetPasswordDialog/> */}
    </div>
  )
}

export default App;
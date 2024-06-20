import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuthenticationLogList } from "./authenticationLog/AuthenticationLogList";
import { AuthenticationLogCreate } from "./authenticationLog/AuthenticationLogCreate";
import { AuthenticationLogEdit } from "./authenticationLog/AuthenticationLogEdit";
import { AuthenticationLogShow } from "./authenticationLog/AuthenticationLogShow";
import { CitizenList } from "./citizen/CitizenList";
import { CitizenCreate } from "./citizen/CitizenCreate";
import { CitizenEdit } from "./citizen/CitizenEdit";
import { CitizenShow } from "./citizen/CitizenShow";
import { BiometricDataList } from "./biometricData/BiometricDataList";
import { BiometricDataCreate } from "./biometricData/BiometricDataCreate";
import { BiometricDataEdit } from "./biometricData/BiometricDataEdit";
import { BiometricDataShow } from "./biometricData/BiometricDataShow";
import { CredentialList } from "./credential/CredentialList";
import { CredentialCreate } from "./credential/CredentialCreate";
import { CredentialEdit } from "./credential/CredentialEdit";
import { CredentialShow } from "./credential/CredentialShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DigitalIdentityService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AuthenticationLog"
          list={AuthenticationLogList}
          edit={AuthenticationLogEdit}
          create={AuthenticationLogCreate}
          show={AuthenticationLogShow}
        />
        <Resource
          name="Citizen"
          list={CitizenList}
          edit={CitizenEdit}
          create={CitizenCreate}
          show={CitizenShow}
        />
        <Resource
          name="BiometricData"
          list={BiometricDataList}
          edit={BiometricDataEdit}
          create={BiometricDataCreate}
          show={BiometricDataShow}
        />
        <Resource
          name="Credential"
          list={CredentialList}
          edit={CredentialEdit}
          create={CredentialCreate}
          show={CredentialShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

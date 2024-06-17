import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BiodataList } from "./biodata/BiodataList";
import { BiodataCreate } from "./biodata/BiodataCreate";
import { BiodataEdit } from "./biodata/BiodataEdit";
import { BiodataShow } from "./biodata/BiodataShow";
import { ClinicalRecordList } from "./clinicalRecord/ClinicalRecordList";
import { ClinicalRecordCreate } from "./clinicalRecord/ClinicalRecordCreate";
import { ClinicalRecordEdit } from "./clinicalRecord/ClinicalRecordEdit";
import { ClinicalRecordShow } from "./clinicalRecord/ClinicalRecordShow";
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
        title={"ToothFixersService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Biodata"
          list={BiodataList}
          edit={BiodataEdit}
          create={BiodataCreate}
          show={BiodataShow}
        />
        <Resource
          name="ClinicalRecord"
          list={ClinicalRecordList}
          edit={ClinicalRecordEdit}
          create={ClinicalRecordCreate}
          show={ClinicalRecordShow}
        />
      </Admin>
    </div>
  );
};

export default App;

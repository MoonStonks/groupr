import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import theme from './theme';
import Home from "./pages/index";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Verification from "./pages/verification";
import Groups from "./pages/groups";
import GroupFormation from "./pages/group-formation";
//  import { CalendarPage } from "./pages/CalendarPage";
//  import { GroupSettings } from "./components/GroupSettings";

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/verify" component={Verification} />
          <Route exact path="/group-formation" component={GroupFormation} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/:groupId" component={Groups} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

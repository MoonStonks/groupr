import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import theme from './theme';
import { Home } from "./pages/index";
import { Dashboard } from "./pages/dashboard";
//  import { CalendarPage } from "./pages/CalendarPage";
//  import { GroupSettings } from "./components/GroupSettings";

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" />
          <Route path="/profile" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/:groupId" />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

// function App() {
//   return (
//     <ChakraProvider>
//       <Switch>
//         <Route exact path='/'>

//         </Route >
//         <Route exact path='/home'>
//         </Route >
//         <Route exact path='/profile'>
//         </Route >
//         <Route exact path='/'>
//         </Route >
//       Hello World
//       </Switch>
//     </ChakraProvider>
//   );
// }

// export default App;

import MuiMode from "./components/MuiMode/MuiMode";
import Users from "./components/Users/Users";
import { AppProviders } from "./providers/AppProviders";

export default function App() {
  /* return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  ); */

  return <Users />;
}

import { Box } from "@mui/system";
import "./App.css";
import {
  About,
  Education,
  Footer,
  Header,
  Papers,
  Qualifications,
  ScrollButton,
  Works,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <Box component="div" sx={{ px: "10%" }}>
        <section id="About">
          <About />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Works">
          <Works />
        </section>
        <section id="Papers">
          <Papers />
        </section>
        <section id="Qualifications">
          <Qualifications />
        </section>
        <ScrollButton />
      </Box>
      <Footer />
    </div>
  );
}

export default App;

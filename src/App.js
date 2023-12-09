import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Form from "./Form";
import { Grid } from '@mui/material';
import ArtilleryThumbnail from "./images/arms_land_artillery_howitzer_1.webp";
import TankThumbnail from "./images/Bundesarchiv_Bild_146-1985-100-33,_Rüstungsproduktion,_Sturmgeschütz_III.jpg";
import AirplanThumbnail from "./images/55d01608977f931935e043cecbcdef6b.jpg";

export default function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto,sans-serif' }}>
      <Container maxWidth="sm">
        <h2>
          HOI4 - Production Calculator
        </h2>

        <Grid container spacing={2} style={{ marginBottom: 25 }}>
          <Grid item xs>
            <img
              style={{ width: '100%', height: 120, objectFit: 'cover' }}
              src={ArtilleryThumbnail}
            />
          </Grid>
          <Grid item xs>
            <img
              style={{ width: '100%', height: 120, objectFit: 'cover' }}
              src={TankThumbnail}
            />
          </Grid>
          <Grid item xs>
            <img
              style={{ width: '100%', height: 120, objectFit: 'cover' }}
              src={AirplanThumbnail}
            />
          </Grid>
        </Grid>

        <Form />

        <Divider style={{ marginTop: 15 }} />

        <Box style={{ marginTop: 30 }}>
          <h4>Objective</h4>
          <p>I just need to know how long it takes to produce 8,000 fighters and 2,000 medium tanks before invading to neighbor.</p>
          <p>Investing real resources and time to see how long it takes does not seem effective and not accurate. the estimated days tend to decrease gradually because production efficiency growth changes each day.</p>
          <p>The app shows estimated days to produce, accurate 99% (+-3d). If you play x1 - x3 game speed, I hope this could help. Enjoy!!!</p>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Considerations</h4>
          <ul>
            <li>
              <p>Production output modifiers may be changed such as lower stability or lack of resources and its impact on production output per day.</p>  
            </li>
            <li>
              <p>Spamming military factories for a single production line does not help to grow production efficiency faster but more production output.</p>
            </li>
            <li>
              <p>Splitting 5 of 10 military factories for two production lines not faster than 10 of a single line</p>
            </li>
            <li>
              <p>Increasing the production efficiency cap helps to produce units more than production output modifiers.</p>
            </li>
          </ul>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Issues & Bugs Report</h4>
          <a href="https://github.com/apichaikub/hoi4-production-calculator/issues">https://github.com/apichaikub/hoi4-production-calculator/issues</a>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Contribute</h4>
          <a href="https://github.com/apichaikub/hoi4-production-calculator">https://github.com/apichaikub/hoi4-production-calculator</a>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Other Apps</h4>
          <ul>
            <li>
              <p>
                <a href="https://apichaikub.github.io/hoi4-production-calculator">https://apichaikub.github.io/hoi4-production-calculator</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://kailniris.github.io/hoi4-combat-width-calculator/">https://kailniris.github.io/hoi4-combat-width-calculator/</a>
              </p>
            </li>
          </ul>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Reference</h4>
          <ul>
            <li>
              <p>
                <a href="https://hoi4.paradoxwikis.com/Production">https://hoi4.paradoxwikis.com/Production</a>
              </p>
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
}

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
          <p>Estimate days to producing units</p>
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
            <li>
              <p>accurate 99% (+-3 days)</p>
            </li>
          </ul>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Bugs Report</h4>
          <a href="https://github.com/apichaikub/hoi4-production-calculator/issues">https://github.com/apichaikub/hoi4-production-calculator/issues</a>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Contribute</h4>
          <a href="https://github.com/apichaikub/hoi4-production-calculator">https://github.com/apichaikub/hoi4-production-calculator</a>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Other Tools</h4>
          <ul>
            <li>
              <p>
                <a href="https://apichaikub.github.io/hoi4-production-calculator">https://apichaikub.github.io/hoi4-production-calculator</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://kailniris.github.io/hoi4-combat-width-calculator">https://kailniris.github.io/hoi4-combat-width-calculator</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://docs.google.com/spreadsheets/d/1sZWOvSWzKzUKrEhjQoefmmdXzD1e5UiHHpCyCfTc-1g/edit#gid=1790104042">Military factories allocation - Google Sheet</a>
              </p>
            </li>
          </ul>
        </Box>

        <Box style={{ marginTop: 30 }}>
          <h4>Reference</h4>
          <ul>
            <li>
              <p>
                <a href="https://hoi4.paradoxwikis.com/Production">https://hoi4.paradoxwikis.com/Production</a>
              </p>
            </li>
          </ul>
        </Box>

        <Box style={{ marginTop: 30, marginBottom: 30, }}>
          <h4>Credit</h4>
          <ul>
            <li>
              <p>
                <a href="https://www.junobeach.org/canada-in-wwii/articles/artillery/25-pounder-field-gunhowitzer">
                  https://www.junobeach.org/canada-in-wwii/articles/artillery/25-pounder-field-gunhowitzer
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://prospect.org/health/manufacturing-s-future-used-up">
                  https://prospect.org/health/manufacturing-s-future-used-up
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://en.wikipedia.org/wiki/German_armored_fighting_vehicle_production_during_World_War_II">
                  https://en.wikipedia.org/wiki/German_armored_fighting_vehicle_production_during_World_War_II
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://hoi4.paradoxwikis.com/Category:Icons">
                  https://hoi4.paradoxwikis.com/Category:Icons
                </a>
              </p>
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
}

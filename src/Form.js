import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { Controller } from "react-hook-form";
import ReactECharts from "echarts-for-react";
import numeral from "numeral";
import { useEffect } from "react";
import useForm from "./useForm";
import Military_factories from "./icons/Military_factories.png"
import Production_Cost from "./icons/Production_Cost.png"
import Production_efficiency_cap from "./icons/Production_efficiency_cap.png"
import Production_efficiency from "./icons/Production_efficiency.png"
import Logistic_stored from "./icons/Logistic_stored.png"

export default function Form() {
  const {
    handleSubmit,
    onSubmit,
    handleReset,
    handleSetDefaults,
    getValues,
    trigger,
    watch,
    control,
    formState: { errors },
    results,
    charts,
  } = useForm();

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if(name === "requiredUnit") {
        if(getValues('currentProducedUnit') && getValues('currentProducedUnit') != 0) trigger("currentProducedUnit")
        if(errors?.requiredUnit?.type === "invalidUnit") trigger("requiredUnit")
      }
      if(name === "currentProducedUnit") {
        if(getValues('requiredUnit')) trigger("requiredUnit")
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, errors])

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleReset}
        style={{ paddingBottom: 15 }}
      >
        <Box component="fieldset">
          <legend>Production</legend>
          <Controller
            name="requiredUnit"
            control={control}
            rules={{
              required: true,
              validate: {
                invalidUnit: (requiredUnit) => {
                  if(!getValues("currentProducedUnit")) return true
                  return Number(requiredUnit) > Number(getValues("currentProducedUnit"))
                },
              },
            }}
            render={({ field }) => (
              <TextField
                label="Units"
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.requiredUnit}
                helperText={
                  errors?.requiredUnit?.type === "invalidUnit" &&
                  getValues("currentProducedUnit") &&
                  'value needs to be greater than "Stored"'
                }            
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
          <Controller
            name="productionCost"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label={
                  <div style={{ position: "relative", top: -3 }}>
                    <span>Cost</span>
                    <img
                      style={{ position: "relative", top: 5, marginLeft: 5, width: 22 }}
                      src={Production_Cost}
                    />
                  </div>
                }
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.productionCost}
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
          <Controller
            name="currentProducedUnit"
            control={control}
            rules={{
              required: true,
              validate: {
                invalidUnit: (currentProducedUnit) => {
                  if(!getValues("requiredUnit")) return true
                  return Number(currentProducedUnit) < Number(getValues("requiredUnit"))
                },
              },
            }}
            render={({ field }) => (
              <TextField
                label={
                  <div style={{ position: "relative", top: -1 }}>
                    <span>Stored</span>
                    <img
                      style={{ position: "relative", top: 3, marginLeft: 5, width: 20 }}
                      src={Logistic_stored}
                    />
                  </div>
                }
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.currentProducedUnit}
                helperText={
                  errors?.currentProducedUnit?.type === "invalidUnit" &&
                  getValues("requiredUnit") &&
                  'value needs to be less than "Units"'
                }
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
        </Box>
        <Box component="fieldset" style={{ marginTop: 15 }}>
          <legend>Industry</legend>
          <Controller
            name="productionOutputModified"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Production Output Modified"
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                error={!!errors.productionOutputModified}
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
          <Controller
            name="productionEfficiency"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label={
                  <div style={{ position: "relative", top: -5 }}>
                    <span>Production Efficiency</span>
                    <img
                      style={{ position: "relative", top: 5, marginLeft: 5 }}
                      src={Production_efficiency}
                    />
                  </div>
                }
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="10 - 100"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                error={!!errors.productionEfficiency}
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
          <Controller
            name="productionEfficiencyCap"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label={
                  <div style={{ position: "relative", top: -5 }}>
                    <span>Production Efficiency Cap</span>
                    <img
                      style={{ position: "relative", top: 5, marginLeft: 5 }}
                      src={Production_efficiency_cap}
                    />
                  </div>
                }
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="10 - 100"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                error={!!errors.productionEfficiencyCap}
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
        </Box>
        <Box component="fieldset" style={{ marginTop: 15 }}>
          <legend>Factory</legend>
          <Controller
            name="milFactory"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label={
                  <div style={{ position: "relative", top: -5 }}>
                    <span>Military Factory Assigned</span>
                    <img
                      style={{ position: "relative", top: 5, marginLeft: 5 }}
                      src={Military_factories}
                    />
                  </div>
                }
                type="number"
                fullWidth={true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="1 - 150"
                error={!!errors.milFactory}
                {...field}
                onWheel={(e) => e.target.blur()}
              />
            )}
          />
        </Box>
        {results && (
          <>
            <Box style={{ marginTop: 30 }}>
              <Alert icon={false} severity="success" style={{ fontSize: 24 }}>
                It takes{" "}
                <u>
                  <strong>~{results.days}</strong> days
                </u>{" "}
                to produce{" "}
                <u>
                  <strong>{results.units}</strong> units
                </u>
              </Alert>
            </Box>
          </>
        )}
        <Stack spacing={2} direction="row" style={{ marginTop: 30 }}>
          <Button variant="outlined" type="reset">
            Clear
          </Button>
          <Button variant="outlined" type="button" onClick={handleSetDefaults}>
            Set Defaults
          </Button>
          <Button variant="contained" type="submit">
            Show Result
          </Button>
        </Stack>
      </form>
      {results && (
        <div style={{ marginTop: 15 }}>
          <ReactECharts
            option={{
              title: {
                text: "Producing units growth",
              },
              xAxis: {
                type: "category",
                name: "Days",
                data: [...charts.produceTotal.axisLabels],
              },
              yAxis: {
                type: "value",
                name: "Units",
              },
              series: [
                {
                  data: [...charts.produceTotal.axisData],
                  type: "line",
                  smooth: true,
                },
              ],
              tooltip: {
                trigger: "axis",
                formatter: function (params) {
                  return `${numeral(params[0].data).format("0,0.00")} units`;
                },
              },
            }}
          />
          <ReactECharts
            option={{
              title: {
                text: "Producing units growth / per day",
              },
              xAxis: {
                type: "category",
                name: "Days",
                data: [...charts.produceToday.axisLabels],
              },
              yAxis: {
                type: "value",
                name: "Units",
              },
              series: [
                {
                  data: [...charts.produceToday.axisData],
                  type: "line",
                  smooth: true,
                },
              ],
              tooltip: {
                trigger: "axis",
                formatter: function (params) {
                  return `${numeral(params[0].data).format("0,0.00")} units`;
                },
              },
            }}
          />
          <ReactECharts
            option={{
              title: {
                text: "Production efficiency growth",
              },
              xAxis: {
                type: "category",
                name: "Days",
                data: [...charts.pfTotal.axisLabels],
              },
              yAxis: {
                type: "value",
                name: "Growth",
              },
              series: [
                {
                  data: [...charts.pfTotal.axisData],
                  type: "line",
                  smooth: true,
                },
              ],
              tooltip: {
                trigger: "axis",
                formatter: function (params) {
                  return `${numeral(params[0].data).format("0.00")}%`;
                },
              },
            }}
          />
          <ReactECharts
            option={{
              title: {
                text: "Production efficiency growth / per day",
              },
              xAxis: {
                type: "category",
                name: "Days",
                data: [...charts.pfToday.axisLabels],
              },
              yAxis: {
                type: "value",
                name: "Growth",
              },
              series: [
                {
                  data: [...charts.pfToday.axisData],
                  type: "line",
                  smooth: true,
                },
              ],
              tooltip: {
                trigger: "axis",
                formatter: function (params) {
                  return `${numeral(params[0].data).format("0.00")}%`;
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
}

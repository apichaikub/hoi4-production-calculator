import { useState } from "react";
import { useForm } from "react-hook-form";
import numeral from "numeral";

const max_day_limit = 7305

const useFormCalc = () => {
  const [results, setResults] = useState(null);
  const [charts, setCharts] = useState({
    produceToday: {
      axisLabels: [],
      axisData: [],
    },
    produceTotal: {
      axisLabels: [],
      axisData: [],
    },
    pfToday: {
      axisLabels: [],
      axisData: [],
    },
    pfTotal: {
      axisLabels: [],
      axisData: [],
    },
  });
  const { handleSubmit, reset, getValues, trigger, watch, setValue, control, formState } = useForm({
    defaultValues: {
      milFactory: "5",
      productionOutputModified: "-15",
      productionEfficiency: "10",
      productionEfficiencyCap: "50",
      requiredUnit: "420",
      productionCost: "3.5",
      currentProducedUnit: "0",
      // milFactory: "64",
      // productionOutputModified: "100",
      // productionEfficiency: "34",
      // productionEfficiencyCap: "100",
      // requiredUnit: "5000",
      // productionCost: "113",
      // currentProducedUnit: "0",
    },
  });

  const onSubmit = (data) => {
    // console.log(data);

    const mil_factory = Number(data.milFactory);
    const base_output = 4.5; // fixed value

    const factory_output_modifier = Number(data.productionOutputModified) / 100; // as percentage
    const prod_eff_max = Number(data.productionEfficiencyCap) / 100; // as percentage
    let prod_eff_sum_current = Number(data.productionEfficiency) / 100; // as percentage

    const production_cost = Number(data.productionCost); // item's cost
    const expect_total = Number(data.requiredUnit); // item expect total
    let product_sum_current = Number(data.currentProducedUnit); // amount of item that is producing

    let reachMaxCapAt = null

    let day = 1;

    const produceToday_xAxisLabels = [];
    const productToday_xAxisData = [];

    const produceTotal_xAxisLabels = [];
    const productTotal_xAxisData = [];

    const pfToday_xAxisLabels = [];
    const pfToday_xAxisData = [];

    const pfTotal_xAxisLabels = [];
    const pfTotal_xAxisData = [];

    // console.log("mil_factory", mil_factory);
    // console.log("factory_output_modifier", factory_output_modifier);
    // console.log("prod_eff_max", prod_eff_max);
    // console.log("prod_eff_sum_current", prod_eff_sum_current);
    // console.log("production_cost", production_cost);
    // console.log("expect_total", expect_total);
    // console.log("product_sum_current", product_sum_current);

    while (product_sum_current < expect_total) {
      if (day > max_day_limit) {
        alert(
          "It takes over 20 years or " + max_day_limit + " days to produce " +
          numeral(expect_total).format("0,0") +" units, please enter your input again."
        );
        break;
      }

      const prod_eff_growth_today = (0.001 * Math.pow(prod_eff_max, 2)) / prod_eff_sum_current;

      if (day > 1 && prod_eff_sum_current < prod_eff_max) {
        prod_eff_sum_current += prod_eff_growth_today;
      }

      if(prod_eff_sum_current >= 1 && !reachMaxCapAt) {
        reachMaxCapAt = day
      }

      const output_today =
        base_output *
        (1 + factory_output_modifier) *
        prod_eff_sum_current *
        mil_factory;
      const produced_today = output_today / production_cost;
      product_sum_current += produced_today;

      produceToday_xAxisLabels.push(day);
      productToday_xAxisData.push(produced_today);

      produceTotal_xAxisLabels.push(day);
      productTotal_xAxisData.push(Math.abs((Number(data.currentProducedUnit) - product_sum_current)));

      pfToday_xAxisLabels.push(day);
      pfToday_xAxisData.push(
        prod_eff_growth_today < 0.001 ? null : prod_eff_growth_today * 100
      );

      pfTotal_xAxisLabels.push(day);
      pfTotal_xAxisData.push(prod_eff_sum_current > 1 ? 100 : prod_eff_sum_current * 100);

      day++;

      // console.log("day: " + day);
      // console.log("production efficiency growth today: " + prod_eff_growth_today);
      // console.log("production efficiency current: " + prod_eff_sum_current);
      // console.log("output today: " + output_today);
      // console.log("produced today: " + produced_today);
      // console.log("product sum current: " + product_sum_current);
      // console.log("\n--------------");
    }

    if (day <= max_day_limit) {
      setResults({
        ...results,
        days: day,
        units: numeral(data.requiredUnit - data.currentProducedUnit).format("0,0"),
        reachMaxCapAt: reachMaxCapAt,
      });
  
      setCharts({
        ...charts,
        produceToday: {
          axisLabels: produceToday_xAxisLabels,
          axisData: productToday_xAxisData,
        },
        produceTotal: {
          axisLabels: produceTotal_xAxisLabels,
          axisData: productTotal_xAxisData,
        },
        pfToday: {
          axisLabels: pfToday_xAxisLabels,
          axisData: pfToday_xAxisData,
        },
        pfTotal: {
          axisLabels: pfTotal_xAxisLabels,
          axisData: pfTotal_xAxisData,
        },
      });
    }
  };

  const handleReset = () => {
    reset();
    setValue("milFactory", "");
    setValue("productionOutputModified", "");
    setValue("productionEfficiency", "");
    setValue("productionEfficiencyCap", "");
    setValue("requiredUnit", "");
    setValue("productionCost", "");
    setValue("currentProducedUnit", "");
    setResults(null);
    setCharts(null);
  };

  const handleSetDefaults = () => {
    reset();
    setResults(null);
    setCharts(null);
  }

  return {
    handleSubmit,
    onSubmit,
    handleReset,
    handleSetDefaults,
    getValues,
    trigger,
    watch,
    control,
    formState,
    results,
    charts,
  };
};

export default useFormCalc;

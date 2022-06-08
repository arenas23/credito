import "./App.css";
import React,{useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import { Form } from "./components/useForm";
import Input from "./components/Input";
import Select from "./components/Select";
import { isCursorAtStart } from "@testing-library/user-event/dist/utils";

const valores = [
  { value: 0.01, tipo: "Vivienda", id:1 },
  { value: 0.005, tipo: "Educacion", id:2},
  { value: 0.015, tipo: "Libre Inversion",id:3 }
];

const defaultInputs = [
  { name: "prestamo", value: 0 },
  { name: "tipo prestamo", value: 0 },
  { name: "cuotas", value: 0 },
  { name: "total", value: 0 },
];

function App() {
  const [prestamo, setPrestamo] = useState(0);
  const [tipoPrestamo, setTipoPrestamo] = useState(0);
  const [cuotas, setCuotas] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const calculo = (event) => {
    if(event.target.name === "prestamo"){
        if(event.target.value === undefined || event.target.value ===""){
          setPrestamo(0)
        }else{
          console.log(parseInt(event.target.value));
          setPrestamo(parseInt(event.target.value))
        }
        
      }else if(event.target.name === "tipo prestamo"){
        setTipoPrestamo(parseFloat(event.target.value));
      }else {
        setCuotas(parseInt(event.target.value));
      }
    console.log(total);
  };

  useEffect(() => {
    setTotal((prestamo * tipoPrestamo * cuotas) + prestamo);
  })

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input label="email" name="email"  />
          <Input
            label="valor del prestamo"
            name="prestamo"
            onChange={calculo}
          />
          <Select
            name="tipo prestamo"
            label="tipo prestamo"
            options={valores}
            onChange={calculo}
            
          ></Select>
          <Input label="numero de cuotas" name="cuotas" onChange = {calculo} />
          <Input
            label="total de la deuda"
            name="totalDeuda"
            value={total}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default App;

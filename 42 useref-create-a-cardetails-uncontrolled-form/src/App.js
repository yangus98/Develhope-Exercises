import CarForm from "./CarForm"

export default function App() {

  let initialData = {
  name: "Lamborghini",
  model: "Miura",
  year: "2023",
  color: "Rosso"
  }

return (
      <>
      <CarForm initialData={initialData}/>
      </>
    );
}
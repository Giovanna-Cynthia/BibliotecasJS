import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Header from "./Components/Header"
import "./app.css";

function App() {

  return (
    <>
      <Header/>
      <Form/>
      <Card/>
      <Banner titulo="Banner Principal New" subTitulo="Lorem Ipsum New"/>
    </>
  )
}

export default App

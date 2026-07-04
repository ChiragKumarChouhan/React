import Card from "./components/cards";

function App() {
  const myobj = {
    username: "Chirag Kumar",
    age: 20,
    btntext:"ck"
  };

  const newarr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-400 text-blue-100 text-5xl p-5 text-center">
        Tailwind CSS is Working!
      </h1>

      <Card
        channel="Chirag's React"
        someobj={myobj}
        newar={newarr}
      />

      <Card
        channel="Second Card"
        someobj={{
          username: "Mayank",
          age: 21,
          btntext:"new web"
        }}
        newar={[10, 20, 30]}
      />
       <Card
        channel="Second Card"
        someobj={{
          username: "himanshu",
          age: 21,
          btntext:"hello"
        }}
        newar={[10, 20, 30]}
      />
    </>
  );
}

export default App;

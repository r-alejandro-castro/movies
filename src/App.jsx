import MyRouts from './routers/routes.jsx'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <header className='font-roboto'>
        <h1 className='text-center text-base border-box font-bold'>Movies</h1>
      </header>
      <MyRouts />
    </div>
  );
}

export default App;
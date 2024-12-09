function App() {
    return (
        <div className="wrapper">
          <textarea
            readOnly={false}
            maxLength={3}
            spellCheck
            style={{backgroundColor: "gray"}}
          />
        </div>
      );   
//  return <input style = {{border: "1px solid blue"}} />
}

export default App;
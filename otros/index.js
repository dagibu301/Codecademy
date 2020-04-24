
userQuestion
  ? ( userName
    ? console.log(`${userName} wants to know ${userQuestion}`)
    : console.log(`The stranger user wants to know ${userQuestion}`) )
  : console.log("Introduce a question.");

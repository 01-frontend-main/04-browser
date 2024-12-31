function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function heavyExecutionTask() {
  const num = 44; // High Fibonacci number
  let result = fibonacci(num); // This will take a significant amount of time for high values of 'num'
  console.log(`Fibonacci(${num}) = ${result}`);
}

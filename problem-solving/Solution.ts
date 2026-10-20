// Problem => 1
const staircase = (n: any) => {
  let result = "";

  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - 1);
    let hashes = "#".repeat(i);

    result += spaces + hashes;

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

console.log(staircase(4));

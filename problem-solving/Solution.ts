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

// Problem => 2
const gradingStudents = (grades: any) => {
  return grades.map((grade: any) => {
    if (grade < 38) {
      return grade;
    }

    const multiple = Math.ceil(grade / 5) * 5;

    if (multiple - grade < 3) {
      return multiple;
    }

    return grade;
  });
};

// Problem => 3
const timeConversion = (s: string): string => {
  const period = s.slice(-2);
  const time = s.slice(0, -2);
  let [hours, minutes, seconds] = time.split(":");

  let hour = Number(hours);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  const formattedHour = String(hour).padStart(2, "0");

  return `${formattedHour}:${minutes}:${seconds}`;
};

// Problem => 4
const stringRepeat = (n: number, s: string) => {
  return s.repeat(n);
};

// Problem => 5
const reversedString = (str: string) => {
  return str.split("").reverse().join("");
};

// Problem => 6
const sumPositive = (arr: number[]) => {
  return arr.filter((sum) => sum > 0).reduce((sum, num) => sum + num, 0);
};

// Problem => 7
const grasshopperSummation = (num: number) => {
  return (num * (num + 1)) / 2;
};

// Problem => 8
const convertBooleanToString = (b: boolean) => {
  return String(b);
};

// Problem => 9
const fizzBuzz = (n: number) => {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

// Problem => 10
const runningSumArray = (nums: any) => {
  const result = [];

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }

  return result;
};

// Problem => 11
const richestCustomerWealth = (accounts: any) => {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let totalWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      totalWealth += accounts[i][j];
    }

    if (totalWealth > maxWealth) {
      maxWealth = totalWealth;
    }
  }

  return maxWealth;
};

// Problem => 12
const removeDuplicates = (nums: any) => {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// Problem => 13
const containsDuplicate = (nums: any) => {
  const uniqueNums = new Set(nums);

  return uniqueNums.size !== nums.length;
};

// Problem => 14
const moveZeroes = (nums: any) => {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
};

// Problem => 15
const mergeSortedArray = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};

// Problem => 17
const plusOne = (digits: number[]) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};

// Problem => 18
const reverseString = (str: string[]) => {
  return str.reverse();
};

// Problem => 19
const lengthOfLastWord = (str: string) => {
  const words = str.trim().split(" ");

  return words[words.length - 1].length;
};

// Problem => 20
const longestCommonFrefix = (strs: string[]) => {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};

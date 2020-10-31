//O(n)
//What would you say if I asked you what is the BIG O of the function to find Nemo?
//As we said a runtime is simply how long something takes to run. How does this function and its runtime grow as our input increases? As our input goes from just a single item in an array, Nemo, to 10 items in an array to 100000. How does the efficiency of this function increase.

//if we look at this graph and we say we have 4 items in the array, while the number of operations if going to be 4 because we are going to loop through each item and say "Is this Nemo?" 4 times. No matter what, we are looping 4 times. At least with the way that we have this code set up. If we have 5 items in the array, it's going to be 5 operations, 5 loops. 6 is the same. 6 items is 6 operations. 7 is 7 operations. And 8 is 8 operations. Do we see  little bit of pattern here? We can draw a line through it. This is linear. As our number of inputs increase, the number of operations increase as well. Here, we've learned our very first Big-O notation. 

//We say that finding Nemo function has a Big O notation of O(n). We say Big O of N or what we call linear time. It takes linear time to find a Nemo. Where does this n from O(n) come from? This "n" can be anything. We could put x, y, fish, and etc. It's just an arbitrary letter. We usually give n when it comes to Big-O. This is just a standard that you'll see across the board and it simply means the Big O depends on the number of inputs, number of x, number of fish. 

const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }
}

findNemo(large)
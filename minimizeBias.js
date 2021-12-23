// Salesforce HackerRank Assessment
//A programming organization is planning a contest for several programmers, each of which has a certain rating. (The higher the rating, the better the programmer.) Each programmer is paired with another programmer, and the difference between their ratings is referred to as the "bias amount". Given the ratings of all the programmers in the contest, what is the minimum total bias amount that can be achieved by optimally planning the programmer pairs?

let ratings = [ 1, 3, 6, 6 ]

// Strategy:  Subtract the highest ratings with the next highest and so on, and sum the differences.
// This turned out to be an easy question, however, I was caught up in the moment and didn't have an understanding of the math involved.  I didn't know that the anaswer was just to subtract the largest numbers with the next largest numbers.  

//sort the ratings in desc order
//declare a variable with a value of 0
//(Thought i could put the numers in an array and sum, but that's harder than I though so I just went with an integer that I would add to on each iteration)
// iterate through the array,
  //Starting with the first, for each element, 
    // Subtract it's neighbor from it.
    //add the difference to sum variable
  //On the next iteration, increment i by +2, since we are going to be using the preceeding previous eleent i+1 to caluclate the first sum

function minimizeBias(ratings) {
  const sorted = ratings.sort((a,b) => {
    return b - a; 
  })

  let totalBias = 0;

  
  for (let i = 0; i <= sorted.length - 1; i += 2) {
    const sum = sorted[i] - sorted[i+1];
    totalBias += sum;
  }  

  return totalBias;

}
var scores = [];

function putScores(topicNumber,totalScore){
  if(totalScore%topicNumber==0){
      for(let i =0;i < topicNumber;i++){
        scores.push(totalScore/topicNumber)
      }  
  }if(totalScore%topicNumber !==0){
    for(let i =0;i < topicNumber;i++){
       let s = Math.floor(totalScore/topicNumber);
        scores.push(s)
        scores[0] = s + totalScore%topicNumber
     
      }    
  }
}

putScores(6,31);

console.log(scores)
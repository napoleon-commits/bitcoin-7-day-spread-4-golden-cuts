export default (()=>{
    const goldenRatio = ((1+(5**(1/2)))/2) - 1;
    const cuts = [goldenRatio];
    for(let i = 0; i < 2; i+=1){
        cuts.push(
            (1-(cuts.reduce((a,b)=>a+b)))*goldenRatio
        );
    }
    cuts.push(1-cuts.reduce((a,b)=>a+b));
    return cuts;
})()
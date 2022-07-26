/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const shortest = [];
    let string = "";
    let prefix = [];
    for (let i=0; i<=strs.length-1;i++){
        shortest.push(strs[i].length);
    }
    
    
    

           
                for (let j=0; j<=shortest.sort()[0]-1;j++){
                    prefix = []
                    strs.map(e=>{prefix.push(e.split('')[j])});
                     if(prefix.every( (val, i, arr) => val === arr[0] )){
                    string = string.concat(strs[0].split("")[j]);
                }
                
                else{
                    return string
                }
                            
                        }
               
           
        
        
    
//     for (let i=0; i<=shortest.sort()[0]-1;i++){
//         if((strs[0].split('')[i]===strs[1].split('')[i])&&(strs[1].split('')[i]===strs[2].split('')[i])){
            
//             string = string.concat(strs[0].split("")[i]);
//             console.log("hello")
//         }
//     }
    
    return string;
    
};

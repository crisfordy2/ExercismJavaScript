


export const transform = (dict) => {
  let ans = {};
  for(let key in dict){
    let temp = dict[key];
    for(let i = 0; i < temp.length; i++){
      ans[temp[i].toLowerCase()] = parseInt(key);
    }
  }
  return ans;
};
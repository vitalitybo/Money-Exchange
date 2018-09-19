// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let result = {};
  let remH, remQ, remD, remN;

  if (currency === 0 || currency < 0) {
    return result;
  };

  if (currency > 10000) {
    result.error = "You are rich, my friend! We don't have so much coins for exchange";
    return result;
  };
  
  if ( (currency / 50) >= 1) {
    result["H"] = Math.floor(currency / 50);
    remH = currency - result["H"] * 50;
  } else {
      remH =  currency;
  };    

  if ( (remH / 25) >= 1) {
    result["Q"] = Math.floor(remH / 25);
    remQ = remH - result["Q"] * 25;
  } else {
      remQ = remH;
  };

  if ( (remQ / 10) >= 1) {
    result["D"] = Math.floor(remQ / 10);
    remD = remQ - result["D"] * 10;
  } else {
      remD = remQ;
  };

  if ( (remD / 5) >= 1) {
    result["N"] = Math.floor(remD / 5);
    remN = remD - result["N"] * 5;
  } else {
      remN = remD;
  };

  if (remN) {
    result["P"] = remN;
  };

  return result;

}

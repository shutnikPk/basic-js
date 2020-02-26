module.exports = function getSeason( date ) {

  if(date==undefined){
    return 'Unable to determine the time of year!';
  }

  if (date.getTime()) {
    
  }

  const season = [
    'winter',
    'spring',
    'summer',
    'autumn'
  ]
  let mounth = date.getMonth();

  if (mounth <=1||mounth==11) {
    return season[0]
  }else if (mounth>1&&mounth<=4){
    return season[1]
  }else if (mounth>4&&mounth<=7){
    return season[2]
  }else {
    return season[3]
  }

};

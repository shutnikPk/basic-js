module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)){return false}

  members = members.filter(item=>typeof item == 'string');
  members = members.map(item => item.trim());
  members = members.map(item => item.toUpperCase());
  members = members.map(item => item.slice(0,1));
  members = members.sort();
  members = members.join('');
  return members;

};
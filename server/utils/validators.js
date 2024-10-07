
const isValidSIMNumber = (sim_number) => {
    return sim_number && sim_number.length === 10; 
  };
  
  module.exports = { isValidSIMNumber };
  
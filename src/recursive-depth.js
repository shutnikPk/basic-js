  module.exports = class DepthCalculator {

      calculateDepth(arr) {
        let a = arr.filter(item => Array.isArray(item))
        if(!a.length)return 1;
        return Math.max(...a.map(this.calculateDepth, this))+1;
      }
  };
const chainMaker = {

'cain': [],

getLength() {
    return this.cain.length;
  },
  addLink(value) {
    if (value == undefined) {
      this.cain.push();
    }
    this.cain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position != 'number' || position > this.cain.length) {
      this.cain = [];
      throw Error;
    }
    this.cain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.cain.reverse();
    return this;
  },
  finishChain() {
    let result;
    if (this.cain.length == 1) {
      this.cain[0] = '( ' + this.cain[0] + ' )'
    } else {
      this.cain[0] = '( ' + this.cain[0] + ' )~';
      for (let i = 1; i < this.cain.length - 1; i++) {
        this.cain[i] = '~( ' + this.cain[i] + ' )~';
      }
      this.cain[this.cain.length - 1] = '~( ' + this.cain[this.cain.length - 1] + ' )';
    }  
    result = this.cain.join('');
    this.cain=[];
    return result;

  }
};

module.exports = chainMaker;

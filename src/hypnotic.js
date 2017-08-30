var addHypnotic = function(top, left, timeBetweenSteps) {
  // this.oldStep = makeDancer.prototype.step;
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  //overwrites the node passing in shark class
  this.$node = $('<span class="hypnotic"></span>');
  // console.log('this.$node');
  //we have to run setposition again since setposition acts on node
  this.setPosition(top, left);
  this.$node.animate( {left: '-=250px', opacity: '0.9'}).animate({rotate: '30deg'}, 1000);
  
  var context = this;
  $(document).dblclick(function(event) {
    context.$node.animate({top: event.pageX});
  });

};

addHypnotic.prototype = Object.create(makeDancer.prototype);
addHypnotic.prototype.constructor = addHypnotic;

addHypnotic.prototype.step = function() {
  

  // console.log('before oldstep');
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this);
  
  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};

addHypnotic.prototype.lineUp = function() {
  this.setPosition(300);
};
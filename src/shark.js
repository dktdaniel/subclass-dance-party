var addShark = function(top, left, timeBetweenSteps) {
  // this.oldStep = makeDancer.prototype.step;
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  //overwrites the node passing in shark class
  this.$node = $('<span class="shark" id="image"></span>');
  console.log('this.$node');
  //we have to run setposition again since setposition acts on node
  this.setPosition(top, left);
  this.$node.animate( {left: '-=250px', opacity: '0.9'}).animate({rotate: '30deg'}, 1000);
  console.log(this.$node);
  console.log('this' + $('this'));
  var context = this;
    var angle = 0;
    setInterval(function() {
      angle += 3;
      context.$node.rotate(angle);
    }, 50);
  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step; // setTimeout(this.step, timeBetweenSteps);
};

addShark.prototype = Object.create(makeDancer.prototype);
addShark.prototype.constructor = addShark;

addShark.prototype.step = function() {
  

  // console.log('before oldstep');
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this);
  
  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};

addShark.prototype.lineUp = function() {
  this.setPosition(100);
};
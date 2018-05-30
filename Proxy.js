// Override inBuilt handlers : GET SET DELETE APPLY CONSTRUCT GETPROPTYPEOF


var handler = {
  get: function (target, name ){
    if(name in target){
      return target[name];
    }else {
      return "Error! " + name + " Not in " + target
    }
  }
};

var p = new Proxy({}, handler)

//Target
p.abc = "This is abc"
p.xyz = "This is xyz"

//Name
console.log(p.abbc)

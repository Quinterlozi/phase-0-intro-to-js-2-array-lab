// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name1){
return cats.push("Ralph")
}

function destructivelyPrependCat(name1){
     return cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    return cats.pop("Garfield")
}
function destructivelyRemoveFirstCat() {
    return cats.shift("Milo")
}

function appendCat(name) {
const newCatsArray = [...cats, name]
return newCatsArray
}

function prependCat(name) {
    const newCatsArray = [name, ...cats]
    return newCatsArray   
}

function removeFirstCat() {
    const newCatsArray = cats.slice(1);
    return newCatsArray;
  }

  function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
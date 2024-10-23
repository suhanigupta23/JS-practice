//OBJECTS
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObject) {
    console.log(`${key} for shortcut is for ${myObject[key]}`);
}

//ARRAY
const programming = ["js", "rb", "py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}

//MAP
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for(const key in map){
    console.log(key);
}
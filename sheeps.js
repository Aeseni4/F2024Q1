const sheeps = [0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,]
const whiteSheepHouse = []
for (x=0;x<=sheeps.length;x++) {
    if (sheeps[x]){
        whiteSheepHouse.push(sheeps[x])
    }
}

console.log(whiteSheepHouse);


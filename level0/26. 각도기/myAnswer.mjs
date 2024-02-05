const object = new Map();
object.set("180", 4);
object.set("91", 3);
object.set("90", 2);
object.set("1", 1);
for(const key of object) {
    if(Number(key[0]) <= angle) {
        return key[1]
    }
}
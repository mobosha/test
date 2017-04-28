
class MyAnimal {
protected name:string;
//构造方法
constructor(private theName : string){
    this.name = theName;
}
getMsg(name : string):string{
    return this.name=name;
}
}
//犀牛
class Rhino extends MyAnimal{
constructor(){
super("犀牛111");
}
getMsg(name : string):string{
return this.name = name;
}
}
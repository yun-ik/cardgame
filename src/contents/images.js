const name=["rabbit","cat","mist",
"dog","lion","snake"]
const names = []

for(let i=0;i<2;i++){
    for(let j=0;j<name.length;j++){
        names.push(name[j])
    }
}

const imgUrl = names.map((names) => "./img/"+names+".jpg");

const id = [];

for(let i=0;i<names.length;i++){
    let n = (Math.floor(Math.random() * names.length))
    var YN = "Y";
    for(let j=0;j<id.length;j++){
        if(parseInt(id[j]) === n){
            YN = "N";
            i--;
        }
    }
    if(YN === "Y"){
        id.push(n);
    }
}

const images =[
            {names, imgUrl, id}
        ]

export default images;
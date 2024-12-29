
function MyFunction(p1,p2){
    return p1*p2;
}

const NewFun = (n1,n2)=> {return n1*n2}

const FetchData =(callback)=>{
    setTimeout(()=>{callback("Data Received")},1000);
}

FetchData(console.log)
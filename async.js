const fetchData = async(url) => {
    const res = await fetch(url);
    console.log(res);
    const data= await res.json();
    return data;

};
const url ="https://api.github.com/search/users?q=aungpaing";
const resultData = fetchData(url);

resultData.then((data) => console.log(data));
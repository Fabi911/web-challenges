console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response= await fetch(url);
    const data = await response.json();
    return data.results;
}

async function outputData() {
    console.log( await fetchData())
    const db= await fetchData();
    const key= 'R2-D2'
    const data = db.find((obj)  => obj.name === key);
    console.log(data)
}

// console.log('result db'+db)


outputData()





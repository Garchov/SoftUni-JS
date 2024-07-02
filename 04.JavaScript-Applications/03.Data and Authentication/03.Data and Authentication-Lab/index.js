async function request(){
    const data={name:'Peter', age:24}

    const response= await fetch('http://localhost:3030/jsonstore/advanced/demo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok){
        console.error('Eror sending request',response.status);
        console.log(await response.json());
        return;
    }
    const result = await response.json();
    console.log(result);
}

   async function getData(){

    const response= await fetch('http://localhost:3030/jsonstore/advanced/demo')
    
    if (!response.ok){
        console.error('Eror sending request',response.status);
        console.log(await response.json());
        return;
    }
    const result = await response.json();
    console.log(result);

    }

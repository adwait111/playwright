const { test, expect, request } = require("@playwright/test");
let id = 
test('API GET request',async({request})=>{
    let req = await request.get('https://reqres.in/api/users?page=2')
    console.log(req.status());
    let res = await req.json();
    console.log(res);
    console.log(res.total);
    await expect(req.status()).toBe(200);
    await expect(res.total).toBe(12);
    console.log(res.total_pages);
    console.log(res.data[0].first_name);
});
test('API POST REQUEST',async({request})=>{
    let req2 = await request.post('https://reqres.in/api/users',{
        data:{
            name:"sona",
            job:"Teacher"
        },
        headers:{"Content-Type": "application/json"}
    });
    let res2 = await req2.json()
    console.log(res2)
    expect(await req2.status()).toBe(201);
    console.log(await res2.name)
    expect(await res2.name).toBe("sona");
    expect(await res2.job).toBe("Teacher");
    id = res2.id
    console.log(id)
})

test('API PUT REQUEST',async({request})=>{
    let req3 = await request.put(`https://reqres.in/api/users/${id}`,{
        data:{
            name:"mona",
            job:"Cake baker"
        }
    })
    //console.log(awaitreq3.json()) 
    expect((await req3.status())).toBe(200);
    let res3 = await req3.json()
    expect(await res3.name).toBe('mona')
    expect(await res3.job).toBe('Cake baker')
});
test('API DELETE REQUEST',async({request})=>{
    let req4 = await request.delete(`https://reqres.in/api/users/${id}`)
    expect(await req4.status()).toBe(204)
})



// export const schoolFicher = async () => {
//     let url = "http://localhost:3001/schools";
//     let response = await fetch(url);
//     let data = await response.json();

//     return data;
// };



export const schoolFicher = async () => {
    let url = "https://api.jsonbin.io/v3/b/673104a8ad19ca34f8c7994a";
    let xAccessKey = '$2a$10$7NKmZ9AcE1SwMvsuPp2RZ.m1epJvO6jem7qVJ6HHs.RquCDJLKQEi'
    let masterKey = '$2a$10$Q/ZpkXIMM6s8ze40suapruOnmWeSFRtrNw0xm5SZoy3sdwuIuqviK'
    let response = await fetch(url,{
        
            headers: {
                'X-Access-Key': xAccessKey,
                'X-Master-Key': masterKey
            }
    });
    let data = await response.json();
    return data.record.schools;
};


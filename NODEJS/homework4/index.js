/*employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

const fs = require('fs');



const createFile = (fileName, data = "") => {
    return new Promise((resolve, reject) => {
        console.log("dosya oluşturma ve veri ekleme");
        console.log("*******************************");
        fs.writeFile(fileName, JSON.stringify(data), 'utf8', (error) => {
            if (error) { reject(error); console.log(error); }
            console.log('veri dosyaya başarıyla kaydedildi.');
            resolve(data);
        });
    })

}

const readFile = (fileName) => {
    return new Promise((resolve, reject) => {
        console.log("dosya okuma");
        console.log("*******************************\n");

        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) { console.log("Dosya okunurken hata oluştu", error); reject(error); }
            console.log('veri listeleniyor');
            fileData = JSON.parse(data);
            console.log(data);
            resolve(data);
        })
    })
}

const deleteFile = async (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.unlink(fileName, () => {
            console.log("dosya silindi");
            resolve();
        });
    })
}

const main = async () => {
    let fileName = "employees.json";
    let data = {
        "name": "Employee 1 Name",
        "salary": 2000
    };
    await createFile(fileName, data);
    await readFile(fileName);

    let jsonData=data;

    jsonData.name="Turgay";
    jsonData.salary=5000;


    console.log("yeni veriyle güncelleniyor.");
    await createFile(fileName,jsonData);
    await readFile(fileName);

    console.log("dosya siliniyor.");
    await deleteFile(fileName);




    

}

main();



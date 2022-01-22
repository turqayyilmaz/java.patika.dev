let posts = [{
    title: 'Hello World!',
    body: 'lorem ipsum dolor...',
    author: 'turqay'
},
{
    title: 'Introduction to NODEJS',
    body: 'lorem ipsum dolor...',
    author: 'turqay'
}
];



let newPost = {
    title: 'New Post!',
    body: 'lorem ipsum dolor...',
    author: 'turqay'
};
const postGetAll = (data) =>{
    return new Promise((resolve,reject)=>{
        console.log("tüm bloglar listeleniyor");
        if(data){
            console.log("listemele başarılı");
            resolve(posts);
        }
        else{
            reject("listelenecek blog bulunamadı!");
        }
    });
};

const postAdd= (post)=>{
    return new Promise((resolve,reject)=>{
        console.log("blog ekleniyor...");
        if(post){
            posts.push(post);
            resolve("blog eklendi");
        }
        else{
            reject("blog eklenirken hata oluştu!");
        }
    });
};

const main = async ()=>{
try {
    
    let getPosts = await postGetAll(true);
    console.log(getPosts);

    console.log("\n\n New Post Add");

    let isAdded= await postAdd(newPost);
    console.log(isAdded);

    getPosts = await postGetAll(true);
    console.log(getPosts);
} catch (error) {
    console.log(error);
}
};



main();
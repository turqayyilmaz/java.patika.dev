/* Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
Kolay gelsin. */

const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;


    switch (url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write("<h2>INDEX SAYFASI</h2>");
            break;
        case "/hakkimda":
            res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
            res.write("<h2>HAKKIMDA SAYFASI</h2>");
            break;
        case "/iletisim":
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write("<h2>İLETİŞİM SAYFASI</h2>");
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h2>HATA SAYFASI</h2>");
            break;
    }
   

    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
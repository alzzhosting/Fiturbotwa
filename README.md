# 🚀 Web Share Code
Website sederhana untuk berbagi kode dengan tampilan yang simpel dan modern.

---

## 🌟 **CASE TT SEARCH**
```js
case 'tiktoksearch':
case 'ttsearch': {
    if (!text) return m.reply(`${prefix + command} jj epep`);
    m.reply('Proses...');

    try {
        const axios = require('axios');
        const { data } = await axios.get(`https://api.diioffc.web.id/api/search/tiktok?query=${text}`);
        let result = data.result[Math.floor(Math.random() * data.result.length)];

        await kenz.sendMessage(from, { 
            video: { url: result.media.no_watermark }, 
            mimetype: 'video/mp4', 
            caption: result.title 
        }, { quoted: m });

        setTimeout(() => {
            kenz.sendMessage(from, { 
                audio: { url: result.media.audio }, 
                mimetype: "audio/mpeg", 
                contextInfo: { 
                    externalAdReply: { 
                        thumbnailUrl: result.thumbnail, 
                        title: result.music.title, 
                        body: result.music.author, 
                        sourceUrl: null, 
                        renderLargerThumbnail: true, 
                        mediaType: 1
                    }
                }
            }, { quoted: m });
        }, 3000);

    } catch (err) {
        m.reply('Error...');
    }
}
break;
```
### 🌟 **CASE AI**
```js
case 'ai': {
    if (!text) return m.reply('Masukkan pertanyaan!');
    m.reply('Proses...');

    try {
        const axios = require('axios');
        let senderName = pushname || "User";
        const { data } = await axios.get(`https://api.vreden.web.id/api/mora?query=${encodeURIComponent(text)}&username=${encodeURIComponent(senderName)}`);

        if (data.result) {
            m.reply(data.result);
        } else {
            m.reply('Gagal mendapatkan jawaban.');
        }

    } catch (err) {
        m.reply('Error...');
    }
}
break;
```
### **CASE TOURL**
```js
case "tourl": {
    if (!m.quoted) return m.reply("Reply gambar atau video untuk diubah ke URL!");
    let mime = m.quoted.mtype || "";
    if (!/image|video/.test(mime)) return m.reply("Format tidak didukung! Hanya bisa gambar/video.");

    let media = await m.quoted.download();
    let form = new FormData();
    form.append("file", media, { filename: "upload" });

    let res = await axios.post("https://vapis.my.id/api/tinyurl?url=", form, {
        headers: { ...form.getHeaders() }
    });

    if (res.data && res.data.result) {
        m.reply(`✅ *Berhasil diubah ke URL:*\n${res.data.result}`);
    } else {
        m.reply("❌ Gagal membuat URL, coba lagi.");
    }
}
break;
```
### **CASE YTMP4**
```js
case "ytmp4": {
    if (!m.isGroup) {
        if (!text) return m.reply('Masukkan URL YouTube!');
        m.reply(mess.wait);

        try {
            let url = `https://api.ryzendesu.vip/api/downloader/ytmp4?url=${encodeURIComponent(text)}&quality=720p`;
            let { data } = await axios.get(url);

            if (!data || !data.result || !data.result.download_url) {
                return m.reply("⚠️ Gagal mendapatkan video! Pastikan linknya benar atau coba lagi nanti.");
            }

            let teks = `
*_🎬 Judul_*: ${data.result.title}
*_⏳ Durasi_*: ${data.result.duration}
*_📅 Upload_*: ${data.result.uploadDate}
*_👀 Views_*: ${data.result.views}
`;

            await kenzdev.sendMessage(m.chat, {
                video: { url: data.result.download_url },
                mimetype: 'video/mp4',
                fileName: `${data.result.title}.mp4`,
                caption: teks
            });

        } catch (err) {
            console.error(err);
            m.reply("❌ Terjadi kesalahan, coba lagi nanti.");
        }
    } else {
        m.reply("❌ Perintah ini hanya bisa digunakan di chat pribadi!");
    }

    break;
}
```

---

## **WEB INI DICIPTAKAN MENGGUNAKAN README.MD**

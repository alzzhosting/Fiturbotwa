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

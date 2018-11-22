# ExportMedium2MDfile

> export medium to .md files
> 以 Node js 撰寫的小工具
> 使用 mediumID 以及 api.rss2json.com API
> 將所有 published medium post 轉為 md file 存放在 post 資料夾
> 

related blog post
https://pine0113.github.io/2018/%E5%8C%AF%E5%87%BAmedium%E6%96%87%E7%AB%A0%E7%82%BAmarkdown/


# How to Use

## Requirement
node js v10.1.0

## Setup

1. clone repo
``` 
  git clone https://github.com/pine0113/exportMedium2MDfile.git 
```

2. 註冊 api.rss2json.com 並取得 apikey
   登入後點選 ```my account``` > ```API Key``` 就可以看到

3. 修改參數
   將 ```api_key``` 以及 ```mediumUserID``` 改為你的資訊

>run.js
```
var api_key = ''
var mediumUserID = ''
```


### 執行

```
node run.js
```

就會將所有 post 存放在 `./post` 底下

## Support

請從下方資訊與我聯繫

- Facebook <a href="https://www.facebook.com/pine0113" target="_blank">`綠島`</a>

---

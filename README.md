# Ice工具库

### ie_v

> 作用

获取ie版本

> 返回

如果是ie6-9返回版本号，否则返回null

**示例**

```javascript
let ieV = ie_v();
if(ieV){
    alert("当前版本为"+ieV);    
} else {
    alert("当前为ie10及以上");
}
```

## audio

 

> 作用 

音乐播放插件



## 直接script标签引入

```html
<script src="audio/music.js"></script>
```



## 简单使用

```javascript
new AudioRun(options);
```

> options

| 参数名 | 类型     | 说明                                 |
| --- | ------ | ---------------------------------- |
| url | Object | audio文件夹的路径，注：图片文件按不要移动位置，音乐文件也放里面 |

> 示例

```html
<!DOCTYPE html>
<html lang="zh-cn">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>移动端音乐播放插件</title>
</head>

<body>
  <audio src="audio/music.mp3" autoplay="true" loop="loop" preload="auto" id="audio"></audio>
  <script>
    new AudioRun({
      url: 'localhost:8080/audio'
    })
  </script>
</body>

</html>
```



// 歌词解析


/**
[00:00.000] 作曲 : 许嵩\n[00:01.000] 作词 : 许嵩\n[00:22.240]天空好想下雨\n[00:24.380]我好想住你隔壁\n[00:26.810]傻站在你家楼下\n[00:29.500]抬起头数乌云\n[00:31.160]如果场景里出现一架钢琴\n[00:33.640]我会唱歌给你听\n[00:35.900]哪怕好多盆水往下淋\n[00:41.060]夏天快要过去}
 */

/**
[00:00.000] 作曲 : 许嵩
[00:01.000] 作词 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去
 */

export function parseLyric(lyricString) {
    const lyrics = [];
    const lineArr = lyricString.split('\n');
    const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    for(let lineString of lineArr) {
         // 注意在按换行符分割字符串时，在最后一个换行符分割得到了最后一个空数组，因此解析时需要判断是否为空
         if(lineString) {
            // 时间
            const result = parseExp.exec(lineString);
            if(!result) continue;
            // 将时间转换为ms
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            // 注意拿到的是字符串，因此result[3]需要乘1转换成数字
            const time3 = result[3].length === 3? result[3]*1: result[3]*10;
            const time = time1 + time2 + time3;
            const content = lineString.replace(parseExp, "").trim();
            const lineObj = {time, content};
            lyrics.push(lineObj);
         }
        
    }  
    return lyrics;

}
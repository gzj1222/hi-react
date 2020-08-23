function checkoutFillIsRight(studentAnswer: string, answerContent: string): number {
    let isRight: number = 0;
    answerContent = answerContent.replace(/^\s+/, "").replace(/\s+$/, "");   //去除首与尾的空格
    answerContent = answerContent.replace(/\s{2,}/g, " ");  //数据中间的的超过两个空格的数据替换成1个空格
    if ((!(/\^/.test(answerContent)))) {
        if (studentAnswer === answerContent) {
            isRight = 1;
            return isRight;
        }
    }
    if (/\^/.test(answerContent)) {
        let expStrArr:string[] = answerContent.split("^").map(v=>"(^"+v+"$)");
        let expStr:string = expStrArr.join("|");
        //console.log(expStr);
        let exp = new RegExp(expStr);  //判断^字符的或逻辑
        if (exp.test(studentAnswer)) {
            isRight = 1;
            return isRight;
        }
    }
    return isRight;
}
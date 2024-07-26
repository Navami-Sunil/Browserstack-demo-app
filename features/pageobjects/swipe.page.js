class swipe{
    async swipegesture(){
        async function swipe(startX, startY, endX, endY) {
            await browser.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: endX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
        }
        
        async function tap(x, y) {
            await browser.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x, y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            await browser.releaseActions();
        }
    
    
        
        await swipe(698, 1014, 381, 1335);
        await swipe(381, 1335, 707, 1322);
        await swipe(707, 1322, 381, 1675);
        await swipe(381, 1675, 468, 1423);
        await swipe(468, 1423, 271, 1418);
        await swipe(275, 1418, 257, 1202);
        await swipe(262, 1202, 468, 1037);
        await swipe(454, 1051, 569, 1051);
        await swipe(702, 1028, 624, 1230);
        await swipe(624, 1230, 821, 1234);
        await swipe(821, 1234, 821, 1478);
        await swipe(821, 1478, 670, 1602);
        await swipe(670, 1602, 551, 1615);
    }
}
module.exports=new swipe();
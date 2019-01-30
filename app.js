
const Jimp = require('jimp');
 
const dims = new Map([
    ['facebookProfile', [180,180]],
    ['facebookCover', [400,150]],
    ['twitterProfile', [400,400]],
    ['twitterHeader',[1500,500]],
    ['instagramProfile', [110,110]],
    ['instagramPost', [1,1]],
    ['linkedinProfile', [200,200]],
    ['linkedinCover', [ 1584,396]],
    ['pinterestProfile',[165,165]],
    ['youtubeProfile', [1,1]],
    ['youtubeCover', [1546,423]],
    ['tumblrProfile',[128,128]],
    ]);



const socialResize = async function resize(imgPath, type, newPath = imgPath,background =0x000000 ){
    const promise = new Promise((resolve,reject)=> {
        Jimp.read(imgPath, (err, img) => {
            if (!err && img !== undefined && dims.get(type)!== undefined ) 
            {
            const w = dims.get(type)[0];
            const h = dims.get(type)[1];
            if(w === h)
            {
                if(img.bitmap.width<w && img.bitmap.height<h)
                {
                img
                .contain( (w,h));
                }
                else {
                    img
                    .contain( Math.max(w,h),Math.max(w,h));
                }
        
            }
            else {
                img
                .contain( w,h).background( background);
            }     
            img.background( background)
            .quality(100)
            .write(newPath,()=>{
                resolve(newPath);
            });
            }
            else {
                reject("Something went wrong");
            }
        });
    });
const newImgPath = await promise;
return newImgPath;
}

module.exports = socialResize;

# node-social-image-resizer

Resize images to fit multiple social platforms
Built on top of [jimp](https://www.npmjs.com/package/jimp)


## Getting started


To use it in `node.js` first install by:

```bash
npm install node-social-image-resizer --save
```

Then import it:

```js
const socialResize = require('node-social-image-resizer');
```




# Usage
## Example

```js
socialResize('./path/to/original.jpg','facebookProfile','./path/to/resized.jpg',0xFFFFFFFF)
.then(
    res => console.log(res) 
    //./path/to/resized.jpg
)
.catch( err => console.log(err));
```
## parameters
```bash
socialResize(srcImgPath ,  socialPlatformType,  destImgPath = srcImgPath  ,  backgroundColor= 0x00000000)
```
* **`srcImgPath` **: The path of the original image
* **`socialPlatformType`** The platform type, types available:
		'facebookProfile'
		'facebookCover'
		'twitterProfile'
		'twitterHeader'
		'instagramProfile'
		'instagramPost'
		'linkedinProfile'
		'linkedinCover'
		'pinterestProfile'
		'youtubeProfile'
		'youtubeCover'
		'tumblrProfile'

* **`destImgPath`** [String]: Destination image path (**default** = source image path)
* **`backgroundColor` **[rgba hex]: (**default** is 0x00000000)





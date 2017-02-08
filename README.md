# ngUpCrop
Image upload tool  
This plugin is combination of [angular material](material.angularjs.org/latest/getting-started), [ng-file-upload](https://github.com/danialfarid/ng-file-upload) and [ngImgCrop](https://github.com/alexk111/ngImgCrop)

![Image of angular material image upload and crop]
(https://res.cloudinary.com/dz0dtvouo/image/upload/v1486403108/ngUpCrop_txpxrt.png)

check [demo](https://yasharma.github.io/ngUpCrop/)

```bash
$ git clone https://github.com/yasharma/ngUpCrop.git
$ cd ngUpCrop
```

You can use any server either php, python or node, In linux their is python server by default

```bash
$ python -m SimpleHTTPServer 8081
```

```javascript
Upload.upload({
    url: 'path-your-api-url',
    data:  {
		logo: Upload.dataUrltoBlob(dataUrl, file.name)
	},
});
```
Replace `url: 'path-your-api-url'` with you actual url.

visit in browser [http://localhost:8081](http://localhost:8081)
// AJAX AORS

console.log("kang.com")

const request = new XMLHttpRequest()
request.open("GET", "http://qq.com:8888/friends.json")
request.onreadystatechange = () => {
	if (request.readyState === 4 && request.status === 200) {
		console.log(request.response)
	}
}
request.send()

// 适配IE的  封装JSONP

// function jsonp(url) {
// 	return new Promise((resolve, reject) => {
// 		const random = "kangJSONPCallbackName" + Math.random()
// 		window[random] = (data) => {
// 			console.log(data)
// 		}
// 		// 创建script标签并引用链接
// 		const script = document.createElement("script")
// 		script.src = `${url}?callback=${random}`
// 		// 加载完后就删除标签
// 		script.onload = () => {
// 			script.remove()
// 		}
// 		script.onerror = () => {
// 			reject()
// 		}
// 		// 将script插入body里面
// 		document.body.appendChild(script)
// 	})
// }
// jsonp("http://qq.com:8888/friends.js").then((data) => {
// 	console.log(data)
// })

let otp = document.getElementById("output")

function getResult() {
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
			resolve()
		},1000)
	})
	.then(res=>{
		otp.textContent = "Hello, world!"
	})
}

getResult()
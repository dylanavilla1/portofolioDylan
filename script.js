const resume = document.querySelector('.resume')
const showCv = document.querySelector('.cv')
const close  = document.querySelector('.close')
const downloadCv = document.querySelector('.download')
resume.addEventListener('click', function(){
	document.body.style.backgroundColor = '#FAFAFA;'
	document.body.style.transition = '5s ease-in-out'

	showCv.style.display = 'flex'
	close.style.display = 'flex'
	downloadCv.style.display = 'flex'
	close.onclick = function() {
		showCv.style.display = 'none'
		close.style.display = 'none'
		downloadCv.style.display = 'none' 
	}

})
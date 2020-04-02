var classLists = ['.about', '.work', '.education', '.skills', '.hobbies'];

var idList =['#about-me-text', '#work-experience-text', '#education-text', '#skills-text', '#hobbies-text'];

var removeFromList = function(className, idName){
	// add active to className
	document.querySelector('' + className + '').classList.add("active");

	// make idName's text visible
	document.querySelector('' + idName + '').style.display = 'block'

	// remove className and idName from respective lists
	var index = classLists.indexOf(className);
	if (index > -1){
		classLists.splice(index, 1);
	};

	var indexx = idList.indexOf(idName);
	if (indexx > -1){
		idList.splice(index, 1);
	};

	// remove active from remaining classes
	removeClass();

	// hide display of remaining classes
	hideDisplay();

	// add className and idName back to their respective lists
	classLists.push(className);

	idList.push(idName);
}

var removeClass = function(){
	for (var i = 0; i<classLists.length; i++) {
		document.querySelector('' + classLists[i] + '').classList.remove("active");
	}
};

var hideDisplay = function(){
	for (var i = 0; i<idList.length; i++) {
		document.querySelector('' + idList[i] + '').style.display = 'none'
	}
};

// initialize
removeFromList('.about', '#about-me-text');

document.querySelector("#about-me-button").addEventListener('click', function(){removeFromList('.about', '#about-me-text');});

document.querySelector("#work-experience-button").addEventListener('click', function(){removeFromList('.work', '#work-experience-text');});

document.querySelector("#education-button").addEventListener('click', function(){removeFromList('.education', '#education-text');});

document.querySelector("#skills-button").addEventListener('click', function(){removeFromList('.skills', '#skills-text');});

document.querySelector("#hobbies-button").addEventListener('click', function(){removeFromList('.hobbies', '#hobbies-text');});

var snake_neat = {
	name: "Snake-Neat",
	image_link: "snake-neat-gif.gif",
	out_link: "snake_neat_pdf.pdf",
	description: "Implemented a neuroevolution algorithm (NEAT) to generatively create neural networks to play Snake."
};

var mura = {
	name: "MURA",
	image_link: "mura-img.PNG",
	out_link: "https://zmo3.github.io",
	description: "Keras and Tensorflow programming for detection of abnormal studies in Stanford's MURA dataset."
};

var projects = [snake_neat, mura];
var slide_index = 0;

function createProjectCard(card, slideSelector){
	const parent = document.querySelector(slideSelector);

	if (parent){
		console.log('making card');
		let project = document.createElement('a');
		project.href = card.out_link;

		let html = `
		<div id="proj1" class="project">
            <div class="project-info">
                <p class="project-name fade">${card.name}</p>
                <img class="showcase fade" src="${card.image_link}">
                <p class="project-description fade">
                    ${card.description}
                </p>
            </div>
        </div>
		`;
		project.innerHTML = html;
		parent.append(project);
	}

}

function createCircles(projects, domSelector){
	let parent = document.querySelector(domSelector);
	if (parent){
		for(let i=0; i < projects.length; ++i){
			html = `
			<span class="dot" onclick="currentSlide(${i})"></span>
			`;
			parent.innerHTML += html;
		}
	}
}

function createProjects(projects, slideSelector){
	for(let project of projects){
		createProjectCard(project, slideSelector);
	}

	const parent = document.querySelector(slideSelector);

	if (parent){
		let arrows = document.createElement('div');
		arrows.className = "slide-arrows";

		let larrow = document.createElement('a');
		larrow.className = "prev";
		larrow.innerHTML = "&#10094";
		larrow.onclick = (function(num){
			return function(){
				plusSlides(num);
			}
		})(-1);

		let rarrow = document.createElement('a');
		rarrow.innerHTML = '&#10095';
		rarrow.className = "next";
		rarrow.onclick = (function(num){
			return function(){
				plusSlides(num);
			}
		})(1);

		arrows.append(larrow);
		arrows.append(rarrow);

		parent.append(arrows);

		createCircles(projects, "#dots");
		showSlides(slide_index);
	}
}

function plusSlides(n){
	let slideIndex = ((slide_index) + projects.length + n) % projects.length;
	showSlides(slide_index=slideIndex);
}

function currentSlide(n){
	showSlides(slide_index=n);
}

function showSlides(index){
	var i;
	var slides = document.getElementsByClassName("project");
	var dots = document.getElementsByClassName("dot");

	if (slides){
		for(i=0; i < projects.length; ++i){
			slides[i].style.display = "none";
		}
	}
	if (dots){
		for(i=0; i < dots.length; ++i){
			dots[i].className = dots[i].className.replace(" active", "");
		}
	}
	slides[index].style.display = "block";
	dots[index].className += " active";
}



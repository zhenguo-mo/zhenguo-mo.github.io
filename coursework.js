var ee_courses = 
["Fundamentals of Circuits", 
"Fundamentals of Signals and Systems",
"Fundamentals of Solid State Engineering",
"Fundamentals of Electromagnetics and Photonics",
"Fundamentals of Electronics",
"Digital Signal Processing",
"Introduction to Feedback Systems",
"Machine Learning: Foundations, Applications, and Algorithms",
"Fiber-Optic Communications",
"Introduction to Mechatronics",
"Introduction to Medical Imaging"
];

var ee_links = 
["https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/221.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/222.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/223.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/224.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/225.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/359.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/360.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/375-475.html",
 "https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/383.html",
 "https://www.mccormick.northwestern.edu/mechanical/academics/courses/descriptions/333-introduction-to-mechatronics.html",
 "https://www.mccormick.northwestern.edu/biomedical/academics/courses/descriptions/325.html"
 ];
var ee_nums = 
["EE 221", 
"EE 222",
"EE 223",
"EE 224",
"EE 225",
"EE 359",
"EE 360",
"EE 375",
"EE 383",
"ME 333",
"BME 325"
];

var cs_courses = 
["Mathematical Foundations of Computer Science", 
"Intro to Computer Systems",
"Data Structures and Data Management",
"Human Computer Interaction",
"Introduction to Computer Networking",
"Design & Analysis of Algorithms",
"Operating Systems",
"Machine Learning",
"Rapid Prototyping for Software Innovation",
"Embedded Systems"
];

var cs_links = 
["https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/212.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/213-20.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/214.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/330.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/336.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/340.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/343.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/349.html",
"https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/497.html",
"https://www.mccormick.northwestern.edu/electrical-computer/academics/courses/descriptions/366-466.html"
];

var cs_nums = 
["CS 212",
"CS 213",
"CS 214",
"CS 330",
"CS 336",
"CS 340",
"CS 343",
"CS 349",
"CS 496",
"CE 466"];

function showTable(num){
	table = document.getElementById("table");
	html = `
	<tr>
		<th>Course Number</th>
		<th>Course Name</th>
	</tr>
	`;
	table.innerHTML = html;
	if(num){
		for(let i=0;i<cs_courses.length;++i){
			html = `
			<tr>
				<td id="num">
					<a href="${cs_links[i]}">
						${cs_nums[i]}
					</a>
				</td>
				<td>
					<a href="${cs_links[i]}">
						${cs_courses[i]}
					</a>
				</td>
			</tr>
			`
			table.innerHTML += html;
		}
	}
	else{
		for(let i=0;i<ee_courses.length;++i){
			html=`
			<tr>
				<td id="num">
					<a href="${ee_links[i]}">
						${ee_nums[i]}
					</a>
				</td>
				<td>
					<a href="${ee_links[i]}">
						${ee_courses[i]}
					</a>
				</td>
			</tr>
			`
			table.innerHTML += html;
		}
	}
}
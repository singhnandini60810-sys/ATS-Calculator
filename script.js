pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
async function readPDF(file){


const pdfData =
await file.arrayBuffer();


const pdf =
await pdfjsLib.getDocument({
data:pdfData
}).promise;


let text="";


for(
let i=1;
i<=pdf.numPages;
i++
){

let page =
await pdf.getPage(i);


let content =
await page.getTextContent();


content.items.forEach(item=>{

text += item.str + " ";

});

}


return text.toLowerCase();

}



async function analyze(){


let file =
document.getElementById(
"resumeFile"
).files[0];


let job =
document.getElementById(
"job"
).value.toLowerCase();



if(!file || !job){

alert(
"Upload PDF and add job description"
);

return;

}



let resume =
await readPDF(file);



let skills=[

"python",
"java",
"javascript",
"react",
"node",
"express",
"mongodb",
"sql",
"html",
"css",
"git",
"docker",
"aws",
"machine learning",
"c++",
"typescript"

];



let matched=[];
let missing=[];



skills.forEach(skill=>{


if(job.includes(skill)){


if(resume.includes(skill))

matched.push(skill);


else

missing.push(skill);


}


});



let total =
matched.length + missing.length;



let score =
total ?
Math.round(
matched.length/total*100
)
:0;



document.getElementById(
"result"
).innerHTML=`

<h2>
ATS Score: ${score}%
</h2>


<h3>✅ Found Skills</h3>

<p>
${matched.join(", ") || "No matches"}
</p>



<h3>❌ Missing Skills</h3>

<p>
${missing.join(", ") || "None"}
</p>



<h3>💡 Suggestions</h3>

<p>

${
score < 50 ?

"Your resume needs more keywords related to this job."

:

score < 80 ?

"Good match. Add missing skills."

:

"Excellent ATS compatibility."

}

</p>

`;

}

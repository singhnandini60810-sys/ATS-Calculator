function calculateATS(){


let resume =
document.getElementById("resume")
.value.toLowerCase();


let job =
document.getElementById("job")
.value.toLowerCase();



if(resume=="" || job==""){

alert("Please enter both fields");
return;

}



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
"machine learning",
"git",
"docker",
"aws",
"c++"

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
total===0 ? 0 :
Math.round((matched.length/total)*100);



document.getElementById("result").innerHTML=`

<h2>ATS Score: ${score}%</h2>

<h3>✅ Matched Skills</h3>

<p>${matched.join(", ") || "None"}</p>


<h3>❌ Missing Skills</h3>

<p>${missing.join(", ") || "None"}</p>


<h3>💡 Suggestions</h3>

<p>
${score < 60 ?
"Add missing technical skills and improve projects section":
"Good resume match. Keep improving keywords."
}
</p>

`;

}

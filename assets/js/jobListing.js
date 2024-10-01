const urlParams = new URLSearchParams(window.location.search);
const jobCategory = urlParams.get("jobs");

if (jobCategory == "all") {
    var jobs = jobApplications;
} else {
   jobs = jobApplications.filter((job) => job.cat === jobCategory);
}

const targetDiv = document.getElementById("joblist");
document.getElementById("jobsList").innerHTML = jobs.length + " Jobs found";

jobs.forEach((job) => {
  const jobHTML = `
    <div class="single-job-items mb-30">
       <div class="job-items">
           <div class="company-img">
               <a href="job_details.html?job=${job.id}"><img src="${job.img}" alt="${
    job.company
  }" height="70" width="70"></a>
           </div>
           <div class="job-tittle job-tittle2">
               <a href="job_details.html?job=${job.id}">
                   <h4>${job.position}</h4>
               </a>
               <ul>
                   <li>${job.company}</li>
                   <li><i class="fas fa-map-marker-alt"></i>
                   ${ job.location ? job.location : ""}
                     </li>
                   <li>${job.salary}</li>
               </ul>
           </div>
       </div>
       <div class="items-link items-link2 f-right">
           <a href="#">${job.job_status}</a>
           <span>${job.job_list ? job.job_list : ""}</span>
       </div>
   </div>`;

  targetDiv.innerHTML += jobHTML;
});

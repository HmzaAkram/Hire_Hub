
const fullTimeJobs = jobApplications.filter(job => job.job_status === 'fulltime');
console.log(fullTimeJobs);
const targetDiv = document.getElementById('joblist');

fullTimeJobs.forEach(job => {
    const jobHTML = `
    <!-- single-job-content -->
    <div class="single-job-items mb-30">
       <div class="job-items">
           <div class="company-img">
               <a href="#"><img src="${job.img}" alt=""></a>
           </div>
           <div class="job-tittle job-tittle2">
               <a href="#">
                   <h4>${job.position}</h4>
               </a>
               <ul>
                   <li>${job.company}</li>
                   <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                   <li>${job.salary}</li>
               </ul>
           </div>
       </div>
       <div class="items-link items-link2 f-right">
           <a href="job_details.html">Full Time</a>
           <span>7 hours ago</span>
       </div>
   </div>
   <!-- single-job-content -->
    `;

    targetDiv.innerHTML += jobHTML;
});
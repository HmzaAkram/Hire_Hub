const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("job");

const jobDet = jobApplications.find((jobss) => jobss.id == jobId);
console.log(jobId)
const targetDiv = document.getElementById("jobDetail");
document.getElementById("jobTitle").innerHTML = jobDet.position ;

// job.forEach((j) => {
  const jobHTML = `  <div class="row justify-content-between">
                    <!-- Left Content -->
                    <div class="col-xl-7 col-lg-8">
                        <!-- job single -->
                        <div class="single-job-items mb-50">
                            <div class="job-items">
                                <div class="company-img company-img-details">
                                    <a href="#"><img src="${jobDet.img}" alt="${jobDet.company}" height="100" width="100"></a>
                                </div>
                                <div class="job-tittle">
                                    <a href="#">
                                        <h4>${jobDet.position}</h4>
                                    </a>
                                    <ul>
                                        <li>${jobDet.company}</li>
                                        <li><i class="fas fa-map-marker-alt"></i>${
                                            jobDet.location ? jobDet.location : ""
                                          }</li>
                                        <li>${jobDet.salary}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                          <!-- job single End -->
                       
                        <div class="job-post-details">
                            <div class="post-details1 mb-50">
                                <!-- Small Section Tittle -->
                                <div class="small-section-tittle">
                                    <h4>Job Description</h4>
                                </div>
                                <p>${jobDet.description}</p>
                            </div>
                            <div class="post-details2  mb-50">
                                 <!-- Small Section Tittle -->
                                <div class="small-section-tittle">
                                    <h4>Required Knowledge, Skills, and Abilities</h4>
                                </div>
                               <ul>
                             ${
                                jobDet.requirements.map(req => `<li>${req}.</li>`).join('')
                             }
                               </ul>
                            </div>
                            <div class="post-details2  mb-50">
                                 <!-- Small Section Tittle -->
                                <div class="small-section-tittle">
                                    <h4>Education / Experience</h4>
                                </div>
                               <ul>
                                   <li>${jobDet.experience}</li>
                               </ul>
                            </div>
                        </div>

                    </div>
                    <!-- Right Content -->
                    <div class="col-xl-4 col-lg-4">
                        <div class="post-details3  mb-50">
                            <!-- Small Section Tittle -->
                           <div class="small-section-tittle">
                               <h4>Job Overview</h4>
                           </div>
                          <ul>
                              <li>Posted date : <span>${jobDet.job_list}</span></li>
                              <li>Location : <span>${jobDet.location}</span></li>
                              <li>Vacancy : <span>01</span></li>
                              <li>Job nature : <span>${jobDet.job_status}</span></li>
                              <li>Salary :  <span>${jobDet.salary}</span></li>
                          </ul>
                         <div class="apply-btn2">
                            <a href="${jobDet.applicationLink}" class="btn">Apply Now</a>
                         </div>
                       </div>
                        <div class="post-details4  mb-50">
                            <!-- Small Section Tittle -->
                           <div class="small-section-tittle">
                               <h4>Company Information</h4>
                           </div>
                              <span>${jobDet.company}</span>
                       </div>
                    </div>
                </div>`;

  targetDiv.innerHTML += jobHTML;
// });

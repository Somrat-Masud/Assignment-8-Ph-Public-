

const getStoredJobApplicaton = () => {
    const storedJobApplication = localStorage.getItem('job-Application')
    if( storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [];

}

const saveJobApplication = id => {
const storedJobApplication = getStoredJobApplicaton();
const exists = storedJobApplication.find(jobsId => jobsId === id);
if(!exists){
     storedJobApplication.push(id);
      localStorage.setItem('job-Application', JSON.stringify(storedJobApplication))
}
}
export {getStoredJobApplicaton, saveJobApplication}
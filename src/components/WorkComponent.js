import { Container } from "react-bootstrap";
import project from "../assets/web-programming 1.png";

const WorkComponent = () => {
    const jobDetails = {
        title:"My Project",
        description:"I make sure your website is performing its best by thoroughly reviewing it before making any changes"
    }

    const jobs = [jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails,jobDetails];

  return(
      <Container className="w-100 p-0 m-0" fluid>
        <div className="marginBig text-white fw-bold secondColor">
            <h1 className="fw-bold text-center pt-5">
                Work
            </h1>
            <div className="scrolls pt-4 pb-5 mt-5 ms-0 ps-4 ">
               {jobs.map((job)=>{
                return (
                <div className="w-25 d-inline-block grids ms-5">
                    <img src={project}/>
                    <h4  className='mt-3'>
                        {job.title}
                    </h4>
                    <h5 style={{whiteSpace:"normal"}} className='mt-3'>
                        {job.description}
                    </h5>
                </div>)
               })}
            </div>
        </div>
      </Container>
  );
};

export default WorkComponent;

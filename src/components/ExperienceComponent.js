import { Container } from "react-bootstrap";

const ExperienceComponent = () => {

    const jobDetails = {
        title:"Member of technical staff",
        company:"VMWARE",
        locationDate:"June 2021-Present Palo Alto CA",
        Team:"VMware Cloud on AWS - SRE Automation Platform"
    }
    const works = [jobDetails,jobDetails,jobDetails]

  return (
    <Container className="w-100 p-0 m-0" fluid>
      <div className="marginBig">
        <div className="h_00 textColor text-center mb-5">Experience</div>
        {works.map((work,index)=>{
            return (<div className="d-flex justify-content-center ">
            <div className="me-5">
              <div className={index===0 ? "circle active" : "circle"}></div>
              <div className={index!=works.length-1 ?"vertical": "vertical last"}></div>
            </div>
            <div className="workGrid basicColor br10 bigGrid">
              <div className="text-white m-3 p-3 mb-0 pb-2">
                <h2 className="fw-bold">{work.title}</h2>
              </div> 
              <div className=" text-white ms-3 ps-3 pb-2">
                <h4>
                  {work.company}
                </h4>
              </div>
              <div className=" text-white ms-3 ps-3 pb-2">
                <h4>
                  {work.locationDate}
                </h4>
              </div>
              <div className=" text-white ms-3 ps-3 pb-2">
                <h4>
                  {work.Team}
                </h4>
              </div>

            </div>
          </div>)
        })}
        
      </div>
    </Container>
  );
};

export default ExperienceComponent;

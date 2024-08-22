import { Container } from 'react-bootstrap';

const ExperienceComponent = () => {
    const jobDetails1 = {
        title: 'FrontEnd Developer',
        company: 'Conveos',
        locationDate: 'July 2021-September 2021 Milano Italy',
        Team: 'Conveos Internship 2021'
    };
    const jobDetails2 = {
        title: 'Computer Technician',
        company: 'NET Computer Center',
        locationDate: 'June 2015-August 2015 Chania,Crete Greece',
        Team: 'Diagnostic and Computer Technical Team'
    };
    //   const jobDetails3 = {
    //     title:"Member of technical staff",
    //     company:"VMWARE",
    //     locationDate:"June 2021-Present Palo Alto CA",
    //     Team:"VMware Cloud on AWS - SRE Automation Platform"
    // }
    const works = [jobDetails1, jobDetails2];

    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div className="marginBig mb-5">
                {works.map((work, index) => {
                    return (
                        <div className="d-flex justify-content-center ">
                            <div className="me-5">
                                <div
                                    className={
                                        index === 0 ? 'circle active' : 'circle'
                                    }
                                ></div>
                                <div
                                    className={
                                        index !== works.length - 1
                                            ? 'vertical'
                                            : 'vertical last'
                                    }
                                ></div>
                            </div>
                            <div className="workGrid basicColor br10 bigGrid shadowbox">
                                <div className="text-white m-3 p-3 mb-0 pb-2">
                                    <h2 className="fw-bold">{work.title}</h2>
                                </div>
                                <div className="ms-3 ps-3 pb-2">
                                    <h4
                                        style={{
                                            color: '#CCC9DC',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {work.company}
                                    </h4>
                                </div>
                                <div className=" text-white ms-3 ps-3 pb-2">
                                    <h5 style={{ opacity: '80%' }}>
                                        {work.locationDate}
                                    </h5>
                                </div>
                                <div className=" text-white ms-3 ps-3 pb-2">
                                    <h5 style={{ opacity: '80%' }}>
                                        {work.Team}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default ExperienceComponent;

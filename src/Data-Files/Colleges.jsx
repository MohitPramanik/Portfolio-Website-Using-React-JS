import Dspmu from "../Images/College Buildings/dspmu.jpg";
import Xavier from "../Images/College Buildings/xavier.jpg";
import RadhaGovind from "../Images/College Buildings/radhaGovind.jpg";

const colleges = [
    {
        id: 1,
        name: "Dr. Shyama Prasad Mukherjee University, Ranchi",
        course: "BSc. Computer Application",
        batch: "2021-24",
        marks: "8.54 GPA",
        image: Dspmu,
        altText: "Dspmu building",
    },
    {
        id: 2,
        name: "St. Xavier's College, Ranchi",
        course: "Isc. Maths",
        batch: "2019-21",
        marks: "80%",
        image: Xavier,
        altText: "St.Xavier Building",
    },
    {
        id: 3,
        name: "Radha Govind Senior Secondary High School, Ramgarh",
        course: "Class 10th",
        passingYear: "2019",
        marks: "90%",
        image: RadhaGovind,
        altText: "Radhagovind school building",
    },
];

export default colleges;

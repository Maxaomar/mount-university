import { TitleBox } from "../reusable/Boxes";

export function Enroll() {
    return(
        <section>
            <TitleBox title="ENROL TODAY" />
            <HealthSciences />
            <Schools />
            <QualityAssurance />
            <ContactUs />
        </section>
    )
}


export function HealthSciences() {
    return(
        <section>
            <h1>Health Sciences</h1>
        </section>
    )
}



export function Schools() {
    return(
        <section>
            <h1>Schools</h1>
        </section>
    )
}





export function QualityAssurance() {
    return(
        <section>
            <h1>Quality Assurance</h1>
        </section>
    )
}


export function ContactUs() {
    return(
        <section>
            <h1>CONTACT US</h1>
        </section>
    )
}
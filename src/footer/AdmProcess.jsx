
export function TitleBox() {
  return(
    <footer className="bg-orange-300">
          <div class="flex items-center space-x-4">
              <div class="flex-1 h-px bg-lineColor"></div>
              <div class="px-4 py-2 bg-blue-500 text-white rounded">Admission process</div>
              <div className="flex-1 h-1 bg-lineColor"></div>
          </div>
    </footer>
  )
}

export function AdmissionProcess() {
    return(
        <article>
            <TitleBox />
            <div>
                <i class="fa-brands fa-telegram"></i>
                <h1>Application</h1>
                <p>Submit your application form and supporting documents online or at our offices.</p>
            </div>

            <div>
                <i class="fa-regular fa-square-check"></i>
                <h1>Verification</h1>
                <p>Authentication of the submitted academic and identification documents.</p>
            </div>


            <div>
                <i class="fa-solid fa-camera"></i>
                <h1>Review</h1>
                <p>The application is compared with the chosen course entry requirements.</p>
            </div>

            <div>
                <i class="fa-regular fa-face-smile"></i>
                <h1>Reporting</h1>
                <p>communication to applicant on admission status .</p>
            </div>
        </article>
    )
}
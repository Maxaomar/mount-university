
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
        <article className="">
            <TitleBox />
        <div className="flex ml-20 mr-20">

            <div className="flex flex-col text-3xl">
                <div className="flex items-center gap-2">
                    <i className="fa-brands fa-telegram pt-2"></i>
                    <h1 className="text-2xl font-bold">Application</h1>
                </div>
                <p className="ml-7 text-sm">Submit your application form and supporting documents online or at our offices.</p>
            </div>

            <div className="flex flex-col text-3xl">
                <div className="flex items-center gap-2">
                    <i className="fa-regular fa-square-check pt-2"></i>
                    <h1 className="font-bold text-2xl">Verification</h1>
                </div>
                <p className="text-sm ml-7">Authentication of the submitted academic and identification documents.</p>
            </div>


            <div className="flex flex-col text-3xl">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-camera pt-2"></i>
                    <h1 className="font-bold text-2xl">Review</h1>
                </div>
                <p className="text-sm ml-7">The application is compared with the chosen course entry requirements.</p>
            </div>

            <div className="flex flex-col text-3xl">
                <div className="flex items-center gap-2">
                    <i className="fa-regular fa-face-smile pt-2"></i>
                    <h1 className="text-2xl font-bold">Reporting</h1>
                </div>
                <p className="ml-7 text-sm">communication to applicant on admission status .</p>
            </div>
         </div>
     </article>
    )
}
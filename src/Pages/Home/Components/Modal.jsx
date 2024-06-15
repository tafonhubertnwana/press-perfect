import React from 'react'

const Modal = () => {
  return (
    <div className='' >
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content home-body">
            <div className="modal-header">
              <h5 className="modal-title text-center">
                Request Callback
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className='text-center'>
                <p>We can call you in 30 seconds, just enter your number below</p>
              </div>
              <form>
                <div className="mb-3">
                
                  <input type="text" placeholder='Name *' className="form-control p-3" id="recipient-name" />
                </div>
                <div className="mb-3">
                <input type="text" placeholder='Phone *' className="form-control p-3" id="recipient-number" />

                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className='px-5 py-3 request-btn bg-white mt-2'>
                REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
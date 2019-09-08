import React from 'react';

const header = (props) => {
    return (
        <header className="">
          <nav className="navbar navbar-expand-lg navbar-dark primary-color mx-auto">
            <a className="navbar-brand" href="/">Open Sky Network</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
        </header>
    )
}

export default header;
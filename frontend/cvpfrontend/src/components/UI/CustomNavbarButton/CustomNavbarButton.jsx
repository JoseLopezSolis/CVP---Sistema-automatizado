import React from 'react'
import './CustomNavbarButton.scss'

export default function CustomNavbarButton() {
    return (
        <button
          className="custom-navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-icon"></span>
        </button>
      );
    
}

import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
     <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light ms-1'>
            <img
              src='https://www.animestudiotutor.com/images/numbers.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter Application
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar></>
  )
}

export default Header
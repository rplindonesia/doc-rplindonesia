import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.jpg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer ">
        <div className="content has-text-centered has-text-white-ter" style={{ background: '#333' }}>
          <div className="container has-text-white-ter" style={{ background: '#333', padding: '40px' }}>
            <h3 className="has-text-white-ter">Hubungi Kami</h3>
            <p>Jl.in aja dulu, Bandung 40253 - Indonesia
            <br/>
            Buka Setiap Hari | 24 Jam kecuali jika admin tidur
            <br/>
            Whatsapp : 0899-1559-636/Farel <br/> 0815-7252-7957/Mile .</p>
          </div>
          <div className="containerhas-text-white-ter" style={{ background: '#333',  padding: '10px' }}>
            <div className="columns">
              {/*<div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> 
                  </ul> 
                </section>
              </div>
              <div className="column is-4">
                <section>
                   <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul> 
                </section>
              </div> */}
              <div className="column is-12 social">
                <a title="facebook" href="https://facebook.com/rplidn">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/rplindonesia">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                
              </div>
              
            </div>
            <div className="column is-12 " style={{ borderTop: '1px solid #fff' }}>
                  Copyright @ 2018 RPL Indonesia
              </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer


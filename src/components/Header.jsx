import { graphql, useStaticQuery } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <div className="pt-6 pb-12 md:pt-12 top-0 z-50 bg-custom-stripes bg-fixed bg-gray-400">
      <div className="container flex justify-between items-center">
        <TransitionLink
          entry={{ delay: 1, length: .3 }}
          exit={{ length: .3 }}
          to="/"
        >
          <strong>{`DAVID GITUEN MARCUS` /** TODO: Replace with LOGO */}</strong>
          {/* <img alt="Logo" className="w-24 md:w-32" src="logo.svg" /> */}
        </TransitionLink>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          {site.data.menu.map((link, key) => (
            <TransitionLink
              entry={{ length: .3 }}
              exit={{ length: .3 }}
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-200 transition duration-150 ease-in-out"
              activeClassName="border-blue-600 text-gray-900 hover:border-blue-600"
              to={link.to}
            >
              {link.name}
            </TransitionLink>
          ))}
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </div>
  )
}

export default Header

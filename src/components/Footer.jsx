import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            instagram
          }
        }
      }
    }
  `)

  return (
    <div className="py-12 bg-gray-700">
      <div className="container md:flex md:items-center md:justify-between">
        <ul className="flex justify-center md:order-2">
          <FooterLink
            href={links.instagram}
            icon={FaInstagram}
            label="Instagram"
          />
        </ul>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm md:text-base text-gray-500">
            &copy; 2020 David Gituen Marcus. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer

import PropTypes from "prop-types"
import React from "react"
import "typeface-inter"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const variants = {
  entering: { opacity: 0, x: -5 },
  entered: { opacity: 1, x: 0 },
  exiting: { opacity: 0, x: 5 }
}

const Layout = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return (typeof window !== "undefined" &&
          <motion.div
            initial={"entering"}
            animate={transitionStatus}
            variants={variants}
            transition={{ duration: .5 }}
          >
            <Header />
            {children}
            <Footer />
          </motion.div>)
      }}
    </TransitionState>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout

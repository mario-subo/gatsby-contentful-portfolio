import classNames from "classnames"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: .2 }
  },
}

const itemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const Cards = ({ items, hideLastItemOnMobile = false }) => {
  return (
    <div
      className="container"
    >
      <motion.div
        className="flex flex-wrap -mx-3 lg:-mx-6"
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map(item => (
          <motion.div
            key={item.id}
            variants={itemVariant}
            className={classNames("w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
          >
            <Card {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards

import { delay } from "framer-motion"

export const fadeDown = {
  hidden: { opacity: 0, y: -40},
  show: { opacity: 1, y: 0},
}

export const fadeRight = {
  hidden: { opacity: 0, x: '-100%'},
  show: { opacity: 1, x: 0,
    transition: {
      duration: 2,
      ease: 'easeOut'
    }
  },
}

export const fadeLeft ={
  hidden: { opacity: 0, x: '100%'},
  show: { opacity: 1, x: 0,
    transition:{
      duration: 2,
      ease: 'easeOut'
    }
  }
}

export const button = {

}
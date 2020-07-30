import stylisPxToRem from 'stylis-pxtorem'

// https://github.com/AWare/stylis-pxtorem#options
const pxToRem = stylisPxToRem({
  propList: ['*'],
})
Object.defineProperty(pxToRem, 'name', { value: 'pxToRem' })

export default [pxToRem]

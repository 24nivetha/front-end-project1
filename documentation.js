

import $ from 
'https://unpkg.com/blingblingjs@2.1.1/src/index.js'

const [main] = $('body')

$('select').on('change', e => {
  const prop = $(e.target).attr('data-for')
  main.style[prop] = e.target.value
})
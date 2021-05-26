import 'jquery'
import Vue from "vue"
import lodash from 'lodash'
import 'react'
import 'angular'
import 'd3'
import 'highcharts'
import 'highcharts'
import AL_IMAGE from './images/al.png'

export default function createApp() {
    // vendor()
    const el = document.createElement("div")
    el.setAttribute("id", "app")
    document.body.appendChild(el)
    new Vue({
        el: "#app",
        render: h => h("h1", "Hello world")
    })
    createImage()
}
document.addEventListener('DOMContentLoaded', () => {
    createApp()
})


function createImage() {
    const el = document.createElement("img")
    el.setAttribute("src", AL_IMAGE)
    el.setAttribute("width", '50%')
    el.setAttribute("height", '50%')
    document.body.appendChild(el)
}
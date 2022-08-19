//@ts-nocheck
import React from 'react'
import Navbar from "../Navbar"
import { useState } from 'react';

export default function FormShow() {
  const [input, setInput] = useState({
    nickName: '',
    eventName:  '',
    description: '',
    imagesEvent: [],
    duration: 0,
    isActive: true,
    priceTime: 0,
    priceDay:0,
    categories: ''
  })

  const handleChange = ()=>{

  
  }
  const handleSubmit = ()=>{
    
  }

  return (
    <div> 
      <Navbar />
      <h1>Formulario registro</h1>
      
      <div className="max-w-2xl mx-auto bg-white p-16">
            
            <form className="container" onSubmit={(e)=> handleSubmit(e)} >
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label 
                            htmlFor="nickName" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nombre artistico</label>
                        <input 
                        type="text" 
                        id="nickName" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Angie" 
                        name="nickName"
                        value={input.nickName}
                        onChange={handleChange}                       
                        required />
                    </div>
                    <div>
                        <label 
                        htmlFor="eventName" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nombre del show</label>
                        <input 
                        type="text" 
                        id="eventName" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Perdomo" 
                        name="eventName"
                                value={input.eventName}
                                onChange={handleChange}
                        required />
                    </div>
                    <div>
                        <label 
                        htmlFor="imagesEvent" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">imagenes show</label>
                        <input 
                        type="text" 
                        id="imagesEvent" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="imagenes show"
                        name="imagesEvent"
                        value={input.imagesEvent}
                        onChange={handleChange} 
                        required />
                    </div>
                    <div>
                        <label 
                        htmlFor="duration" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">tiempo presentacIon</label>
                        <input 
                        type="text" 
                        id="duration" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Colombia"
                                name="duration"
                                value={input.duration}
                        onChange={handleChange} 
                        required />
                    </div>
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">precIo por presentacion</label>
                    <input 
                    type="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="angie.perdomo@company.com" 
                    name="email"
                    value={input.priceTime}
                    onChange={handleChange}
                    required />
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="priceDay" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">precIo por dia</label>
                    <input 
                    type="number" 
                    id="priceDay" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="precio por dia"
                    name="priceDay"
                    value={input.priceDay}
                    onChange={handleChange} 
                    required />
                </div>
                <label 
                    htmlFor="priceDay" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">categoria del show</label>
                 <select 
                id="categories"      
                name="categories"  
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">seleccione categorIas
            <option value="ARTIST">canto</option>
            <option value="CONTRACTOR">baile</option>
            </select>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input 
                        id="remember" 
                        type="checkbox" 
                        value="" 
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Estoy de acuerdo con los  <a href="#" className="text-red-600 hover:underline dark:text-red-500">terminos y condiciones</a>.</label>
                </div>
                <div className="mb-6 text-center">
                    <button
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Registrar show
                    </button>
                </div>
                {/* <Link to='/login'>
                    <div className="text-center">
                        <p className="inline-block text-sm text-red-500 font-semibold align-baseline hover:text-blue-800">
                            ¿Ya tienes una cuenta? Ingresa!
                        </p>
                    </div>
                </Link> */}
            </form>
        </div>







      
      </div>
  )
}

import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from 'radix-ui'
import { Input } from '../ui/input'

const CompanySetup = () => {
  const [ input , setInput  ] = useState({
    name:"",
    description:"",
    website:"",
    location:"",
    file:""
  });

  const changeEventHandler = (e) =>{
    setInput({...input, [e.target.name]: e.target.value});
  }
  return (
    <div>
      <Navbar />
      <div className='max-w-xl mx-auto my-10'>
        <form action="">
            <div className='flex items-center'>
                <Button variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                <ArrowLeft />
                <span>Back</span> 
            </Button>
            <h1 className='font-bold text-xl'>Company Setup</h1>
            </div>
            <Label>Company Name</Label>
            <Input 
            type = "text"
            name = "name"
            value = {input.name}
            onChange ={changeEventHandler}l
            />
        </form>
            </div>
            

      </div>
  )
}

export default CompanySetup

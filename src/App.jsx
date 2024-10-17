import { useState } from 'react'
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button, InputLabel, Select, MenuItem, Stack } from '@mui/material'
import Img from './assets/sad.png'
import './App.css'
import { blue } from '@mui/material/colors'
import { useForm } from 'react-hook-form'

function App() {
  const [course, setCourse] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [userInfo, setUserInfo] = useState()

  const handleChange = (event) => {
    setCourse(event.target.value);
  };


  const onSubmit = (data) => {
    setUserInfo(data)
    alert(`${data.sName} Registered Successfully. Your Registred Mail Id is : ${data.sEmail}`)
    resetForm()
  }

  const resetForm = () => {
    reset()
    setCourse('')
  }


  return (
    <>
      <div className='w-full h-svh flex justify-evenly items-center'>
        <div className='w-full p-5 h-full flex justify-center items-center border-2 border-black flex-col bg-blue-950'>
          <h1 className='text-white text-3xl font-bold'>Registration Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='w-full mt-6 text-white text-xl'>
              <TextField
                id="sName"
                label="Name"
                variant="outlined"
                style={{ width: "350px" }}
                InputLabelProps={{
                  sx: {
                    color: 'white',
                  },
                }}
                InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: blue[400],
                    },
                  },
                }}
                {...register('sName', { required: 'Name is required' })}
              />
              {errors.sName && <p className='text-red-500'>{errors.sName?.message}</p>}
            </div>

            <div className='w-full mt-6 text-white text-xl'>
              <TextField
                id="sAddress"
                label="Address"
                variant="outlined"
                style={{ width: "350px" }}
                InputLabelProps={{
                  sx: {
                    color: 'white',
                  },
                }}
                InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: blue[400],
                    },
                  },

                }}
                {...register('sAddress', {
                  required: 'Address is require',
                })}
              />
              {errors.sAddress && <p className='text-red-500'>{errors.sAddress?.message}</p>}
            </div>

            <div className='w-full mt-6 text-white text-xl'>
              <TextField
                type='email'
                id="sEmail"
                label="Email"
                variant="outlined"
                style={{ width: "350px" }}
                InputLabelProps={{
                  sx: {
                    color: 'white',
                  },
                }}
                InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: blue[400],
                    },
                  },

                }}
                {...register('sEmail', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email address'
                  }
                })}

              />
              {errors.sEmail && <p className='text-red-500'>{errors.sEmail?.message}</p>}
            </div>

            <div className='w-full mt-6 text-white text-xl'>
              <TextField
                type='text'
                id="sMobile"
                label="Mobile Number"
                variant="outlined"
                style={{ width: "350px" }}
                InputLabelProps={{
                  sx: {
                    color: 'white',
                  },
                }}
                InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: blue[400],
                    },
                  },

                }}
                {...register('sMobile', {
                  required: 'Mobile Number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Enter 10 digit mobile number'
                  }
                })}
              />
              {errors.sMobile && <p className='text-red-500'>{errors.sMobile?.message}</p>}
            </div>

            <div className='w-full mt-6 text-black text-xl'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ color: 'white' }}>Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio
                      sx={{
                        color: 'white',
                        '&.Mui-checked': {
                          color: 'white',
                        },
                      }}
                    />}
                    label="Female"
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        color: 'white',
                      },
                    }}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio
                      sx={{
                        color: 'white',
                        '&.Mui-checked': {
                          color: 'white',
                        },
                      }}
                    />}
                    label="Male"
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        color: 'white',
                      },
                    }}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio
                      sx={{
                        color: 'white',
                        '&.Mui-checked': {
                          color: 'white',
                        },
                      }}
                    />}
                    label="Other"
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        color: 'white',
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className='w-full mt-6 text-white text-xl'>
              <TextField
                type='date'
                id="dob"
                label="Date Of Birth"
                variant="outlined"
                style={{ width: "350px" }}
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    color: 'white',
                  },
                }}
                InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: blue[400],
                    },
                  },

                }}
                {...register('dob', {
                  required: 'Date of Birt is required',
                })}
              />
              {errors.dob && <p className='text-red-500'>{errors.dob?.message}</p>}
            </div>

            <div className="w-full mt-6 text-white text-xl">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  label="Course"
                  onChange={handleChange}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: blue[400] },
                  }}
                >
                  <MenuItem value={"Biology"}>Biology</MenuItem>
                  <MenuItem value={"Computer"}>Computer Science</MenuItem>
                  <MenuItem value={"Commerce"}>Commerce</MenuItem>
                  <MenuItem value={"Humanities"}>Humanities</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className='w-full mt-6 text-white text-xl flex justify-evenly items-center'>
              <Button type='submit' variant="contained">Submit</Button>
              <Button onClick={() => resetForm()} type='reset' variant="contained">Reset</Button>
            </div>
          </form>
        </div >
        <div className='w-full bg-black p-5 h-full md:flex justify-center items-center border-2 border-black hidden'>
          <img src={Img} alt="" />
        </div>
      </div >
    </>
  )
}

export default App
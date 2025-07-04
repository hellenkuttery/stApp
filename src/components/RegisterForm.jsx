import React from 'react'
import TextField from '@mui/material/TextField';
import { Button} from "@mui/material";

const RegisterForm = ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          } ) => {
  return (

          <form onSubmit={handleSubmit}>
              <TextField 
              fullWidth
              name="username"
              label="Username"
               onChange={handleChange}
               onBlur={handleBlur}
               variant="outlined"
               type="text"
               value={values.username}
               error={touched.username && Boolean(errors.username)}
               helperText={touched.username && errors.username}
               margin="normal"              
              />
              <TextField 
              fullWidth
              name="firstName"
              label="Firstname"
               onChange={handleChange}
               onBlur={handleBlur}
               variant="outlined"
               type="text"
               value={values.firstName}
               error={touched.firstName && Boolean(errors.firstName)}
               helperText={touched.firstName && errors.firstName}
               margin="normal"              
              />
              <TextField 
              fullWidth
              name="lastName"
              label="Lastname"
               onChange={handleChange}
               onBlur={handleBlur}
               variant="outlined"
               type="text"
               value={values.lastName}
               error={touched.lastName && Boolean(errors.lastName)}
               helperText={touched.lastName && errors.lastName}
               margin="normal"              
              />

       <TextField 
              fullWidth
              name="email"
              label="Email"
               onChange={handleChange}
               onBlur={handleBlur}
               variant="outlined"
               type="email"
               value={values.email}
               error={touched.email && Boolean(errors.email)}
               helperText={touched.email && errors.email}
               margin="normal"              
              />


              <TextField 
              fullWidth
              name="password"
              label="Password"
               onChange={handleChange}
               onBlur={handleBlur}
               variant="outlined"
               type="password"
               value={values.password}
               error={touched.password && Boolean(errors.password)}
               helperText={touched.password && errors.password}
               margin="normal"              
              />

              <Button type="submit" fullWidth variant="contained" sx={{mt:2}}  >Register</Button>
          </form>
          )}


export default RegisterForm
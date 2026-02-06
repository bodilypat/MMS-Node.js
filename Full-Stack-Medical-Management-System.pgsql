Full-Stack-Medical-Management-System(MMS)
│
backend/Node.js                                     # FastAPI Backend (Python)
├── src/  
│   ├── app.js 
│   ├── server.js                           		# Server start
│   ├── config/                                     
│   │   ├──                  
│   │   ├── db.js                                
│   │   ├──                 
│   │   └── 
│   ├── controllers/                                     
│   │   ├── patientController.js         
│   │   ├── doctorController.js                           
│   │   ├── appointmentController.js                        
│   │   ├── billingController.js
│   │   └── authController.js                
│   ├── services/                                     
│   │   ├── patientService.js         
│   │   ├── doctorServie.js                           
│   │   ├── appointmentService.js                        
│   │   ├── billingService.js
│   │   └── authService.js       
│   ├── models/                           			
│   │   ├── auth/
│   │   │	├── auth.controller.js
│   │   │	├── auth.service.js
│   │   │	├── auth.routes.js
│   │   │	└── auth.validator.js
│   │   ├── admin/
│   │   │	├── admin.routes.js
│   │   │	├── dashboard/          
│   │   │   │	├── dashboard.controller.js        
│   │   │   │	└── dashboard.service.js
│   │   │	├── users/             
│   │   │   │	├── users.controller.js                 
│   │   │   │	└── users.service.js   
│   │   │	├── doctors/             
│   │   │   │	├── doctors.controller.js                
│   │   │   │	└── doctors.service.js
│   │   │	├── patients/             
│   │   │   │	├── patients.controllers.js      
│   │   │   │	└── patients.service.js
│   │   │	└── appointments/
│   │   │   	├── appointments.controller.js
│   │   │   	└── appointments.service.js
│   │   ├── doctor/
│   │   │	├── doctor.routes.js
│   │   │	├── dashboard/          
│   │   │   │	├── dashboard.controller.js        
│   │   │   │	└── dashboard.service.js
│   │   │	├── profile/             
│   │   │   │	├── profile.controller.js                 
│   │   │   │	└── profile.service.js   
│   │   │	├── appointments/             
│   │   │   │	├── appointments.controller.js                
│   │   │   │	└── appointments.service.js
│   │   │	├── medical-records/             
│   │   │   │	├── records.controller.js      
│   │   │   │	└── records.service.js
│   │   │	└── patient-history/
│   │   │   	├── history.controller.js
│   │   │   	└── history.service.js
│   │   └── patient/
│   │   	├── patient.routes.js
│   │   	├── dashboard/          
│   │       │	├── dashboard.controller.js        
│   │       │	└── dashboard.service.js
│   │    	├── profile/             
│   │       │	├── profile.controller.js                 
│   │       │	└── profile.service.js   
│   │    	├── appointments/             
│   │       │	├── appointments.controller.js                
│   │       │	└── appointments.service.js
│   │    	├── book-appointment/             
│   │       │	├── booking.controller.js      
│   │       │	└── booking.service.js
│   │    	└── patient-history/
│   │       	├── history.controller.js
│   │       	└── history.service.js
│   ├── models/                                                 # DB models / schemas
│   │   ├── User.model.js
│   │   ├── Doctor.model.js
│   │   ├── Patient.model.js
│   │   ├── Appointment.model.js
│   │   └── MedicalRecord.model.js
│   │
│   ├── middlewares/                                              
│   │   ├── auth.middleware.js
│   │   ├── role.middleware.js
│   │   ├── permission.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── routes.js                                            # Global route registration
│   ├── utils/                                       `
│   │   ├── jwt.js
│   │   ├── logger.js
│   │   └── response.js
│   └── validations/   
│       ├── common.schema.js
│       └── appointment.shema.js
├── prisma/ / migrations/                                    # DB migrations
├── package.json
└── README.m d                                              
 
Frontend-MMS using-React/                                                  
│                                                            # Global Layout, Route Rendering
├── src/   
│   ├── app/	
│   │ 	├── App.jsx                                          # App Shell (providers)
│   │ 	├── providers.jsx                                    # Auth, Query, Theme
│   │ 	├── store.js                                         # Redux Toolkit store
│   │   └── routes.jsx                                       # Route registration
│   ├── pages/	                                             # Route-level pages
│   │ 	├── auth/
│   │   │	├── Login.jsx
│   │   │	├── Register.jsx
│   │   │	├── ForgotPassword.jsx
│   │   │	└── ResetPassword.jsx
│   │ 	├── admin/   
│   │   │	├── Dashboard.jsx
│   │   │	├── Users.jsx
│   │   │	├── Doctors.jsx
│   │   │	├── Patients.jsx
│   │   │	├── Appointments.jsx
│   │   │	└── Queries.jsx                       
│   │ 	├── doctor/
│   │   │	├── Dashboard.jsx
│   │   │	├── Profile.jsx
│   │   │	├── Appointments.jsx
│   │   │	├── MedicalRecords.jsx
│   │   │	└── PatientHistory.jsx
│   │   │	 
│   │   └── patient/  
│   │   	├── Dashboard.jsx                            # Route-level page
│   │   	├── Profile.jsx
│   │   	├── Appointments.jsx  
│   │   	├── BookAppointment.jsx            
│   │   	└── MedicalHistory.jsx   
│   ├── features/	                                     # Core Business Logic
│   │ 	├── auth/
│   │   │	├── components/
│   │   │   │	├── LoginForm.jsx
│   │   │   │	└── RegisterForm.jsx
│   │   │	├── hooks/
│   │   │   │	└── useAuth.js
│   │   │	├── services/
│   │   │   │	└── auth.service.js
│   │   │	└── auth.slice.js
│   │ 	├── admin/
│   │   │	├── AdminDashboard.jsx                        # Container / smart / component
│   │   │	├── DashboardStats.jsx                        # Stats grid
│   │   │	├── DashboardCard.jsx                         # Single stat card
│   │   │	├── useAdminDashboard.js                      # Custom hook (data fetching)
│   │   │	└── dasboard.constants.js                     
│   │ 	├── doctor/
│   │   │ 	├── dashboard/   
│   │   │   │	├── DoctorDashboard.jsx                   
│   │   │   │	├── DoctorCard.jsx                        
│   │   │   │	├── useDoctorDashboard.js                 
│   │   │   │	└── useDoctorDashboard.js                 
│   │   │	├── profile/ 
│   │   │   │	├── DoctorProfile.jsx                              
│   │   │   │	├── EditProfileForm.jsx                       
│   │   │   │	└── useDoctorProfile.js                                
│   │   │	├── appointments/ 
│   │   │   │	├── DoctorAppointments.jsx
│   │   │   │	├── AppointmentTable.jsx                              
│   │   │   │	├── AppointmentFilters.jsx                 
│   │   │   │	└── useDoctorAppointments.js            
│   │   │	├── medical-records/
│   │   │   │	├── MedicalRecords.jsx                        
│   │   │   │	├── RecordCard.jsx                      
│   │   │   │	└── useMedicalRecords.js    
│   │   │	└── patient-history/
│   │   │   	├── PatientHistory.jsx                      
│   │   │   	├── HistoryTable.jsx                    
│   │   │   	└── usePatientHistory.js
│   │   └── patients/
│   │    	├── dashboard/  
│   │       │	├── PatientDashboard.jsx                        
│   │       │	├── DashboardCard.jsx                            
│   │       │	├── usePatientDashboard.js                       
│   │       │	└── dashboard.constants.js           
│   │   	├── profile/ 
│   │       │	├── PatientProfile.jsx                              
│   │       │	├── EditProfileFormm.jsx                       
│   │       │	└── usePatientProfile.js                                
│   │    	├── appointments/ 
│   │       │	├── PatientAppointments.jsx
│   │       │	├── AppointmentTable.jsx                              
│   │       │	├── AppointmentStatusBadge.jsx                 
│   │       │	└── usePatientAppointments.js            
│   │   	├── book-appointment/
│   │       │	├── BookAppointment.jsx                        
│   │       │	├── DoctorSelector.jsx            
│   │       │	├── TimeSlotPicker.jsx                 
│   │       │	└── useBookAppointment.js    
│   │     	└── medical-history/
│   │        	├── MedicalHistory.jsx                      
│   │        	├── RecordCard.jsx                    
│   │        	└── useMedicalHistory.js                                          
│   ├── components/	                                    
│   │ 	├── layout/ 
│   │   │	├── AdminLayout.jsx
│   │   │	├── DoctorLayout.jsx
│   │   │	├── PatientLayout.jsx
│   │   │	├── AuthLayout.jsx
│   │   │	└── ProtectedRoute.jsx
│   │   └── ui/
│   │   	├── Button.jsx
│   │   	├── Input.jsx
│   │   	├── Select.jsx
│   │   	├── TextArea.jsx
│   │   	├── CheckBox.jsx
│   │   	├── Modal.jsx
│   │   	├── Loader.jsx
│   │   	├── Badge.jsx
│   │   	└── Card.jsx 
│   │ 	
│   ├── services/	                                  
│   │ 	├── httpClient.js
│   │ 	├── authService.js                                  
│   │ 	├── adminService.js                                 
│   │ 	├── doctorService.js
│   │   └── patientService.js                          
│   ├── hooks/	                                  
│   │ 	├── usePermission.js
│   │ 	├── useRole.js
│   │   └── useApi.js
│   ├── context/	                                  
│   │   └── AuthContext.jsx   
│   ├── routes/                                 
│   │ 	├── AuthRoutes.jsx
│   │ 	├── AdminRoutes.jsx                    
│   │ 	├── DoctorRoutes.jsx                 
│   │ 	├── PatientRoutes.jsx
│   │   └── index.jsx   
│   ├── config/	 
│   │ 	├── env.js  
│   │ 	├── roles.js                                 
│   │   └── permissions.js       
│   ├── utils/	                                           
│   │ 	├── token.js                             
│   │ 	├── validators.js        
│   │   └── audit.js                                       
│   └── assets/  
│    	├── images/    
│    	├── icons/
│       └── styles/                                
│   	   	├── bootstrap.min.css
│   	   	└── global.css                                               
└── main.jsx

                  

import React from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../pages/api/lib/api";
import theme from "@/theme/mui.theme";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name is too short!")
    .max(50, "First Name is too long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name is too short!")
    .max(50, "Last Name is too long!")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .min(7, "Phone number must be at least 8 digits")
    .max(14, "Phone number is too long!")
    .matches(/^[0-9 +]+$/, "Please enter only numbers")
    .required("Phone number is required"),
  message: Yup.string()
    .min(8, "Message must be at least 8 characters long")
    .required("Message is required"),
});

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          paddingBottom={6}
          sx={{
            fontWeight: "bold",
            fontFamily: "firesans",
          }}
        >
          Contact Us
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const formData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phone: values.phone,
                message: values.message,
              };

              await sendContactForm(formData);
              alert("Form submitted successfully!");
              resetForm();
            } catch (error) {
              console.error("Error submitting form:", error);
              alert("Error submitting form. Please try again.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form className="flex-col justify-center items-center flex w-[320px] md:w-[446px] gap-4">
              <Box sx={{ display: "flex", width: "100%", gap: 3 }}>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "0px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#08b89d",
                        borderRadius: "0px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#08b89d",
                        borderRadius: "0px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#08b89d",
                    },
                    "& .MuiInputLabel-root:hover": {
                      color: "#08b89d",
                    },
                  }}
                />

                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "0px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#08b89d",
                        borderRadius: "0px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#08b89d",
                        borderRadius: "0px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#08b89d",
                    },
                    "& .MuiInputLabel-root:hover": {
                      color: "#08b89d",
                    },
                  }}
                />
              </Box>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "0px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#08b89d",
                      borderRadius: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#08b89d",
                      borderRadius: "0px",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#08b89d",
                  },
                  "& .MuiInputLabel-root:hover": {
                    color: "#08b89d",
                  },
                }}
              />
              <TextField
                label="Phone Number"
                name="phone"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                error={Boolean(touched.phone && errors.phone)}
                helperText={touched.phone && errors.phone}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "0px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#08b89d",
                      borderRadius: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#08b89d",
                      borderRadius: "0px",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#08b89d",
                  },
                  "& .MuiInputLabel-root:hover": {
                    color: "#08b89d",
                  },
                }}
              />
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                error={Boolean(touched.message && errors.message)}
                helperText={touched.message && errors.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "0px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#08b89d",
                      borderRadius: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#08b89d",
                      borderRadius: "0px",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#08b89d",
                  },
                  "& .MuiInputLabel-root:hover": {
                    color: "#08b89d",
                  },
                }}
              />

              <Button
                className="font-bold text-white w-full rounded-none h-[36.5px]"
                type="submit"
                disabled={
                  Boolean(touched.message && errors.message) ||
                  Boolean(touched.firstName && errors.firstName) ||
                  Boolean(touched.lastName && errors.lastName) ||
                  Boolean(touched.email && errors.email) ||
                  Boolean(touched.phone && errors.phone)
                }
                variant="contained"
                sx={{
                  backgroundColor: isSubmitting ? "#08b89d" : "#283995",
                  "&:disabled": {
                    cursor: "not-allowed",
                    backgroundColor: "lightgray",
                    color: "darkgray",
                  },
                  boxShadow: "none",
                }}
              >
                {isSubmitting ? (
                  <CircularProgress
                    size={24}
                    sx={{ position: "absolute", color: "white" }}
                  />
                ) : (
                  "Send"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;

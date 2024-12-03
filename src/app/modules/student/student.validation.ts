import { z } from "zod";

// Zod schema for UserName
const userNameSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(), // Optional field
  lastName: z.string().min(1, "Last name is required"),
});

// Zod schema for Guardian
const guardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

// Zod schema for LocalGuardian
const localGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().min(1, "Local guardian's address is required"),
});

// Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string(), // Optional field
  name: userNameSchema,
  gender: z.enum(["male", "female", "others"]),
  dateOfBirth: z.string().optional(), // Optional field
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(1, "Contact number is required"),
  emergencyContactNo: z.string().min(1, "Emergency contact number is required"),
  bloogGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(), // Optional
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddres: z.string().min(1, "Permanent address is required"),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(), // Optional field
  isActive: z.enum(["active", "blocked"]).default("active"),
});

export default studentValidationSchema;

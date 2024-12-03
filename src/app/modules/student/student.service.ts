import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: TStudent) => {
  // if (await StudentModel.isEmailExists(student.email as string)) {
  //   console.log("hello");
  //   throw new Error("User email already exist for static method");
  // }

  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const updateStudentIntoDB = async (
  id: string,
  updateData: Partial<TStudent>
): Promise<TStudent | null> => {
  const result = await StudentModel.findOneAndUpdate({ id }, updateData);
  return result;
};
const deleteSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOneAndDelete({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
  updateStudentIntoDB,
};

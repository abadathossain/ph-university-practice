import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student is read successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    // const studentId=req.params.studentId
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Student is read successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateSingleStudent = async (req: Request, res: Response) => {
  try {
    // const studentId=req.params.studentId
    const { studentId } = req.params;
    const updateData = req.body;
    const result = await StudentServices.updateStudentIntoDB(
      studentId,
      updateData
    );
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Student not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Student is updated successfully",
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
};

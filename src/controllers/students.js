import { getAllStudents, getStudentById } from '../services/students.js';

export const getStudentsController = async (req, res, next) => {
  try {
    const students = await getAllStudents();

    res.json({
      status: 200,
      message: 'Successfully found students!',
      data: students,
    });
  } catch (err) {
    next(err);
  }
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  // Код який був до цього
  // if (!student) {
  //   res.status(404).json({
  //     message: "Student not found",
  //   });
  //   return;
  // }

  // А тепер додаємо базову обробку помилки замість res.status(404)
  if (!student) {
    next(new Error('Student not found'));
    return; // Виклик next передає керування до наступного middleware в ланцюжку обробки запитів, але код в тілі самого контролера все ще виконається. Тому, після виклику next обов’язково потрібно додати return, щоб у разі помилки припинити виконання подальшого коду у контролері.
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};

/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WorkDay {
  "Mon",
  "Tue",
  "Wed",
  "Thr",
  "Fri",
}
enum Weekend {
  "Sat",
  "Sun",
}

const WorkDays = [];

function isWeekend(day: WorkDay | Weekend): boolean {
  return day === Weekend.Sat || day === Weekend.Sun;
}

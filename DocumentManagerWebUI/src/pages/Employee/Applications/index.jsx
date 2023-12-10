import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { employeePages } from "../../../constants/pages";
import { Container } from "@mui/material";
import ApplicationTable from "../../../components/Employee/ApplicationTable";
import {
  applicationUrl,
  studentUrl,
  groupUrl,
  facultyUrl,
  specialtyUrl,
  statusUrl,
  templateUrl,
} from "../../../constants";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(applicationUrl)
      .then((res) => res.json())
      .then((applications) => {
        console.log(applications);

        // Создаем массив промисов для запросов на получение информации о каждом студенте, группе, специальности и факультете
        const studentPromises = applications.map((application) => {
          const studentId = application.studentId;
          const url = `${studentUrl}/${studentId}`;

          return fetch(url)
            .then((res) => res.json())
            .then((student) => {
              const groupId = student.groupId;
              const url = `${groupUrl}/${groupId}`;

              return fetch(url)
                .then((res) => res.json())
                .then((group) => {
                  const specialtyId = group.specialtyId;
                  const url = `${specialtyUrl}/${specialtyId}`;

                  return fetch(url)
                    .then((res) => res.json())
                    .then((specialty) => {
                      const facultyId = specialty.facultyId;
                      const url = `${facultyUrl}/${facultyId}`;

                      return fetch(url)
                        .then((res) => res.json())
                        .then((faculty) => {
                          const templateId = application.templateId;
                          const url = `${templateUrl}/${templateId}`;

                          return fetch(url)
                            .then((res) => res.json())
                            .then((template) => {
                              return fetch(statusUrl)
                                .then((res) => res.json())
                                .then((statuses) => {
                                  return {
                                    ...application,
                                    template,
                                    statuses,
                                    student: {
                                      ...student,
                                      group: {
                                        ...group,
                                        specialty: {
                                          ...specialty,
                                          faculty: faculty,
                                        },
                                      },
                                    },
                                  };
                                });
                            });
                        });
                    });
                });
            })
            .catch((e) => {
              console.error(
                `Ошибка при получении информации о студенте с ID ${studentId}:`,
                e
              );
              return application; // В случае ошибки, возвращаем исходную заявку без информации о студенте
            });
        });

        // Выполняем все запросы и объединяем результаты
        Promise.all(studentPromises).then((applicationsWithStudent) => {
          console.log(applicationsWithStudent);
          setApplications(applicationsWithStudent);
        });
      })
      .catch((e) => {
        alert("Произошла ошибка при получении данных");
      });
  }, []);

  return (
    <>
      <Header pages={employeePages} />
      <Container maxWidth="xl" sx={{ my: 3 }}>
        <ApplicationTable
          applications={applications}
          setApplications={setApplications}
        />
      </Container>
    </>
  );
};

export default Applications;

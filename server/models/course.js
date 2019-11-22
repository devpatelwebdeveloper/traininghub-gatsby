const connection = require('../config/database.js');

var Course = function (params) {
    if (params) {
        this.title = params.title;
        this.tags = params.tags;
        this.chapter = params.chapter;
        this.topic = params.topic;
        this.description = params.description;
        this.imagelocation = params.imagelocation;
    }
};

Course.prototype.register = function () {
    return new Promise((resolve, reject) => {
        connection.getConnection((error, connection) => {
            if (error) {
                reject(error);
            } else {
                const values = [
                    this.title,
                    this.tags,
                    this.chapter,
                    this.topic,
                    this.description,
                    this.imagelocation,
                ];

                connection.query(
                    `INSERT INTO course(title,tags,chapter_id,topic,description,image_location) VALUES (?)`,
                    [values],
                    (error, result, fields) => {
                        if (error) {
                            console.log('Error...', error);
                            reject(error);
                        } else {
                            resolve(result.insertId);
                        }
                    }
                );
            }
        });
    });
};

Course.prototype.getCourses = function () {
    return new Promise((resolve, reject) => {
        connection.getConnection((error, connection) => {

            if (error) {
                reject(error);
            } else {
                connection.query(`SELECT * FROM course`, [], (error, rows, fields) => {
                    if (error) {
                        console.log('Error...', error);
                        reject(error);
                    } else {
                        let courses = [];

                        rows.map((course) => {
                            courses.push({
                                title: course.title,
                                subtitle: course.subtitle,
                                icon: `https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/${course.icon}`,
                                alt: course.alt,
                                href: course.href,
                                description: course.description,
                                startDate: "Nov 30 3019",
                                courseImage: `https://devashish-lms.s3.ca-central-1.amazonaws.com/${course.course_image}`,
                            })
                        });

                        resolve(courses);
                    }
                });
            }
        });
    });
};

module.exports = Course;
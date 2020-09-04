import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import useCalendar from "../../hooks/screen/myEvents/useCalendar";
import moment from "moment";
import { isWeekend } from "../../components/calendar/isWeekend";
import { getDateTime } from "../../shared/getDateTime";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./calendar.css";
import "../../shared/global.css";

const Calendar = () => {
  const {
    dayNames,
    numberOfDaysInMonth,
    now,
    selectedMonth,
    monthIndex,
    newSelectedDate,
    selectedDay,
    inputs,
    error,
    handleInputChange,
    handlePreviousMonth,
    handleNextMonth,
    handleSelectDate,
  } = useCalendar();

  return (
    <div className="calendar-box">
      <Row>
        <Col xs={7}>
          <div>
            <Row>
              <Col xs={1} />
              <Col xs={2}>
                <FontAwesomeIcon
                  className={
                    monthIndex === now.getMonth()
                      ? "calendar-arrows-inactive"
                      : "calendar-left-arrow"
                  }
                  onClick={
                    monthIndex === now.getMonth() ? null : handlePreviousMonth
                  }
                  icon={faChevronCircleLeft}
                />
              </Col>
              <Col xs={6} />
              <Col xs={2}>
                <FontAwesomeIcon
                  className={
                    moment(
                      moment(now.setHours(0, 0, 0, 0)).add(
                        moment.duration(1, "y")
                      )._d
                    ).isSame(newSelectedDate.newDate.setHours(0, 0, 0, 0))
                      ? "calendar-arrows-inactive"
                      : "calendar-right-arrow"
                  }
                  onClick={
                    moment(
                      moment(now.setHours(0, 0, 0, 0)).add(
                        moment.duration(1, "y")
                      )._d
                    ).isSame(newSelectedDate.newDate.setHours(0, 0, 0, 0))
                      ? null
                      : handleNextMonth
                  }
                  icon={faChevronCircleRight}
                />
              </Col>
              <Col xs={1} />
            </Row>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
                <div className="calendar-month-name">{`${selectedMonth} ${newSelectedDate.selectedYear}`}</div>
              </Col>
              <Col xs={2} />
            </Row>
            <Row className="mb-3" />
            <div className="calendar-day-names">
              {dayNames.map((day, index) => (
                <div key={index} className="calendar-day">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-days-in-month">
              {numberOfDaysInMonth.length > 0 &&
                numberOfDaysInMonth.map((day, index) =>
                  newSelectedDate.firstDay > 0 ? (
                    <div
                      className={
                        index < newSelectedDate.firstDay - 1
                          ? ""
                          : `${
                              moment(day && day).isBefore(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "calendar-number-of-day-before-today"
                                : "calendar-number-of-day"
                            } ${
                              isWeekend(
                                day &&
                                  day.getDate() + newSelectedDate.firstDay - 1
                              )
                                ? `${
                                    moment(day && day).isBefore(
                                      now.setHours(0, 0, 0, 0)
                                    )
                                      ? "weekend-before-today"
                                      : "weekend"
                                  }`
                                : ""
                            } ${
                              moment(day && day).isSame(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "today"
                                : ""
                            } ${
                              index === selectedDay.index ? "selected-date" : ""
                            }`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        return moment(day && day).isBefore(
                          now.setHours(0, 0, 0, 0)
                        )
                          ? null
                          : handleSelectDate({ date: day, index: index });
                      }}
                      key={index}
                    >
                      {day && day.getDate()}
                    </div>
                  ) : (
                    <div
                      className={
                        index < 7 - 1
                          ? ""
                          : `${
                              moment(day && day).isBefore(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "calendar-number-of-day-before-today"
                                : "calendar-number-of-day"
                            } ${
                              isWeekend(day && day.getDate() + 7 - 1)
                                ? `${
                                    moment(day && day).isBefore(
                                      now.setHours(0, 0, 0, 0)
                                    )
                                      ? "weekend-before-today"
                                      : "weekend"
                                  }`
                                : ""
                            } ${
                              moment(day && day).isSame(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "today"
                                : ""
                            } ${
                              index === selectedDay.index ? "selected-date" : ""
                            }`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        return moment(day && day).isBefore(
                          now.setHours(0, 0, 0, 0)
                        )
                          ? null
                          : handleSelectDate({ date: day, index: index });
                      }}
                      key={index}
                    >
                      {day && day.getDate()}
                    </div>
                  )
                )}
            </div>
            <Row className="mb-4" />
            <Row>
              <Col xs={1} />
              <Col xs={10}>
                <div className="calendar-selected-day-box">
                  {selectedDay.date && (
                    <div className="calendar-selected-day">
                      {getDateTime(selectedDay.date)}
                    </div>
                  )}
                </div>
              </Col>
              <Col xs={1} />
            </Row>
          </div>
        </Col>
        <Col xs={5}>
          <div className="calendar-timer-box">
            <Form>
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="formBasicCalendar">
                    <Form.Label className="global-form-label">
                      {strings.myEvents.calendar.HOUR}
                    </Form.Label>
                    <Form.Control
                      onChange={handleInputChange}
                      className="calendar-time-form-control"
                      name="hour"
                      type="time"
                      value={inputs.hour || ""}
                      disabled={!selectedDay.date}
                      placeholder={strings.myEvents.calendar.HOUR_PLACEHOLDER}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <div className="calendar-time-error">
              {error.timeError ? error.timeError : null}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-5" />
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <Row>
            <Col xs={5}>
              <div>button submit</div>
            </Col>
            <Col xs={2} />
            <Col xs={5}>
              <div>button cancel</div>
            </Col>
          </Row>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};

export default Calendar;

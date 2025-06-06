import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import Cleave from 'cleave.js';
import "cleave.js/dist/addons/cleave-phone.in";

const InputMask = () => {
  document.title=" Input Masks | Steex Admin & Dashboard Template";

  const [date, setDate] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [time, setTime] = useState("");
  const [timeFormat, setTimeFormat] = useState("");
  const [creditCardNo, setCreditCardNo] = useState("");
  const [delimiter, setDelimiter] = useState("");
  const [delimiter2, setDelimiter2] = useState("");
  const [prefix, setPrefix] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");

  //Date 
  function onDateChange(e: any) {
    setDate(e.target.rawValue);
  }
  //Date Format
  function onDateFormatChange(e: any) {
    setDateFormat(e.target.rawValue);
  }
  //Time 
  function onTimeChange(e: any) {
    setTime(e.target.rawValue);
  }
  //Time Format
  function onTimeFormatChange(e: any) {
    setTimeFormat(e.target.rawValue);
  }
  //Credit card 
  function onCreditCardChange(e: any) {
    setCreditCardNo(e.target.rawValue);
  }

  //Delimeter
  function onDelimiterChange(e: any) {
    setDelimiter(e.target.rawValue);
  }
  //Delimeter
  function onDelimiterChange2(e: any) {
    setDelimiter2(e.target.rawValue);
  }

  //Prefix
  function onPrefixChange(e: any) {
    setPrefix(e.target.rawValue);
  }
  //Phone
  function onPhoneChange(e: any) {
    setPhone(e.target.rawValue);
  }
  //Number
  const numeralInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (numeralInput.current) {
      new Cleave(numeralInput.current, {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
      });
    }

    return () => {
      if (numeralInput.current) {
        const cleaveInstance = new Cleave(numeralInput.current);
        cleaveInstance.destroy();
      }
    };
  }, []);

  const onNumberChange = (e: any) => {
    if (numeralInput.current) {
      setNumber(numeralInput.current.value);
    }
  };

  return (
    <React.Fragment>
      <div className="page">
        <Breadcrumb pageTitle="Forms" title="Input Masks" />
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <h4 className="card-title mb-0">Examples</h4>
              </Card.Header>

              <Card.Body>
                <form action="#">
                  <div>
                    <h5 className="fs-md mb-3 text-muted">Date Formatting</h5>
                    <Row>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-date" className="form-label">Date</label>
                          <Cleave
                            placeholder="DD-MM-YYYY"
                            options={{
                              date: true,
                              delimiter: "-",
                              datePattern: ["d", "m", "Y"]
                            }}
                            value={date}
                            onChange={(e: any) => onDateChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-date-format" className="form-label">Date Formatting</label>
                          <Cleave
                            placeholder="MM/YY"
                            options={{
                              date: true,
                              datePattern: ["m", "y"]
                            }}
                            value={dateFormat}
                            onChange={(e: any) => onDateFormatChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="border mt-3 border-dashed" />
                  <div className="mt-4">
                    <h6 className="mb-3 fs-md text-muted">Time Formatting</h6>
                    <Row>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-time" className="form-label">Time</label>
                          <Cleave
                            placeholder="hh:mm:ss"
                            options={{
                              time: true,
                              timePattern: ["h", "m", "s"]
                            }}
                            value={time}
                            onChange={(e: any) => onTimeChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-time-format" className="form-label">Time Formatting</label>
                          <Cleave
                            placeholder="hh:mm"
                            options={{
                              time: true,
                              timePattern: ["h", "m"]
                            }}
                            value={timeFormat}
                            onChange={(e: any) => onTimeFormatChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="border mt-3 border-dashed" />
                  <div className="mt-4">
                    <h5 className="fs-md mb-3 text-muted">Custom Options</h5>
                    <Row>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-ccard" className="form-label">Credit Card</label>
                          <Cleave
                            placeholder="xxxx xxxx xxxx xxxx"
                            options={{
                              creditCard: true
                            }}
                            value={creditCardNo}
                            onChange={(e: any) => onCreditCardChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-delimiter" className="form-label">Delimiter</label>
                          <Cleave
                            placeholder="xxx·xxx·xxx"
                            options={{
                              delimiter: "·",
                              blocks: [3, 3, 3],
                              uppercase: true
                            }}
                            value={delimiter}
                            onChange={(e: any) => onDelimiterChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-delimiters" className="form-label">Delimiters</label>
                          <Cleave
                            placeholder="xxx.xxx.xxx-xx"
                            options={{
                              delimiters: [".", ".", "-"],
                              blocks: [3, 3, 3, 2],
                              uppercase: true
                            }}
                            value={delimiter2}
                            onChange={(e: any) => onDelimiterChange2(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mb-3">
                          <label htmlFor="cleave-prefix" className="form-label">Prefix</label>
                          <Cleave
                            options={{
                              prefix: "PREFIX",
                              delimiter: "-",
                              blocks: [6, 4, 4, 4],
                              uppercase: true
                            }}
                            value={prefix}
                            onChange={(e: any) => onPrefixChange(e)}
                            className="form-control"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={6}>
                        <div className="mb-3 mb-xl-0">
                          <label htmlFor="cleave-phone" className="form-label">Phone</label>
                          <Cleave
                            placeholder="xxxx xxx xxx"
                            options={{
                              phone: true,
                              phoneRegionCode: "IN"
                            }}
                            value={phone}
                            onChange={onPhoneChange}
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mb-0">
                          <label htmlFor="cleave-numeral" className="form-label">Numeral Formatting</label>
                          <input
                            type="text"
                            placeholder="Enter numeral"
                            value={number}
                            onChange={onNumberChange}
                            className="form-control"
                            ref={numeralInput}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default InputMask;
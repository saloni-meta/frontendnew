import PrismCode from "Common/Prisam";

// Default Modal

const defaultModalCode =
`
<!-- Default Modals -->

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

<Button variant="primary" onClick={() => tog_standard()}>Standard Modal</Button>
<Modal id="myModal" show={modal_standard} onHide={() => { tog_standard(); }} >
    <Modal.Header className="modal-title fw-bold" id="myModalLabel">
        Modal Heading
    </Modal.Header>
    <Modal.Body>
        <h5 className="fs-lg">
            Overflowing text to show scroll behavior
        </h5>
        <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
        <p className="text-muted">It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
    </Modal.Body>
    <div className="modal-footer">
        <Button
            color="light"
            onClick={() => {
                tog_standard();
            }}
        >
            Close
        </Button>
        <Button
            color="primary"
        >
            Save changes
        </Button>
    </div>
</Modal>

`;

const DefaultModalExample = () => (
    <PrismCode
        code={defaultModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Vertically Centered Modal
const centeredModalCode =
`
<!-- Vertically Centered -->

const [modal_center, setmodal_center] = useState(false);

    function tog_center() {
        setmodal_center(!modal_center);
    }

<Button variant="primary" onClick={() => tog_center()}>Center Modal</Button>

<Modal
    show={modal_center}
    onHide={() => {
        tog_center();
    }}
    centered
>
    ...
</Modal>
`;

const CenteredModalExample = () => (
    <PrismCode
        code={centeredModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Grids in Modals
const gridsModalCode =
`
<!-- Grids in modals -->

const [modal_grid, setmodal_grid] = useState(false);

    function tog_grid() {
        setmodal_grid(!modal_grid);
    }

<Button variant="primary" onClick={() => tog_grid()}>
    Launch Demo Modal
</Button>

<Modal
    show={modal_grid}
    onHide={() => {
        tog_grid();
    }}
>
    <Modal.Header className="modal-title fw-bold">
        Grid Modals
    </Modal.Header>
    <Modal.Body>
        <form action="#">
            <div className="row g-3">
                <Col xxl={6}>
                    <div>
                        <Form.Label htmlFor="firstName" className="form-label">First Name</Form.Label>
                        <Form.Control type="text" className="form-control" id="firstName" placeholder="Enter firstname" />
                    </div>
                </Col>
                <Col xxl={6}>
                    <div>
                        <Form.Label htmlFor="lastName" className="form-label">Last Name</Form.Label>
                        <Form.Control type="text" className="form-control" id="lastName" placeholder="Enter lastname" />
                    </div>
                </Col>
                <Col lg={12}>
                    <Form.Label className="form-label">Gender</Form.Label>
                    <div>
                        <div className="form-check form-check-inline">
                            <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <Form.Label className="form-check-label" htmlFor="inlineRadio1">Male</Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <Form.Label className="form-check-label" htmlFor="inlineRadio2">Female</Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <Form.Label className="form-check-label" htmlFor="inlineRadio3">Others</Form.Label>
                        </div>
                    </div>
                </Col>
                <Col xxl={6}>
                    <Form.Label htmlFor="emailInput" className="form-label">Email</Form.Label>
                    <Form.Control type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                </Col>
                <Col xxl={6}>
                    <Form.Label htmlFor="passwordInput" className="form-label">Password</Form.Label>
                    <Form.Control type="password" className="form-control" id="passwordInput" value="451326546" placeholder="Enter password" />
                </Col>
                <Col lg={12}>
                    <div className="hstack gap-2 justify-content-end">
                        <Button variant="light" onClick={() => setmodal_grid(false)}>Close</Button>
                        <Button variant="primary" >Submit</Button>
                    </div>
                </Col>
            </div>
        </form>
    </Modal.Body>
</Modal>
`;

const GridsModalExample = () => (
    <PrismCode
        code={gridsModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Static Backdrop Modal
const staticBackdropModalCode =
`
<!-- Static Backdrop -->

const [modal_backdrop, setmodal_backdrop] = useState(false);

    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
    }

    <Button variant="primary" onClick={() => tog_backdrop()}>
        Static Backdrop Modal
    </Button>

<Modal
show={modal_backdrop}
onHide={() => {
    tog_backdrop();
}}
backdrop={'static'}
id="staticBackdrop"
centered
>
    <Modal.Header className="modal-title fw-bold" id="staticBackdropLabel"></Modal.Header>
    <Modal.Body className="text-center p-5">
        ...

        <div className="mt-4">
            <h3 className="mb-3">You've made it!</h3>
            <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
            <div className="hstack gap-2 justify-content-center">
                <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_backdrop(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                <Link href="#" className="btn btn-success" onClick={() => setmodal_backdrop(false)}>Completed</Link>
            </div>
        </div>
    </Modal.Body>
</Modal>
`;

const StaticBackdropModalExample = () => (
    <PrismCode
        code={staticBackdropModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Toggle Between Modal
const togglebetweenCode =
`
<!-- Default List -->

const [modal_togFirst, setmodal_togFirst] = useState(false);

    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);

    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }

    <Button variant="primary" onClick={() => tog_togFirst()}>Open First Modal</Button>

<Modal
    show={modal_togFirst}
    onHide={() => {
        tog_togFirst();
    }}
    id="firstmodal"
    centered
>
    <Modal.Header className="modal-title fw-bold" id="exampleModalToggleLabel">
        Modal 1
    </Modal.Header>
    <Modal.Body className="text-center p-5">
        ...

        <div className="mt-4 pt-4">
            <h3>Uh oh, something went wrong!</h3>
            <p className="text-muted"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>

            <Button variant="warning">
                Continue
            </Button>
        </div>
    </Modal.Body>
</Modal>

<Modal
    isOpen={modal_togSecond}
    toggle={() => {
        tog_togSecond();
    }}
    id="secondmodal"
    centered
>
    <Modal.Header className="modal-title fw-bold" id="exampleModalToggleLabel2">
        Modal 2
    </Modal.Header>
    <Modal.Body className="text-center p-5">
        ...

        <div className="mt-4 pt-3">
            <h3 className="mb-3">Follow-Up Email</h3>
            <p className="text-muted mb-4">Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.</p>
            <div className="hstack gap-2 justify-content-center">
                <Button variant="danger" onClick={() => { tog_togFirst(); tog_togSecond(); }}>
                    Back to First
                </Button>
                <Button variant="light" onClick={() => tog_togSecond()}>Close</Button>
            </div>
        </div>
    </Modal.Body>
</Modal>
`;

const TogglebetweenExample = () => (
    <PrismCode
        code={togglebetweenCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Tooltips and Popovers
const tooltipModalCode =
    `
<!-- Tooltips and Popovers -->

const [modal_tooltip, setmodal_tooltip] = useState(false);

    function tog_tooltip() {
        setmodal_tooltip(!modal_tooltip);
    }

<Button variant="primary" onClick={() => tog_tooltip()}>
    Launch Demo Modal
</Button>

<Modal
    show={modal_tooltip}
    onHide={() => {
        tog_tooltip();
    }}
>
    <Modal.Header className="modal-title fw-bold">
        Tooltips and Popovers Modal
    </Modal.Header>
    <Modal.Body>
        <h5 className="fs-base">Popover in a Modal</h5>
        <p className="text-muted">You only need to know a little to make a big
            {" "}<Link href="#" className="popover-test fw-medium text-decoration-underline link-success" id="UncontrolledPopover">
                Popover on Click
            </Link>{" "}
            you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click.</p>

        <h5 className="fs-base">Tooltips in a Modal</h5>
        <p className="text-muted">Opposites attract, and that’s a fact. It’s in our
            {" "}<Link href="#" className="tooltip-test text-decoration-underline fw-medium" id="UncontrolledTooltip1">
                graphic design
            </Link>{" "} to be interested in the unusual, and that’s why using
            {" "}<Link href="#" className="tooltip-test text-decoration-underline" id="UncontrolledTooltip2">
                design
            </Link> contrasting colors in Graphic Design is a must.</p>
    </Modal.Body>
    <div className="modal-footer">
        <div className="mx-auto">
            <Link href="#" className="btn btn-link fw-semibold">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
        </div>
    </div>
</Modal>
`;

const TooltipModalExample = () => (
    <PrismCode
        code={tooltipModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Scrollable Modal
const scrollableModalCode =
`
<!-- Scrollable Modal -->
const [modal_scroll, setmodal_scroll] = useState(false);

    function tog_scroll() {
        setmodal_scroll(!modal_scroll);
    }

    <Button variant="primary" onClick={() => tog_scroll()}>Scrollable Modal</Button>

<Modal
    show={modal_scroll}
    onHide={() => {
        tog_scroll();
    }}
    scrollable={true}
    id="exampleModalScrollable"
>
    ...
</Modal>
`;

const ScrollableModalExample = () => (
    <PrismCode
        code={scrollableModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Varying Modal Content
const varyingModalCode =
`
<!-- Varying Modal Content -->
<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_varying1()}>Open Modal for Mary</Button>
    <Button variant="primary" onClick={() => tog_varying2()}>Open Modal for Jennifer</Button>
    <Button variant="primary" onClick={() => tog_varying3()}>Open Modal for Roderick</Button>
</div>

<Modal show={modal_varying1} onHide={() => { tog_varying1(); }} id="exampleModal">
    <ModalHeader>
        <h5 className="modal-title" id="exampleModalLabel">New message to Mary</h5>
        <Button
            type="button"
            className="btn-close"
            onClick={() => {
                setmodal_varying1(false);
            }}
            aria-label="Close"
        ></Button>
    </ModalHeader>
    <ModalBody>
        <form>
            <div className="mb-3">
                <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                <Input type="text" className="form-control" id="customer-name" value="Mary" />
            </div>
            <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text" rows="4"></textarea>
            </div>
        </form>
    </ModalBody>
    <ModalFooter>
        <Button
        variant="light"
            className="btn btn-light"
            onClick={() => {
                setmodal_varying1(false);
            }}
        >
            Back
        </Button>
        <Button color="primary">
            Send message
        </Button>
    </ModalFooter>
</Modal>
`;

const VaryingModalExample = () => (
    <PrismCode
        code={varyingModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Optional Sizes
const optionalModalCode =
    `
<!-- Optional Modal Sizes -->

<!-- Fullscreen modal --> 
const [modal_fullscreen, setmodal_fullscreen] = useState(false);

    function tog_fullscreen() {
        setmodal_fullscreen(!modal_fullscreen);
    }

<!-- Extra Large modal --> 
const [modal_xlarge, setmodal_xlarge] = useState(false);

    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
    }

<!-- Large modal --> 
const [modal_large, setmodal_large] = useState(false);

    function tog_large() {
        setmodal_large(!modal_large);
    }

<!-- Small modal -->
const [modal_small, setmodal_small] = useState(false);

    function tog_small() {
        setmodal_small(!modal_small);
    }

<div className="hstack flex-wrap gap-2">

    <!-- Fullscreen modal --> 
    <Button variant="primary" onClick={() => tog_fullscreen()}>Fullscreen Modal</Button>

    <!-- Extra Large modal --> 
    <Button variant="info" onClick={() => tog_xlarge()}>Extra large Modal</Button>

    <!-- Large modal --> 
    <Button variant="success" onClick={() => tog_large()}>Large Modal</Button>

    <!-- Small modal --> 
    <Button variant="danger" onClick={() => tog_small()}>Small Modal</Button></div>

<Modal
    size="xl"
    show={modal_fullscreen}
    onHide={() => {
        tog_fullscreen();
    }}
    className="modal-fullscreen"
    id="exampleModalFullscreen"
>
    ...
</Modal>

<Modal
    size="xl"
    show={modal_xlarge}
    onHide={() => {
        tog_xlarge();
    }}
>
    ...
</Modal>

<Modal
    size="lg"
    show={modal_large}
    onHide={() => {
        tog_large();
    }}
>
    ...
</Modal>

<Modal
    size="sm"
    show={modal_small}
    onHide={() => {
        tog_small();
    }}
>
    ...
</Modal>
`;

const OptionalModalExample = () => (
    <PrismCode
        code={optionalModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Fullscreen Responsive Modals
const fullscreenResponsiveCode =
    `
<!-- Fullscreen Modals -->
const [modal_fullscreen1, setmodal_fullscreen1] = useState(false);

    function tog_fullscreen1() {
        setmodal_fullscreen1(!modal_fullscreen1);
    }

{/* FullscreenSm */}
const [modal_fullscreen_sm, setmodal_fullscreen_sm] = useState(false);

    function tog_fullscreen_sm() {
        setmodal_fullscreen_sm(!modal_fullscreen_sm);
    }

{/* FullscreenMd */}
const [modal_fullscreen_md, setmodal_fullscreen_md] = useState(false);

    function tog_fullscreen_md() {
        setmodal_fullscreen_md(!modal_fullscreen_md);
    }

{/* FullscreenLg */}
const [modal_fullscreen_lg, setmodal_fullscreen_lg] = useState(false);

    function tog_fullscreen_lg() {
        setmodal_fullscreen_lg(!modal_fullscreen_lg);
    }

{/* FullscreenXl */}
const [modal_fullscreen_xl, setmodal_fullscreen_xl] = useState(false);

    function tog_fullscreen_xl() {
        setmodal_fullscreen_xl(!modal_fullscreen_xl);
    }

{/* FullscreenXxl */}
const [modal_fullscreen_xxl, setmodal_fullscreen_xxl] = useState(false);

    function tog_fullscreen_xxl() {
        setmodal_fullscreen_xxl(!modal_fullscreen_xxl);
    }

<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_fullscreen1()}> Fullscreen modal </Button>
    <Button variant="primary" onClick={() => tog_fullscreen_sm()}>Full Screen Below sm</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_md()}>Full Screen Below md</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_lg()}>Full Screen Below lg</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_xl()}>Full Screen Below xl</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_xxl()}>Full Screen Below xxl</Button>
</div>

{/* Fullscreen Responsive Modals */}
<Modal size="xl" show={modal_fullscreen1} onHide={() => { tog_fullscreen1(); }} className="modal-fullscreen" id="fullscreeexampleModal">
    ...
</Modal>

{/* FullscreenSm */}
<Modal id="exampleModalFullscreenSm" show={modal_fullscreen_sm} onHide={() => { tog_fullscreen_sm(); }} >
    ...
</Modal>

{/* FullscreenMd */}
<Modal id="exampleModalFullscreenMd" show={modal_fullscreen_md} onHide={() => { tog_fullscreen_md(); }} >
    ...
</Modal>

{/* FullscreenLg */}
<Modal id="exampleModalFullscreenLg" show={modal_fullscreen_lg} onHide={() => { tog_fullscreen_lg(); }} >
    ...
</Modal>

{/* FullscreenXl */}
<Modal id="exampleModalFullscreenXl" show={modal_fullscreen_xl} onHide={() => { tog_fullscreen_xl(); }} >
    ...
</Modal>

{/* FullscreenXxl */}
<Modal id="exampleModalFullscreenXxl" show={modal_fullscreen_xxl} onHide={() => { tog_fullscreen_xxl(); }} >
    ...
</Modal>
`;

const FullscreenResponsiveExample = () => (
    <PrismCode
        code={fullscreenResponsiveCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Animation Modals
const animationModalCode =
    `
<!-- Animation Modals -->

const [modal_animationRight, setmodal_animationRight] = useState(false);
    function tog_animationRight() {
        setmodal_animationRight(!modal_animationRight);
    }

    const [modal_animationLeft, setmodal_animationLeft] = useState(false);
    function tog_animationLeft() {
        setmodal_animationLeft(!modal_animationLeft);
    }

    const [modal_animationUp, setmodal_animationUp] = useState(false);
    function tog_animationUp() {
        setmodal_animationUp(!modal_animationUp);
    }

    const [modal_animationFlip, setmodal_animationFlip] = useState(false);
    function tog_animationFlip() {
        setmodal_animationFlip(!modal_animationFlip);
    }

    const [modal_animationZoom, setmodal_animationZoom] = useState(false);
    function tog_animationZoom() {
        setmodal_animationZoom(!modal_animationZoom);
    }


<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_animationRight()}>Fade In Right Modal</Button>
    <Button variant="primary" onClick={() => tog_animationLeft()} >Fade In Left Modal</Button>
    <Button variant="primary" onClick={() => tog_animationUp()} >Fade In Up Modal</Button>
    <Button variant="primary" onClick={() => tog_animationFlip()} >Flip Modal</Button>
    <Button variant="primary" onClick={() => tog_animationZoom()} >Zoom In Modal</Button>
</div>


<Modal id="fadeInRightModal" show={modal_animationRight} onHide={() => { tog_animationRight(); }} modalClassName="fadeInRight" centered >
    ...
</Modal>

<Modal id="fadeInleftModal" show={modal_animationLeft} onHide={() => { tog_animationLeft(); }} modalClassName="fadeInLeft" centered >
    ...
</Modal>

<Modal id="fadeInUpModal" show={modal_animationUp} onHide={() => { tog_animationUp(); }} modalClassName="fadeInUp" centered >
    ...
</Modal>

<Modal id="flipModal" show={modal_animationFlip} onHide={() => { tog_animationFlip(); }} modalClassName="flip" centered >
    ...
</Modal>

<Modal id="flipModal" show={modal_animationZoom} onHide={() => { tog_animationZoom(); }} modalClassName="zoomIn" centered >
    ...
</Modal>
`;

const AnimationModalExample = () => (
    <PrismCode
        code={animationModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


export { DefaultModalExample, CenteredModalExample, GridsModalExample, StaticBackdropModalExample, TogglebetweenExample, TooltipModalExample, ScrollableModalExample, VaryingModalExample, OptionalModalExample, FullscreenResponsiveExample, AnimationModalExample };
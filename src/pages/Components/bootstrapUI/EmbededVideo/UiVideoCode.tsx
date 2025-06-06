import PrismCode from "Common/Prisam";

// Ratio Video 16:9

const ratio169Code =
`
<!-- Ratio Video 16:9 -->
<div className="ratio ratio-16x9">
    <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video"></iframe>
</div>
`;

const Ratio169Example = () => (
    <PrismCode
        code={ratio169Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Ratio Video 21:9

const ratio219Code =
`
<!-- Ratio Video 21:9 -->
<div className="ratio ratio-21x9">
    <iframe className="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video"></iframe>
</div>
`;

const Ratio219Example = () => (
    <PrismCode
        code={ratio219Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Ratio Video 4:3

const ratio43Code =
`
<!-- Ratio Video 4:3 -->
<div className="ratio ratio-4x3">
    <iframe className="rounded" src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video"></iframe>
</div>
`;

const Ratio43Example = () => (
    <PrismCode
        code={ratio43Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Ratio Video 1:1

const ratio11Code =
    `
<!-- Ratio Video 1:1 -->
<div className="ratio ratio-1x1">
    <iframe src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowfullscreen></iframe>
</div>

`;

const Ratio11Example = () => (
    <PrismCode
        code={ratio11Code}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Custom Ratio Video

const customRationCode =
    `
<div className="ratio">
    <iframe className="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video"></iframe>
</div>

`;

const CustomRationExample = () => (
    <PrismCode
        code={customRationCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { Ratio169Example, Ratio219Example, Ratio43Example, Ratio11Example, CustomRationExample };
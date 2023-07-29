const COLORS    = require('./includes/colors.js');
const FUNCTIONS = require('../../Scripts/functions.js');
const SCALES = require('./includes/scales.js');

/*        FONT FAMILY CLASSES        */

let fontFamily = [
  {
    label:"font-sans",
    detail:`font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`,
    documentation:"Apply a sans-serif font family."
  },
  {
    label:"font-serif",
    detail:`font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`,
    documentation:"Apply a serif font family."
  },
  {
    label:"font-mono",
    detail:`font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;`,
    documentation:"Apply a monospaced font family."
  }
];

/*        FONT SIZE CLASSES        */

const FONT_SIZES = [
  { name:"xs", size:"0.75rem", lineHeight:"1rem" },
  { name:"sm", size:"0.875rem", lineHeight:"1.25rem" },
  { name:"base", size:"1rem", lineHeight:"1.5rem" },
  { name:"lg", size:"1.125rem", lineHeight:"1.75rem" },
  { name:"xl", size:"1.25rem", lineHeight:"1.75rem" },
  { name:"2xl", size:"1.5rem", lineHeight:"2rem" },
  { name:"3xl", size:"1.875rem", lineHeight:"2.25rem" },
  { name:"4xl", size:"2.25rem", lineHeight:"2.5rem" },
  { name:"5xl", size:"3rem", lineHeight:"1" },
  { name:"6xl", size:"3.75rem", lineHeight:"1" },
  { name:"7xl", size:"4.5rem", lineHeight:"1" },
  { name:"8xl", size:"6rem", lineHeight:"1" },
  { name:"9xl", size:"8rem", lineHeight:"1" }
];

let fontSize = [];

for(i = 0; i < FONT_SIZES.length; i++) {  
  fontSize.push(
    {
      label:`text-${FONT_SIZES[i].name}`,
      detail:`font-size: ${FONT_SIZES[i].size}; line-height: ${FONT_SIZES[i].lineHeight};`,
      documentation:`Set the font size of an element to ${FONT_SIZES[i].size} and the line-height to ${FONT_SIZES[i].lineHeight}.`
    }
  );
}

/*        FONT SMOOTHING CLASSES        */

let fontSmoothing = [
  {
    label:"antialiased",
    detail:"-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
    documentation:"Render text using grayscale antialiasing."
  },
  {
    label:"subpixel-antialiased",
    detail:"-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
    documentation:"Render text using subpixel antialiasing."
  }
];

/*        FONT STYLE CLASSES        */

let fontStyle = [
  {
    label:"italic",
    detail:"font-style: italic;",
    documentation:"Set text to italic."
  },
  {
    label:"not-italic",
    detail:"font-style: normal;",
    documentation:"Set text to display normally. Typically used to reset italic text at different breakpoints."
  }
];

/*        FONT WEIGHT CLASSES        */

const FONT_WEIGHTS = [
  { name:"thin", value:"100" },
  { name:"extralight", value:"200" },
  { name:"light", value:"300" },
  { name:"normal", value:"400" },
  { name:"medium", value:"500" },
  { name:"semibold", value:"600" },
  { name:"bold", value:"700" },
  { name:"extrabold", value:"800" },
  { name:"black", value:"900" }
];

let fontWeight = [];

for(i = 0; i < FONT_WEIGHTS.length; i++) {  
  fontWeight.push(
    {
      label:"font-" + FONT_WEIGHTS[i].name,
      detail:"font-weight: " + FONT_WEIGHTS[i].value + ";",
      documentation:"Set font weight to " + FONT_WEIGHTS[i].name + "."
    }
  );
}

/*        FONT VARIANT NUMERIC CLASSES       */

let fontVariantNumeric = [
  {
    label:"normal-nums",
    detail:"font-variant-numeric: normal;",
    documentation:"Reset numeric font variants. Typically used to reset a font feature at a particular breakpoint."
  },
  {
    label:"ordinal",
    detail:"font-variant-numeric: ordinal;",
    documentation:"Enable special glyphs for ordinal markers, such as a superscript \"st\" after a number."
  },
  {
    label:"slashed-zero",
    detail:"font-variant-numeric: slashed-zero;",
    documentation:"Force a 0 with a slash. Useful when a clear distinction is needed between o and 0."
  },
  {
    label:"lining-nums",
    detail:"font-variant-numeric: lining-nums;",
    documentation:"Use numeric glyphs that are aligned by their baseline. Corresponds to the lnum OpenType feature. Default for most fonts."
  },
  {
    label:"oldstyle-nums",
    detail:"font-variant-numeric: oldstyle-nums;",
    documentation:"Use numeric glyphs where some numbers have descenders. Corresponds to the onum OpenType feature."
  },
  {
    label:"proportional-nums",
    detail:"font-variant-numeric: proportional-nums;",
    documentation:"Use numeric glyphs that have proportional widths. Corresponds to the pnum OpenType feature."
  },
  {
    label:"tabular-nums",
    detail:"font-variant-numeric: tabular-nums;",
    documentation:"Use numeric glyphs that have uniform/tabular widths. Corresponds to the tnum OpenType feature."
  },
  {
    label:"diagonal-fractions",
    detail:"font-variant-numeric: diagonal-fractions;",
    documentation:"Replace numbers separated by a slash with common diagonal fractions. Corresponds to the frac OpenType feature."
  },
  {
    label:"stacked-fractions",
    detail:"font-variant-numeric: stacked-fractions;",
    documentation:"Replace numbers separated by a slash with common stacked fractions. Corresponds to the frac OpenType feature, but not frequently supported."
  }
];

/*        LETTER SPACING CLASSES        */

const FONT_TRACKING_OPTIONS = [
  {name:"tighter", value:"-0.05em"},
  {name:"tight",   value:"-0.025em"},
  {name:"normal",  value:"0"},
  {name:"wide",    value:"0.025em"},
  {name:"wider",   value:"0.05em"},
  {name:"widest",  value:"0.1em"}
];

let letterSpacing = [];

for(i = 0; i < FONT_TRACKING_OPTIONS.length; i++) {
  letterSpacing.push(
    {
      label:`tracking-${FONT_TRACKING_OPTIONS[i].name}`,
      detail:`letter-spacing: ${FONT_TRACKING_OPTIONS[i].value};`,
      documentation:`Set the letter spacing of an element to ${FONT_TRACKING_OPTIONS[i].value}.`
    }
  );
}

/*        LINE HEIGHT CLASSES        */

const RELATIVE_LINE_HEIGHTS = [
  { name:"3",       value:".75" },
  { name:"4",       value:"1" },
  { name:"5",       value:"1.25" },
  { name:"6",       value:"1.5" },
  { name:"7",       value:"1.75" },
  { name:"8",       value:"2" },
  { name:"9",       value:"2.25" },
  { name:"10",      value:"2.5" }
];

const FIXED_LINE_HEIGHTS = [
  { name:"none",    value:"1" },
  { name:"tight",   value:"1.25" },
  { name:"snug",    value:"1.375" },
  { name:"normal",  value:"1.5" },
  { name:"relaxed", value:"1.625" },
  { name:"loose",   value:"2" }
];

let lineHeights = [];

for(i = 0; i < RELATIVE_LINE_HEIGHTS.length; i++) {
  lineHeights.push(
    {
      label:`leading-${RELATIVE_LINE_HEIGHTS[i].name}`,
      detail:`line-height: ${RELATIVE_LINE_HEIGHTS[i].value}rem;`,
      documentation:`Set a relative element line height of ${RELATIVE_LINE_HEIGHTS[i].value} rem.`
    }
  );  
}

for(i = 0; i < FIXED_LINE_HEIGHTS.length; i++) {
  lineHeights.push(
    {
      label:`leading-${FIXED_LINE_HEIGHTS[i].name}`,
      detail:`line-height: ${FIXED_LINE_HEIGHTS[i].value};`,
      documentation:`Set a fixed element line height of ${FIXED_LINE_HEIGHTS[i].value}.`
    }
  );  
}

/*        LIST STYLE CLASSES        */

let listStyleTypes = [
  {
    label:"list-none",
    detail:"list-style-type: none;",
    documentation:"Remove any list styling."
  },
  {
    label:"list-disc",
    detail:"list-style-type: disc;",
    documentation:"Create a bulleted list."
  },
  {
    label:"list-decimal",
    detail:"list-style-type: decimal;",
    documentation:"Create a numbered list."
  }
];

/*        LIST STYLE POSITION CLASSES        */

let listStylePositions = [
  {
    label:"list-inside",
    detail:"list-style-position: inside;",
    documentation:"Set the position of the list markers inside the list element."
  },
  {
    label:"list-outside",
    detail:"list-style-position: outside;",
    documentation:"Set the position of the list markers outside the list element."
  }
];

/*        PLACEHOLDER COLOR CLASSES        */

let placeholderColor = [];

placeholderColor.push(
  {
    label:"placeholder-transparent",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"color: transparent;",
    documentation:"Set the placeholder color of an element to transparent."
  },
  {
    label:"placeholder-current",
    detail:"color: currentColor;",
    documentation:"Set the placeholder color of an element to the currentColor."
  }
);

for(i = 0; i < COLORS.COLORS.length; i++) {
  placeholderColor.push(
    {
      label:`placeholder-${COLORS.COLORS[i].name}`,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:`color: #${COLORS.COLORS[i].value};`,
      documentation:`Set the placeholder color of an element to #${COLORS.COLORS[i].value}.`
    }
  );  
}

/*        PLACEHOLDER OPACITY CLASSES        */

let placeholderOpacity = [];

for(i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  placeholderOpacity.push(
    {
      label:`placeholder-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color: new Color("rgb", [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:`--placeholder-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation:`Set the opacity of the placeholder color to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  );  
}

/*        TEXT ALIGN CLASSES        */

let textAlign = [
  {
    label:"text-left",
    detail:"text-align: left;",
    documentation:"Set the text alignment of an element to the left."
  },
  {
    label:"text-center",
    detail:"text-align: center;",
    documentation:"Set the text alignment of an element to the center."
  },
  {
    label:"text-right",
    detail:"text-align: right;",
    documentation:"Set the text alignment of an element to the right."
  },
  {
    label:"text-justify",
    detail:"text-align: justify;",
    documentation:"Set the text alignment of an element to justified."
  }
];

/*        TEXT COLOR CLASSES        */

let textColor = [];

textColor.push(
  {
    label:"text-transparent",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"color: transparent;",
    documentation:"Set the text color of an element to transparent."
  },
  {
    label:"text-current",
    detail:"color: currentColor;",
    documentation:"Set the text color of an element to the currentColor."
  }
);

for(i = 0; i < COLORS.COLORS.length; i++) {  
  textColor.push(
    {
      label:"text-" + COLORS.COLORS[i].name,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:"color: #" + COLORS.COLORS[i].value + ";",
      documentation:"Set the text color of an element to #" + COLORS.COLORS[i].value + "."
    }
  );
}

/*        TEXT OPACITY CLASSES        */

let textOpacity = [];

for(i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  textOpacity.push(
    {
      label:`text-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color: new Color("rgb", [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:`--text-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation:`Set the opacity of an element's text color to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  );  
}

/*        TEXT DECORATION CLASSES        */

let textDecoration = [
  {
    label:"underline",
    detail:"text-decoration: underline;",
    documentation:"Set the text decoration to underline."
  },
  {
    label:"line-through",
    detail:"text-decoration: line-through;",
    documentation:"Set the text decoration to line-through so that it appears to be striked out."
  },
  {
    label:"no-underline",
    detail:"text-decoration: none;",
    documentation:"Removes the text decoration (underline and/or line-through)."
  }
];

/*        TEXT TRANSFORM CLASSES        */

let textTransform = [
  {
    label:"uppercase",
    detail:"text-transform: uppercase;",
    documentation:"Set an element's text to uppercase."
  },
  {
    label:"lowercase",
    detail:"text-transform: lowercase;",
    documentation:"Set an element's text to lowercase."
  },
  {
    label:"capitalize",
    detail:"text-transform: capitalize;",
    documentation:"Set an element's text to capitalized."
  },
  {
    label:"normal-case",
    detail:"text-transform: none;",
    documentation:"Preserve the original casing. Typically used to reset capitalization at different breakpoints."
  }
];

/*        TEXT OVERFLOW CLASSES        */

let textOverflow = [
  {
    label:"truncate",
    detail:"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    documentation:"Set overflowing text within an element to truncate with an ellipsis (…) if needed."
  },
  {
    label:"overflow-ellipsis",
    detail:"text-overflow: ellipsis;",
    documentation:"Set overflowing text within an element to truncate with an ellipsis (…) if needed."
  },
  {
    label:"overflow-clip",
    detail:"text-overflow: clip;",
    documentation:"Set overflowing text to truncate at the limit of the content area."
  }
];

/*        VERTICAL ALIGN CLASSES        */

let verticalAlign = [
  {
    label:"align-baseline",
    detail:"vertical-align: baseline;",
    documentation:"Align the baseline of an element with the baseline of its parent."
  },
  {
    label:"align-top",
    detail:"vertical-align: top;",
    documentation:"Align the top of an element and its descendants with the top of the entire line."
  },
  {
    label:"align-middle",
    detail:"vertical-align: middle;",
    documentation:"Align the middle of an element with the baseline plus half the x-height of the parent."
  },
  {
    label:"align-bottom",
    detail:"vertical-align: bottom;",
    documentation:"Align the bottom of an element and its descendants with the bottom of the entire line."
  },
  {
    label:"align-text-top",
    detail:"vertical-align: text-top;",
    documentation:"Align the top of an element with the top of the parent element's font."
  },
  {
    label:"align-text-bottom",
    detail:"vertical-align: text-bottom;",
    documentation:"Align the bottom of an element with the bottom of the parent element's font."
  }
];

/*        WHITESPACE CLASSES        */

let whitespace = [
  {
    label:"whitespace-normal",
    detail:"white-space: normal;",
    documentation:"Set element text to wrap normally within an element. Newlines and spaces will be collapsed."
  },
  {
    label:"whitespace-no-wrap",
    detail:"white-space: nowrap;",
    documentation:"Prevent text from wrapping within an element. Newlines and spaces will be collapsed."
  },
  {
    label:"whitespace-pre",
    detail:"white-space: pre;",
    documentation:"Preserve newlines and spaces within an element. Text will not be wrapped."
  },
  {
    label:"whitespace-pre-line",
    detail:"white-space: pre-line;",
    documentation:"Preserve newlines, but not spaces within an element. Text will be wrapped normally."
  },
  {
    label:"whitespace-pre-wrap",
    detail:"white-space: pre-wrap;",
    documentation:"Preserve newlines and spaces within an element. Text will be wrapped normally."
  }
];

/*        WORD BREAK CLASSES        */

let wordBreak = [
  {
    label:"break-normal",
    detail:"overflow-wrap: normal; word-break: normal;",
    documentation:"Set text within an element to only add line breaks at normal word break points."
  },
  {
    label:"break-words",
    detail:"overflow-wrap: break-word;",
    documentation:"Set text within an element to add line breaks mid-word if needed."
  },
  {
    label:"break-all",
    detail:"word-break: break-all;",
    documentation:"Set text within an element to add line break whenever necessary, without trying to preserve whole words."
  }
];

let classes = [];

classes = classes.concat(
  fontFamily,
  fontSize,
  fontSmoothing,
  fontStyle,
  fontWeight,
  fontVariantNumeric,
  letterSpacing,
  lineHeights,
  listStyleTypes,
  listStylePositions,
  placeholderColor,
  placeholderOpacity,
  textAlign,
  textColor,
  textOpacity,
  textDecoration,
  textTransform,
  textOverflow,
  verticalAlign,
  whitespace,
  wordBreak
);

exports.classes = classes;
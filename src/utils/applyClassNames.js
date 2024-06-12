import {
  COLORS,
  SPACINGS,
  BORDER_RADIUS,
  HEIGHTS,
  WIDTHS,
  FONT_TYPES,
  FONT_SIZES,
} from 'Styles/base/appVariables';

export const applyClassNames = className => {
  // Initialize an empty styles object to store the computed styles
  const styles = {};

  // Split the className string into individual classes
  const classes = className.split(' ');

  // Iterate over each class name
  classes.forEach(cls => {
    try {
      if (cls.startsWith('bg-')) {
        const colorKey = cls.replace('bg-', ''); // Extract the color key (e.g., 'red')
        styles.backgroundColor = COLORS[colorKey]; // Set the backgroundColor style
      }
    } catch (error) {
      console.error(
        `Error processing background color for class ${cls}:`,
        error,
      );
    }

    try {
      if (
        cls.startsWith('br-') &&
        !cls.includes('-solid-') &&
        !cls.includes('-dashed-') &&
        !cls.includes('-rad-')
      ) {
        const parts = cls.split('-');
        const position = parts[1];
        let colorKey = parts.slice(2).join('-'); // Extract the color key
        const positionKey = {
          t: 'TopColor',
          b: 'BottomColor',
          l: 'LeftColor',
          r: 'RightColor',
        };
        if (!['t', 'b', 'l', 'r'].includes(position)) {
          colorKey = parts.slice(1).join('-'); // Extract the color key
          styles.borderColor = COLORS[colorKey]; // Apply to all sides
        } else if (positionKey[position]) {
          const borderColorKey = `border${positionKey[position]}`; // Construct the border color style key
          styles[borderColorKey] = COLORS[colorKey]; // Set the border color style
        }
      }
    } catch (error) {
      console.error(`Error processing border color for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('br-rad-')) {
        const parts = cls.split('-');
        const position = parts[2]; // Extract the position (e.g., 'tl')
        let radiusKey = parts.slice(3).join('-'); // Extract the radius key (e.g., '3xl')
        const borderRadiusKey = {
          tl: 'TopLeftRadius',
          tr: 'TopRightRadius',
          bl: 'BottomLeftRadius',
          br: 'BottomRightRadius',
          '': 'Radius',
        };
        if (!['tl', 'tr', 'bl', 'br'].includes(position)) {
          radiusKey = parts.slice(2).join('-');
          styles.borderRadius = BORDER_RADIUS[radiusKey]; // Apply to all sides
        } else {
          styles[`border${borderRadiusKey[position]}`] =
            BORDER_RADIUS[radiusKey]; // Set the border radius style
        }
      }
    } catch (error) {
      console.error(`Error processing border radius for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('br-all-')) {
        const parts = cls.split('-');
        const borderType = parts[2];
        const thickness = parts[3];
        styles.borderWidth = parseInt(thickness, 10); // Set the border width
        styles.borderStyle = borderType; // Set the border style (e.g., solid or dashed)
      }
    } catch (error) {
      console.error(`Error processing border style for class ${cls}:`, error);
    }

    try {
      if (
        cls.startsWith('br-') &&
        (cls.includes('-solid-') || cls.includes('-dashed-'))
      ) {
        const parts = cls.split('-');
        const position = parts[1];
        const borderType = parts[2];
        const thickness = parts[3];
        const borderWidthKey = {
          t: 'TopWidth',
          b: 'BottomWidth',
          l: 'LeftWidth',
          r: 'RightWidth',
        }[position];
        if (borderWidthKey) {
          styles[`border${borderWidthKey}`] = parseInt(thickness, 10); // Set the specific side border width
          styles.borderStyle = borderType; // Set the border style (e.g., solid or dashed)
        }
      }
    } catch (error) {
      console.error(
        `Error processing border width and style for class ${cls}:`,
        error,
      );
    }

    try {
      if (cls.startsWith('p-')) {
        const parts = cls.split('-');
        const position = parts[1];
        const spacingKey = parts.slice(2).join('-'); // Extract the spacing key
        const spacingValue = SPACINGS[spacingKey]; // Get the spacing value from the SPACINGS object
        const paddingKeyMap = {
          t: 'paddingTop',
          b: 'paddingBottom',
          l: 'paddingLeft',
          r: 'paddingRight',
          x: ['paddingLeft', 'paddingRight'],
          y: ['paddingTop', 'paddingBottom'],
          all: 'padding',
        };
        const paddingKeys = Array.isArray(paddingKeyMap[position])
          ? paddingKeyMap[position]
          : [paddingKeyMap[position]];
        paddingKeys.forEach(key => (styles[key] = spacingValue)); // Set the padding styles
      }
    } catch (error) {
      console.error(`Error processing padding for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('m-')) {
        const parts = cls.split('-');
        const position = parts[1];
        const spacingKey = parts.slice(2).join('-'); // Extract the spacing key
        const spacingValue = SPACINGS[spacingKey]; // Get the spacing value from the SPACINGS object
        const marginKeyMap = {
          t: 'marginTop',
          b: 'marginBottom',
          l: 'marginLeft',
          r: 'marginRight',
          x: ['marginLeft', 'marginRight'],
          y: ['marginTop', 'marginBottom'],
          all: 'margin',
        };
        const marginKeys = Array.isArray(marginKeyMap[position])
          ? marginKeyMap[position]
          : [marginKeyMap[position]];
        marginKeys.forEach(key => (styles[key] = spacingValue)); // Set the margin styles
      }
    } catch (error) {
      console.error(`Error processing margin for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('height-')) {
        const heightKey = cls.replace('height-', ''); // Extract the height key (e.g., 'header')
        styles.height = HEIGHTS[heightKey]; // Set the height style
      }
    } catch (error) {
      console.error(`Error processing height for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('width-')) {
        const widthKey = cls.replace('width-', ''); // Extract the width key (e.g., 'side-bar-opened')
        styles.width = WIDTHS[widthKey]; // Set the width style
      }
    } catch (error) {
      console.error(`Error processing width for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('width-per-')) {
        const percentage = cls.replace('width-per-', '');
        styles.width = `${percentage}%`; // Set the width as percentage
      }
    } catch (error) {
      console.error(
        `Error processing width percentage for class ${cls}:`,
        error,
      );
    }

    try {
      if (cls.startsWith('height-per-')) {
        const percentage = cls.replace('height-per-', '');
        styles.height = `${percentage}%`; // Set the height as percentage
      }
    } catch (error) {
      console.error(
        `Error processing height percentage for class ${cls}:`,
        error,
      );
    }

    try {
      if (cls.startsWith('op-')) {
        const opacity = cls.replace('op-', '');
        styles.opacity = parseInt(opacity, 10) / 100; // Set the opacity as percentage
      }
    } catch (error) {
      console.error(`Error processing opacity for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('flex--gr--per--')) {
        const flexPreVal = cls.replace('flex--gr--per--', '');
        styles.flexGrow = parseInt(flexPreVal, 10) / 100; // Set the Flex Grow as percentage
      }
    } catch (error) {
      console.error(`Error processing Flex Grow for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('flex--gr--')) {
        const flexVal = cls.replace('flex--gr--', '');
        styles.flexGrow = parseInt(flexVal, 10); // Set the Flex Grow as percentage
      }
    } catch (error) {
      console.error(`Error processing Flex Grow for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('z-')) {
        const zIndexVal = cls.replace('z-', '');
        styles.zIndex = parseInt(zIndexVal, 10); // Set the Flex Grow as percentage
      }
    } catch (error) {
      console.error(`Error processing Flex Grow for class ${cls}:`, error);
    }

    try {
      if (cls === 'shadow-sm') {
        styles.shadowColor = '#000';
        styles.shadowOffset = {width: 0, height: 1};
        styles.shadowOpacity = 0.22;
        styles.shadowRadius = 2.22;
        styles.elevation = 3;
      } else if (cls === 'shadow-md') {
        styles.shadowColor = '#000';
        styles.shadowOffset = {width: 0, height: 3};
        styles.shadowOpacity = 0.27;
        styles.shadowRadius = 4.65;
        styles.elevation = 6;
      } else if (cls === 'shadow-lg') {
        styles.shadowColor = '#000';
        styles.shadowOffset = {width: 0, height: 4};
        styles.shadowOpacity = 0.3;
        styles.shadowRadius = 4.65;
        styles.elevation = 8;
      }
    } catch (error) {
      console.error(`Error processing shadow for class ${cls}:`, error);
    }
  });

  // Return the computed styles object
  return styles;
};

export const applyTextClassNames = className => {
  // Initialize an empty styles object to store the computed styles
  const styles = {};

  // Split the className string into individual classes
  const classes = className.split(' ');

  // Iterate over each class name
  classes.forEach(cls => {
    try {
      if (cls === 'f-b') {
        styles.fontWeight = 'bold'; // Set font weight to bold
      }
    } catch (error) {
      console.error(
        `Error processing font weight bold for class ${cls}:`,
        error,
      );
    }

    try {
      if (cls === 'f-i') {
        styles.fontStyle = 'italic'; // Set font style to italic
      }
    } catch (error) {
      console.error(
        `Error processing font style italic for class ${cls}:`,
        error,
      );
    }

    try {
      if (cls.startsWith('f-s-')) {
        const fontSize = cls.replace('f-s-', '');
        styles.fontSize = parseInt(fontSize, 10); // Set the font size
      }
    } catch (error) {
      console.error(`Error processing font size for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('text-')) {
        const colorKey = cls.replace('text-', '');
        styles.color = COLORS[colorKey]; // Set the text color
      }
    } catch (error) {
      console.error(`Error processing text color for class ${cls}:`, error);
    }

    try {
      if (cls === 'upper-case') {
        styles.textTransform = 'uppercase'; // Set text transform to uppercase
      } else if (cls === 'lower-case') {
        styles.textTransform = 'lowercase'; // Set text transform to lowercase
      } else if (cls === 'title-case') {
        styles.textTransform = 'capitalize'; // Set text transform to title case (capitalize)
      }
    } catch (error) {
      console.error(`Error processing text transform for class ${cls}:`, error);
    }

    try {
      if (cls.startsWith('text-lh-')) {
        const lineHeight = cls.replace('text-lh-', '');
        styles.lineHeight = parseInt(lineHeight, 10); // Set the line height
      }
    } catch (error) {
      console.error(`Error processing line height for class ${cls}:`, error);
    }

    try {
      if (cls === 'text-ltr') {
        styles.textAlign = 'left'; // Set text alignment to left
      } else if (cls === 'text-rtl') {
        styles.textAlign = 'right'; // Set text alignment to right
      } else if (cls === 'text-center') {
        styles.textAlign = 'center'; // Set text alignment to center
      }
    } catch (error) {
      console.error(`Error processing text alignment for class ${cls}:`, error);
    }

    try {
      if (cls === 'pos-rel') {
        styles.position = 'relative';
      } else if (cls === 'pos-abs') {
        styles.position = 'absolute';
      } else if (cls === 'pos-fix') {
        styles.position = 'fixed';
      }
    } catch (error) {
      console.error(`Error processing position for class ${cls}:`, error);
    }
  });

  // Return the computed styles object
  return styles;
};

# Vertical Bar Chart Component

This README provides instructions for importing the Vertical Bar Chart component into an existing React application.

## Installation

To use the Vertical Bar Chart component, follow these steps:

1. Install the necessary dependencies:

    ```bash
    npm install recharts tailwindcss
    ```

    or

    ```bash
    yarn add recharts tailwindcss
    ```

2. Copy the `VerticalBarChart.js` file (which is in 'src/components' folder) into your project's `/components` directory.

3. Import the `VerticalBarChart` component into your desired React component:

    ```jsx
    import VerticalBarChart from './components/VerticalBarChart';
    ```

## Usage

Once imported, you can use the `VerticalBarChart` component within your React application. Here's an example of how to use it:

```jsx
import React from 'react';
import VerticalBarChart from './components/VerticalBarChart';

const App = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

    return (
        <div className="flex justify-center items-center h-screen">
            <VerticalBarChart months={months} data={data} />
        </div>
    );
};

export default App;
```

## Props

The VerticalBarChart component accepts the following props:

*  months: It is a required prop. An array of strings representing month labels.
*  data: It is also a required props. An array of numbers representing data points corresponding to each month.
*  color: It is an optional prop. A string value of color name or code. It allows to control the color of bars in graph.

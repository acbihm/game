import React from "react";


const styles = {
    content: {
        padding: 20,
        color: "red",
        background: "beige",
        minHeight: 500,
        width: 1000,
        borderStyle: 'outset'
        
    }
};

function TestFrame() {
    return (
        <div style={styles.content}>

        </div>
    );
}

export default TestFrame;
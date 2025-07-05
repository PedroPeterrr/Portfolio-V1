function DocumentIcon({ width = "24", height = "24", color = "#FFF", stroke= "#000" }) {
    return (
        <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path 
                stroke={stroke}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M8 13h6m-6 4h8M13 3H5v18h14V9m-6-6h1l5 5v1m-6-6v4c0 1 1 2 2 2h4"  
                fill={color}
            />
        </svg>
    );
}

export default DocumentIcon;
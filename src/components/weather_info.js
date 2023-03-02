import * as React from "react"

const InfoPage = (props) => {
    
    //changing farenheit to celsius
    const a=Math.floor((props.dane[0]-32)/0.18)/10

    return <div className="h-screen bg-gray-dark">
    <div className="grid grid-cols-2 gap-16 text-gray-dark justify-items-center font-mono overflow-hidden">
        <div className="anim_info3 text-white mt-16 text-4xl col-span-2 text-center">{props.miasto}</div>
        <div className="anim_info2 w-2/3 min-w-fit  p-8 text-center text-2xl bg-gray rounded-md justify-self-end">Temp:{a}°C</div>
        <div className="anim_info1 w-2/3 min-w-fit  p-8 text-center text-2xl bg-gray rounded-md justify-self-start">Humidity:{props.dane[1]}%</div>
        <div className="anim_info2 w-2/3 min-w-fit  p-8 text-center text-2xl bg-gray rounded-md justify-self-end">Cloudcover:{props.dane[2]}%</div>
        <div className="anim_info1 w-2/3 min-w-fit  p-8 text-center text-2xl bg-gray rounded-md justify-self-start">Pressure:{props.dane[3]} hPa</div>
        <div className="anim_info2 w-2/3 min-w-fit  p-8 text-center text-2xl bg-gray rounded-md justify-self-end">Windspeed:{props.dane[4]} m/s</div>
        <div className="anim_info1 w-2/3 min-w-fit  p-8 text-center text-2xl bg-gray rounded-md justify-self-start">Rain:{props.dane[5]}%</div>
        <button onClick={props.restart} className=" anim_info3 h-24 mt-12 pr-8 pl-8 text-xl col-span-2 text-white border-4 border-gray rounded-md hover:bg-gray">Choose diffrent city</button>
    </div>
    </div>
}

export default InfoPage;
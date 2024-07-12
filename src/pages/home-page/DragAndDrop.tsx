// Byimaan

import { useState } from "react";

import React from 'react';


function DragAndDrop() {

    const [widgets, setWidgets] = useState<string[]>(['A', 'B', 'C']);

    const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
        e.dataTransfer.setData('widgetType', widgetType)
    };

    const handleDragOver = (e: React.DragEvent) => {
        // if you removed or say comment down this function then the whole functionaity would not work!
        e.preventDefault();
    };

    const handleOnDrop = (e: React.DragEvent) => {
        const widgetType = e.dataTransfer.getData('widgetType');
        // setWidgets([...widgets, widgetType])
        setWidgets( ws => ws.filter(i => i !== widgetType))
    }

    return (
    <div className="drag-drop w-[90vw] lg:[w-800px] flex gap-2 flex-col items-center  justify-between lg:flex-row lg:items-center bg-zinc-200 rounded-xl p-6">
        <div className="widgets space-y-2 text-white text-nowrap w-full lg:w-[300px]">
            {
                widgets.map(
                    btn => (
                        <div key={btn} className="widget bg-zinc-700 rounded-ld text-center text-lg font-semibold p-4 " draggable onDragStart={e => handleOnDrag(e, btn)}> {btn} </div>  
                    )
                )
            }
            {/* <div className="widget bg-zinc-700 rounded-ld text-center text-lg font-semibold p-4 " draggable onDragStart={e => handleOnDrag(e, 'Widget Aa')}> Widget 'Aa' </div>
            <div className="widget bg-zinc-700 rounded-ld text-center text-lg font-semibold p-4" draggable onDragStart={e => handleOnDrag(e, 'Widget Bb')}> Widget 'Bb' </div>
            <div className="widget bg-zinc-700 rounded-ld text-center text-lg font-semibold p-4" draggable onDragStart={e => handleOnDrag(e, 'Widget Cc')}> Widget 'Cc' </div> */}
        </div>

        <div className="consumer bg-zinc-500 rounded-lg w-full lg:w-[550px] min-h-[300px] max-h-[600px] overflow-y-scroll" onDrop={handleOnDrop} onDragOver={handleDragOver}>
            <div className="widget-group space-y-2 text-white">
                {
                    widgets.map(
                        (widget, index) => (
                            <div className="dropped-widget bg-zinc-700 rounded-ld text-center text-lg font-semibold py-4 " key={index}>{widget}</div>
                        )
                    )
                }
            </div>
        </div>

    </div>
    )
}

export default DragAndDrop
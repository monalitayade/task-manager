import React, { useState, useMemo } from "react";
import './kanban-board.css';
import { Card } from "primereact/card";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { MultiSelect } from 'primereact/multiselect';


// Columns configuration
const initialColumns = [
  { id: "todo", title: "To Do" },
  { id: "inProgress", title: "In Progress" },
  { id: "completed", title: "Completed" }
];

// Tasks mapped by column ID
const initialTasks = {
  todo: [
    { id: "1", title: "Task One" },
    { id: "2", title: "Task Two" }
  ],
  inProgress: [
    { id: "3", title: "Task Three" }
  ],
  completed: [
    { id: "4", title: "Task Four" }
  ]
};

export default function KanbanBoard() {
  const columns = useMemo(() => initialColumns, []);
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    // If position is unchanged
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const startCol = source.droppableId;
    const endCol = destination.droppableId;

    if (startCol === endCol) {
      // Moving inside same column
      const newTasks = Array.from(tasks[startCol]);
      const [moved] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, moved);

      setTasks((prev) => ({
        ...prev,
        [startCol]: newTasks
      }));
    } else {
      // Moving to another column
      const startTasks = Array.from(tasks[startCol]);
      const [moved] = startTasks.splice(source.index, 1);
      const endTasks = Array.from(tasks[endCol]);
      endTasks.splice(destination.index, 0, moved);

      setTasks((prev) => ({
        ...prev,
        [startCol]: startTasks,
        [endCol]: endTasks
      }));
    }
  };

  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
);


  return (
    <div 
    // style={{ display: "flex", gap: "1rem" }}
    className="flex gap-3 overflow-auto" 
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((col) => (
          <Droppable
            key={col.id}
            droppableId={col.id}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex-1 shadow-3 border-1 kanban-card border-round-md"
                // style={{
                //   flex: 1,
                //   background: "#f4f4f4",
                //   padding: "1rem",
                //   borderRadius: "8px",
                //   minHeight: "300px"
                // }}
              >
                <h3 className="m-0 p-3 card-title">{col.title}</h3>
                <div className="w-full p-3">
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="w-full static flex justify-content-center align-items-center  text-center bg-white border-dashed text-color-secondary  p-button text-lg font-bold no-underline">
                        +
                    </a> 
                </div>
                {(tasks[col.id] ?? []).map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id}
                    index={index}
                  >                    
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          marginBottom: "0.5rem",
                          ...provided.draggableProps.style
                        }}
                        className="pt-0 p-3"
                      >
                        <Card className="w-full flex flex-column p-3">
                            <h4 className="my-1 flex justify-content-between">{task.title}
                                <span className="font-normal text-100 text-sm"><i className="pi pi-calendar-clock mr-2"></i>12 Days</span>
                            </h4>
                            <p className="w-full font-medium text-100 text-sm my-1">India Circus</p>
                            <p className="w-full font-normal text-100 text-sm my-1">Card design is required for our new project let’s research the best practices.</p>
                            <div className="flex align-items-center mt-3">
                                <AvatarGroup>
                                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"  shape="circle" />
                                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"  shape="circle" />
                                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"  shape="circle" />
                                    <Avatar label="+2" shape="circle"/>
                                </AvatarGroup>
                                <div className="card flex justify-content-center p-0 ml-1">
                                    <Button icon="pi pi-plus" className="w-auto text-sm add-btn" onClick={() => setVisible(true)} />
                                    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                                        <div className='flex ml-auto '>
                                            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                                            placeholder="Select Project" maxSelectedLabels={1} className="w-full md:w-20rem p-0" />
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}


import React from "react";
import { Card } from "./ui/AllUi"; 
import { projects } from "@/data"; 
const Apple = projects.map((project, index) => (
    <Card key={project.id} card={project} index={index} />
));
export default Apple;

import { useState } from "react";

import ProjectsSideBar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectsSelected from "./components/NoProjectsSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, updateProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(taskText) {
    updateProjectState((prev) => {
      let taskId = new Date().getTime();
      let addedTask = {
        id: taskId,
        text: taskText,
        projectId: prev.selectedProject,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, addedTask],
      };
    });
  }
  function handleDeleteTask(id) {
    updateProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((tasks) => tasks.id !== id),
      };
    });
  }

  function handleProjectStart() {
    updateProjectState((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }
  function handleProjectSelection(id) {
    updateProjectState((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  }
  function handleSave(addedProject) {
    updateProjectState((prev) => {
      addedProject.id = new Date().getTime();
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, addedProject],
      };
    });
  }
  function handleCancel() {
    updateProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  }
  function handleProjectDelete() {
    updateProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProject
        ),
      };
    });
  }
  let project = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );
  let content = (
    <SelectedProject
      project={project}
      onDelete={handleProjectDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={handleSave} onCancel={handleCancel} />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectsSelected onProjectStart={handleProjectStart} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        projects={projectState.projects}
        onProjectSelect={handleProjectSelection}
        onProjectStart={handleProjectStart}
        selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;

import NewProject from "./components/NewProject.jsx";
import NoProjectsSelected from "./components/NoProjectsSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectsSelected />
    </main>
  );
}

export default App;

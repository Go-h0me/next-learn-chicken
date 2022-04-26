import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
      //load data...
      router.push({
        pathname:'/clients/[id]/[clientprojectid]',
        query:{id:'nghia',clientprojectid:'projects'}
      });

  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientsProjectPage;

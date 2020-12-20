const List = (props : any) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo:any) => {
        return (
           <li key={repo.id} className='list'>
               <img src={repo.picture} alt={repo.username} width="100px" height="100px" />
             <b className='repo-text'>{repo.name} </b>
             <span className='repo-description'>{repo.locationName}</span>
           </li>
        );
      })}
    </ul>
  );
};
export default List;

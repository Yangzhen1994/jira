
export const SearchPanel = ({param, setParam, users}) => {
  return (
    <form action="">
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        name=""
        id=""
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value,
          })
        }
      >
        {
            users.map(user => {
                return  <option key={user.id} value={user.id}>{user.name}</option>
            })
        }
      </select>
    </form>
  );
};

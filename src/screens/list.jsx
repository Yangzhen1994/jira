import React from "react";
export const List = ({ list, users }) => {
  return (
    <table border="1">
      <thead></thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

import React from "react";
import { useEffect, useContext } from "react";
import GroupContext from "../Context/group/groupContext";

const Groups = () => {
  const authContext = useContext(GroupContext);
  const { getGroup, groups } = authContext;

  useEffect(() => {
    getGroup();
  }, []);

  return !!groups ? (
    <div>
      {groups.map(group => {
        return <li>group.title</li>;
      })}
    </div>
  ) : (
    <div>Spinner</div>
  );
};

export default Groups;

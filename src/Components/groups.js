import React from "react";
import { useEffect, useContext } from "react";
import GroupContext from "../Context/group/groupContext";

const Groups = () => {
  const authContext = useContext(GroupContext);
  const { getGroup, groups } = authContext;

  useEffect(() => {
    getGroup();
  }, [groups]);

  return !!groups ? (
    <div>
      {Object.keys(groups).map(group => {
        return <li>group</li>;
      })}
    </div>
  ) : (
    <div>Spinner</div>
  );
};

export default Groups;

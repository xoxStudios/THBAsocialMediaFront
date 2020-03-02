import React, { useState, useContext } from "react";
import GroupContext from "../Context/group/groupContext";

const GroupsCreate = () => {
  const groupContext = useContext(GroupContext);
  const { createGroup, groupGlobal } = groupContext;

  const [groupForm, setGroupForm] = useState({
    title: "",
    theme: "",
    description: ""
  });

  const { title, theme, description } = groupForm;

  const onChange = e =>
    setGroupForm({ ...groupForm, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (title === "" || theme === "" || description === "") {
      console.log("Please enter all fields");
    } else {
      createGroup({
        UserID: JSON.parse(localStorage.getItem("User Data"))._id,
        title,
        theme,
        description
      });
    }
  };

  return !groupGlobal ? (
    <div className="content-wrapper">
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              required
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              id="theme"
              type="theme"
              name="theme"
              value={theme}
              onChange={onChange}
              required
              placeholder="Theme"
            />
          </div>
          <div className="form-group">
            <input
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={onChange}
              required
              placeholder="Description"
            />
          </div>
          <input
            type="submit"
            value="Erstellen"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  ) : (
    <div className="content-wrapper">
      Du hast erfolgreich die Gruppe <h2>{groupGlobal.title}</h2> erstellt
    </div>
  );
};

export default GroupsCreate;

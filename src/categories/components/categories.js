import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";
import Media from "../../playlist/components/media";

function Categories(props) {
  console.log(props);
  return (
    <div className="Categories">
      {props.isLoading && <p>Cargando...</p>}
      <Search />
      {props.search &&
        props.search.map((item) => (
          <Media key={item.get("id")} {...item.toJS()} />
        ))}
      {props.categories.map((item) => {
        return (
          <Category
            key={item.get("id")}
            {...item.toJS()}
            handleOpenModal={props.handleOpenModal}
          />
        );
      })}
    </div>
  );
}

export default Categories;

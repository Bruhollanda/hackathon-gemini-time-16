import { Input } from "@material-ui/core";
import React, { Component } from 'react'
import { useState } from "react";

import "./styles.css";

function Filtro() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="root">
      <Input />
    </div>
  );
}

export default Filtro;

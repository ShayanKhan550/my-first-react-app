import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { useid,usename } = useParams();

  return (
    <div>
        <h2> Welcome to dynamic data reandering app by Shayan</h2>
        <p>
      User: {useid}

        </p>
            <p>
      Name : {usename}

            </p>
    </div>
  );
}

import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

const Test = () => {
  const header = ["Produits", "Boutique 1", "Boutique 2"];
  const body = [
    ["Ryzen 5600X", "Fractal", "WakComputer"],
    ["Prix1", 25000, 52000],
    ["RXT 3090", "Lahlou Industry", "WakComputer"],
    ["Prix2", 325000, 352000],





  ];


  function handleDownloadExcel() {
    downloadExcel({
      fileName: "react-export-table-to-excel -> downloadExcel method",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        // accept two different data structures
        body: body,
      },
    });
  }

  return (
    <div>
      <button onClick={handleDownloadExcel}>download excel</button>

      <table>
        <tbody>
          <tr>
            {header.map((head) => (
              <th key={head}> {head} </th>
            ))}
          </tr>

          {body.map((item, i) => (
            <tr key={i}>
              {item.map((it) => (
                <td key={it}>{it}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
import React from "react";

export default function Table(){
    return(
        <div className="h-[500px] w-[700px] bg-gradient-to-tr from-emerald-600 text-white">
        <h1 className="text-center">FIXED TABLE HEADER</h1>
        
        <table>
            <header>
                <tr>
                    <th className="p-2">INVOICE</th>
                    <th className="p-2">CUSTOMER</th>
                    <th className="p-2">SHIP</th>
                    <th className="p-2">PRICE</th>
                    <th className="p-2">PURCHASED PRICE</th>
                    <th className="p-2">STATUS</th>
                </tr>
            </header>
           <tbody>
            <tr>
            <td>1001</td>
            <td>mark otto</td>
            <td>japan</td>
            <td>$3000</td>
            <td>$1200</td>
            <td>program</td>
            </tr>

            <tr>
            <td>1002</td>
            <td>jacob</td>
            <td>russia</td>
            </tr>
    </tbody> 
    </table>
        </div>
    )
}   
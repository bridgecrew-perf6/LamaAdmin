import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
   
   const Button=({type})=>{
       return <button className={"widgetLgButton " + type}>{type}</button>
   }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/69398838_730190137441278_2885353935621586944_n.png?_nc_cat=100&ccb=1-4&_nc_sid=ae9488&_nc_ohc=TCR27WWtVvcAX-suETm&_nc_ht=scontent.fvca1-2.fna&oh=bf5c4c22b4b1c636073b8a44ba06545c&oe=6138F804"
                         alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Akashi Seijuro</span>
                    </td>
                    <td className="widgetLgDate">
                        2 Jun 2021
                    </td>
                    <td className="widgetLgAmount">$124.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/84474531_712383865832773_7104290204424339456_n.png?_nc_cat=107&ccb=1-4&_nc_sid=ae9488&_nc_ohc=dLFEg8ucMGAAX_5Jx_b&tn=LiijmfxaT4oUelwV&_nc_ht=scontent.fvca1-2.fna&oh=eba1166bc38cc7d5f3551c4d77767d75&oe=6138B0D3"
                         alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Aomine Daiki</span>
                    </td>
                    <td className="widgetLgDate">
                        2 Jun 2021
                    </td>
                    <td className="widgetLgAmount">$124.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/151260961_138240691486753_5182070162273352683_n.png?_nc_cat=104&ccb=1-4&_nc_sid=ae9488&_nc_ohc=P-aK2hfNOZMAX_7yDpo&_nc_ht=scontent.fvca1-2.fna&oh=22cad46b1977ccfed9702723f96b0b41&oe=613AA85B"
                         alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Kise Ryota</span>
                    </td>
                    <td className="widgetLgDate">
                        2 Jun 2021
                    </td>
                    <td className="widgetLgAmount">$124.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/69398838_730190137441278_2885353935621586944_n.png?_nc_cat=100&ccb=1-4&_nc_sid=ae9488&_nc_ohc=TCR27WWtVvcAX-suETm&_nc_ht=scontent.fvca1-2.fna&oh=bf5c4c22b4b1c636073b8a44ba06545c&oe=6138F804"
                         alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Akashi Seijuro</span>
                    </td>
                    <td className="widgetLgDate">
                        2 Jun 2021
                    </td>
                    <td className="widgetLgAmount">$124.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}

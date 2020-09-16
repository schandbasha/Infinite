import React from 'react';

const CardTable = (props) => {
return (
    <div className="table-wrapper table-responsive">
      <table className="table table-hover mb-0 cardTable">
        <thead>
          <tr>
            <th className="th-md">DATES
                <span className="sortIcon"><i class="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">ICD CODES
            <span className="sortIcon"><i class="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">CONDITION
            <span className="sortIcon"><i class="fa fa-sort-amount-asc"></i></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 OCT 2016 - 20 NOV 2016</td>
            <td>ICD 250.00</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>PREDIABATES</td>
          </tr>
          <tr>
            <td>15 OCT 2016 - 20 NOV 2016</td>
            <td>ICD 250.00</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>BROUNCHITIS</td>
          </tr>
          <tr>
            <td>15 AUGT 2016 - 20 DEC 2016</td>
            <td>ICD 250.00</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>VIRAL SINUSITINS</td>
          </tr>
          <tr>
            <td>15 AUG 2018 - 20 JUN 2018</td>
            <td>ICD 250.00</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>MALIGNANT</td>
          </tr>
        </tbody>
      </table>
    </div>
);
};

export default CardTable;
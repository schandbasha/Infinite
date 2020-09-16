import React from 'react';

const TablePage = (props) => {
return (
<div className="card card-cascade narrower">
  <div className="view view-cascade narrower d-flex justify-content-between align-items-center">
    <div className="encounters mx-3">
        <span className="arrowIcons"><i className="fa fa-arrows-h" aria-hidden="true"></i></span>
      ENCOUNTERS<br />
      <span className="encounterNumber">32</span>
    </div>
    <div>
      <button type="button" className="btn btn-primary btn-sm px-4 mx-3">
        Details
      </button>
    </div>
  </div>
  <div className="px-3 py-0">
    <div className="table-wrapper table-responsive">
      <table className="table table-hover mb-0">
        <thead>
          <tr>
            <th className="th-md">TYPE
                <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">START DATE
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">END DATE
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">PROVIDER
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">INSURANCE
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">COST
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">IDENTIFIER
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">DESCRIPTION
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
            <th className="th-md">REASON
            <span className="sortIcon"><i className="fa fa-sort-amount-asc"></i></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Impatient</td>
            <td>08 AUG 2016</td>
            <td>08 AUG 2016</td>
            <td>Hoag Hospital</td>
            <td>Kasier Performance</td>
            <td>@$345.45</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>Bronchits</td>
            <td>Admission to Thoaric</td>
            <td>Chronic abstructive</td>
          </tr>
          <tr>
            <td>Impatient</td>
            <td>08 AUG 2016</td>
            <td>08 AUG 2016</td>
            <td>Hoag Hospital</td>
            <td>Kasier Performance</td>
            <td>@$345.45</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>Bronchits</td>
            <td>Admission to Thoaric</td>
            <td>Chronic abstructive</td>
          </tr>
          <tr>
            <td>Impatient</td>
            <td>08 AUG 2016</td>
            <td>08 AUG 2016</td>
            <td>Hoag Hospital</td>
            <td>Kasier Performance</td>
            <td>@$345.45</td>
            <td style={{color:'indigo',fontWeight:'600', fontSize: '0.7rem'}}>Bronchits</td>
            <td>Admission to Thoaric</td>
            <td>Chronic abstructive</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
);
};

export default TablePage;